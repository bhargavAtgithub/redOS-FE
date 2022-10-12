import React, { useContext, useState } from 'react';

import { Button, Input, Spacer, Text } from '../../tokens';
import { Form, FormContainer } from '../containers';

import { useApp, useAuth } from '../../state';
import { useToast } from '../app';
import MetaCard from '../metaCard/metacard.component';
import * as Containers from './bookmarks.container';
import { BookmarksContext } from './bookmarks.context';

const Bookmarks = () => {
    const auth = useAuth();
    const app = useApp();
    const bookmarksContext = useContext(BookmarksContext);
    const toast = useToast();
    const [bookmarkUrl, setBookmarkUrl] = useState('');
    const [isSubmitting, setIsSubmitting] = useState();
    // TODO: Implement search
    // const [searchText, setSearchText] = useState('');
    // const [meta, setMeta] = useState({});

    const addBookmark = async (url) => {
        setIsSubmitting(true);
        try {
            const appResponse = await app.hello({
                url: '/api/scrape?url=' + url,
            });

            await bookmarksContext.createBookmark(url, appResponse);
        } catch (error) {
            console.log(error);
            toast({
                message: 'Unable to fetch preview.',
            });
        } finally {
            setBookmarkUrl('');
            setIsSubmitting(false);
        }
    };

    const formSubmit = (e) => {
        e.preventDefault();
        addBookmark(bookmarkUrl);
    };

    return (
        <>
            <FormContainer>
                <Spacer>
                    <Text size={['lg']} weight="b" color="RED">
                        Bookmarks
                    </Text>
                </Spacer>
                {/* {Object.keys(meta).length ? <MetaCard meta={meta} /> : null} */}
                {auth.user.role === 'RED' ? (
                    <Form onSubmit={formSubmit}>
                        <Input
                            label={'URL'}
                            type="url"
                            onChange={(e) => {
                                setBookmarkUrl(e.target.value);
                            }}
                            value={bookmarkUrl}
                            placeholder={'Add a new bookmark URL'}
                            name="bookmark_url"
                            required={true}
                            // onPaste={(e) => {
                            //     console.log(e.clipboardData.getData('text'));
                            //     addBookmark(e.clipboardData.getData('text'));
                            // }}
                        />
                        <Spacer />
                        <Button
                            size={'rg'}
                            varient={0}
                            title={'Add bookmark'}
                            width={'flex'}
                            type="submit"
                            isLoading={isSubmitting}
                        />
                    </Form>
                ) : null}
            </FormContainer>
            <Spacer y={[4, 8]} />
            <Containers.BookmarksContainer>
                <Containers.BookmarksColumnContainer>
                    {bookmarksContext.orderedBookmarks.leftBookmarks.length
                        ? bookmarksContext.orderedBookmarks.leftBookmarks.map(
                              (bookmark) => (
                                  <MetaCard
                                      meta={bookmark.url_meta_data}
                                      key={bookmark.id}
                                  />
                              )
                          )
                        : null}
                </Containers.BookmarksColumnContainer>
                <Containers.BookmarksColumnContainer>
                    {bookmarksContext.orderedBookmarks.centerBookmarks.length
                        ? bookmarksContext.orderedBookmarks.centerBookmarks.map(
                              (bookmark) => (
                                  <MetaCard
                                      meta={bookmark.url_meta_data}
                                      key={bookmark.id}
                                  />
                              )
                          )
                        : null}
                </Containers.BookmarksColumnContainer>
                <Containers.BookmarksColumnContainer>
                    {bookmarksContext.orderedBookmarks.rightBookmarks.length
                        ? bookmarksContext.orderedBookmarks.rightBookmarks.map(
                              (bookmark) => (
                                  <MetaCard
                                      meta={bookmark.url_meta_data}
                                      key={bookmark.id}
                                  />
                              )
                          )
                        : null}
                </Containers.BookmarksColumnContainer>
            </Containers.BookmarksContainer>
        </>
    );
};

export default Bookmarks;
