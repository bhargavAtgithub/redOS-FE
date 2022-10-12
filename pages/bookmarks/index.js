import React from 'react';
import Bookmarks from '../../components/bookmarks';
import BookmarksProvider from '../../components/bookmarks/bookmarks.context';
import { supabase } from '../../config/supabaseClient';

const BookmarksScreen = ({ bookmarks }) => (
    <BookmarksProvider bookmarks={bookmarks}>
        <Bookmarks />
    </BookmarksProvider>
);

export default BookmarksScreen;

export async function getStaticProps(_context) {
    const { data } = await supabase
        .from('bookmarks')
        .select('id,bookmark_url,url_meta_data,tags');

    return {
        props: {
            bookmarks: data,
        },
    };
}
