import React from 'react';

import { Spacer, Text } from '../../tokens';
import * as CardContainers from './card.component';
import * as Containers from './containers';
import DUMMY_BOOKS_DATA from './dummy_data';

import RandomImageContainer from './random_image';

import SearchBar from './search.component';

const DigitalLibrary = () => {
    return (
        <>
            <Spacer y={[10]} />
            <Containers.TopContainer></Containers.TopContainer>
            <Spacer y={[5]} />
            <SearchBar />
            <Spacer y={[5]} />
            <Containers.CategoriesRow>
                <Containers.CategoriesContainer>
                    <RandomImageContainer />
                    <RandomImageContainer />
                    <RandomImageContainer />
                    <RandomImageContainer />
                    <Containers.CategoryTitle>
                        <Text weight={'md'}>Classics</Text>
                    </Containers.CategoryTitle>
                </Containers.CategoriesContainer>
                <Spacer x={[2]} />
                <Containers.CategoriesContainer>
                    <RandomImageContainer />
                    <RandomImageContainer />
                    <RandomImageContainer />
                    <RandomImageContainer />
                    <Containers.CategoryTitle>
                        <Text weight={'md'}>Fantasy</Text>
                    </Containers.CategoryTitle>
                </Containers.CategoriesContainer>
                <Spacer x={[2]} />
                <Containers.CategoriesContainer>
                    <RandomImageContainer />
                    <RandomImageContainer />
                    <RandomImageContainer />
                    <RandomImageContainer />
                    <Containers.CategoryTitle>
                        <Text weight={'md'}>Historical fiction</Text>
                    </Containers.CategoryTitle>
                </Containers.CategoriesContainer>
            </Containers.CategoriesRow>
            <Spacer y={[5]} />
            <Containers.CategoriesRow>
                <Containers.CategoriesContainer>
                    <RandomImageContainer />
                    <RandomImageContainer />
                    <RandomImageContainer />
                    <RandomImageContainer />
                    <Containers.CategoryTitle>
                        <Text weight={'md'}>Humour</Text>
                    </Containers.CategoryTitle>
                </Containers.CategoriesContainer>
                <Spacer x={[2]} />
                <Containers.CategoriesContainer>
                    <RandomImageContainer />
                    <RandomImageContainer />
                    <RandomImageContainer />
                    <RandomImageContainer />
                    <Containers.CategoryTitle>
                        <Text weight={'md'}>Horror</Text>
                    </Containers.CategoryTitle>
                </Containers.CategoriesContainer>
                <Spacer x={[2]} />
                <Containers.CategoriesContainer>
                    <RandomImageContainer />
                    <RandomImageContainer />
                    <RandomImageContainer />
                    <RandomImageContainer />
                    <Containers.CategoryTitle>
                        <Text weight={'md'}>Fairy tales</Text>
                    </Containers.CategoryTitle>
                </Containers.CategoriesContainer>
            </Containers.CategoriesRow>
            <Spacer y={[5]} />
            <Text size={['lg']} weight={'md'}>
                Top reads this week
            </Text>
            <Spacer y={[2]} />
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
                                                src={`https://picsum.photos/id/${Math.floor(
                                                    Math.random() * 100
                                                )}/200`}
                                                alt={book_data.book_title}
                                            />
                                        </CardContainers.BookImageContainer>
                                        <Spacer>
                                            <CardContainers.BookTextContainer>
                                                <Text weight={'md'}>
                                                    {book_data.book_title}
                                                </Text>
                                                <Text
                                                    size={['sm']}
                                                    maxLines={5}
                                                >
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
                                                src={`https://picsum.photos/id/${Math.floor(
                                                    Math.random() * 100
                                                )}/200`}
                                                alt={book_data.book_title}
                                            />
                                        </CardContainers.BookImageContainer>
                                        <Spacer>
                                            <CardContainers.BookTextContainer>
                                                <Text weight={'md'}>
                                                    {book_data.book_title}
                                                </Text>
                                                <Text
                                                    size={['sm']}
                                                    maxLines={5}
                                                >
                                                    {book_data.book_description}
                                                </Text>
                                                <Text
                                                    size={['sm']}
                                                    weight={'md'}
                                                >
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
                                                src={`https://picsum.photos/id/${Math.floor(
                                                    Math.random() * 100
                                                )}/200`}
                                                alt={book_data.book_title}
                                            />
                                        </CardContainers.BookImageContainer>
                                        <Spacer>
                                            <CardContainers.BookTextContainer>
                                                <Text weight={'md'}>
                                                    {book_data.book_title}
                                                </Text>
                                                <Text
                                                    size={['sm']}
                                                    maxLines={5}
                                                >
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
        </>
    );
};

export default DigitalLibrary;
