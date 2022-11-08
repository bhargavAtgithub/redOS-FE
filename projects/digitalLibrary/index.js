import React from 'react';

import { Spacer, Text } from '../../tokens';
import * as CardContainers from './card.component';
import * as Containers from './containers';
import DUMMY_BOOKS_DATA from './dummy_data';

const DigitalLibrary = () => {
    return (
        <Containers.Container>
            <Containers.ColumnContainer>
                {DUMMY_BOOKS_DATA.map((book_data, index) => {
                    if (book_data.id % 3 === 2) {
                        return (
                            <Spacer>
                                <CardContainers.BooksCardContainer
                                    key={`book_${book_data.id}`}
                                >
                                    <CardContainers.BookImageContainer>
                                        <CardContainers.BookImage
                                            src={
                                                'https://picsum.photos/400/200'
                                            }
                                            alt={book_data.book_title}
                                        />
                                    </CardContainers.BookImageContainer>
                                    <Spacer>
                                        <CardContainers.BookTextContainer>
                                            <Text weight={'md'}>
                                                {book_data.book_title}
                                            </Text>
                                            <Text size={['sm']} maxLines={5}>
                                                {book_data.book_description}
                                            </Text>
                                        </CardContainers.BookTextContainer>
                                    </Spacer>
                                </CardContainers.BooksCardContainer>
                            </Spacer>
                        );
                    }
                })}
            </Containers.ColumnContainer>
            <Containers.ColumnContainer>
                {DUMMY_BOOKS_DATA.map((book_data, index) => {
                    if (book_data.id % 3 === 1) {
                        return (
                            <Spacer>
                                <CardContainers.BooksCardContainer
                                    key={`book_${book_data.id}`}
                                >
                                    <CardContainers.BookImageContainer>
                                        <CardContainers.BookImage
                                            src={
                                                'https://picsum.photos/400/200'
                                            }
                                            alt={book_data.book_title}
                                        />
                                    </CardContainers.BookImageContainer>
                                    <Spacer>
                                        <CardContainers.BookTextContainer>
                                            <Text weight={'md'}>
                                                {book_data.book_title}
                                            </Text>
                                            <Text size={['sm']} maxLines={5}>
                                                {book_data.book_description}
                                            </Text>
                                            <Text size={['sm']} weight={'md'}>
                                                {book_data.author_name}
                                            </Text>
                                        </CardContainers.BookTextContainer>
                                    </Spacer>
                                </CardContainers.BooksCardContainer>
                            </Spacer>
                        );
                    }
                })}
            </Containers.ColumnContainer>
            <Containers.ColumnContainer>
                {DUMMY_BOOKS_DATA.map((book_data, index) => {
                    if (book_data.id % 3 === 0) {
                        return (
                            <Spacer>
                                <CardContainers.BooksCardContainer
                                    key={`book_${book_data.id}`}
                                >
                                    <CardContainers.BookImageContainer>
                                        <CardContainers.BookImage
                                            src={
                                                'https://picsum.photos/400/200'
                                            }
                                            alt={book_data.book_title}
                                        />
                                    </CardContainers.BookImageContainer>
                                    <Spacer>
                                        <CardContainers.BookTextContainer>
                                            <Text weight={'md'}>
                                                {book_data.book_title}
                                            </Text>
                                            <Text size={['sm']} maxLines={5}>
                                                {book_data.book_description}
                                            </Text>
                                        </CardContainers.BookTextContainer>
                                    </Spacer>
                                </CardContainers.BooksCardContainer>
                            </Spacer>
                        );
                    }
                })}
            </Containers.ColumnContainer>
        </Containers.Container>
    );
};

export default DigitalLibrary;
