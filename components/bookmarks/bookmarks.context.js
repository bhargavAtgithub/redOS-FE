import React, { createContext, useEffect, useState } from 'react';
import { supabase } from '../../config/supabaseClient';
import { useApp } from '../../state';
import { useToast } from '../app';

const defaultState = {};

export const BookmarksContext = createContext(defaultState);

const BookmarksProvider = ({ bookmarks, children }) => {
    const app = useApp();
    const toast = useToast();
    const [savingBookmark, setSavingBookmarks] = useState(false);
    const [orderedBookmarks, setOrderedBookmarks] = useState({
        leftBookmarks: [],
        centerBookmarks: [],
        rightBookmarks: [],
    });

    // TODO: Add tags and displays selected tag bookmarks
    // const [tags, setTags] = useState([]);
    // const [selectedTag, setSelectedTag] = useState(null);
    // const [orderedTagSelect, setOrderedTagSelect] = useState();

    // TODO: Add pagination
    // const getBookmarks = async () => {};

    const orderBookmarks = (marks) => {
        let leftBookmarks = [];
        let centerBookmarks = [];
        let rightBookmarks = [];
        for (let i = 0; i < marks.length; i++) {
            if (i % 3 == 0) {
                leftBookmarks.push(marks[i]);
            } else if (i % 3 == 1) {
                centerBookmarks.push(marks[i]);
            } else {
                rightBookmarks.push(marks[i]);
            }
        }
        const new_order = {
            leftBookmarks,
            centerBookmarks,
            rightBookmarks,
        };

        setOrderedBookmarks(new_order);
    };

    useEffect(() => {
        orderBookmarks(bookmarks);
    }, [bookmarks]);

    const createBookmark = async (url, meta) => {
        setSavingBookmarks(true);
        try {
            const new_bookmark = { bookmark_url: url, url_meta_data: meta };
            const { error } = await supabase
                .from('bookmarks')
                .insert(new_bookmark);
            if (error) throw error;

            let new_bookmarks = [new_bookmark, ...bookmarks];

            orderBookmarks(new_bookmarks);

            const { data, error: revalidate_error } = await supabase
                .from('secrets')
                .select()
                .eq('key', revalidate_secret)
                .limit(1);

            if (revalidate_error) {
                throw revalidate_error;
            }

            const { revalidate_secret } = data;
            let isrResponse = await app.hello({
                url:
                    '/api/revalidate?secret=' +
                    revalidate_secret[0].revalidate_secret,
            });
            console.log(isrResponse);
        } catch (error) {
            console.log(error);
            toast({
                message: error.message,
            });
        } finally {
            setSavingBookmarks(false);
        }
    };

    return (
        <BookmarksContext.Provider
            value={{
                bookmarks,
                createBookmark,
                savingBookmark,
                orderedBookmarks,
            }}
        >
            {children}
        </BookmarksContext.Provider>
    );
};

export default BookmarksProvider;
