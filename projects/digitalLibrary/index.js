import Image from 'next/image';
import React, { useState } from 'react';

import { Spacer, Text } from '../../tokens';
import * as Containers from './containers';

import RandomImageContainer from './random_image';

import SearchBar from './search.component';

import Header from './header';
import RandomBooks from './randomBooks.js';

const DigitalLibrary = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const RenderPage = () => {
        if (currentPage == 'home') {
            return <RandomBooks title={'Top reads this week'} />;
        } else {
            return <RandomBooks title={currentPage} />;
        }
    };

    return (
        <Containers.MainContainer>
            <Containers.BannerContainer>
                <Image
                    src={'/projects/digitalLibrary/Banner.jpg'}
                    layout="fill"
                    objectFit="cover"
                />
            </Containers.BannerContainer>
            <Header onClickHome={() => setCurrentPage('home')} />
            <Spacer y={[5]} />
            <SearchBar />
            <Spacer y={[5]} />
            {currentPage == 'home' ? (
                <Containers.CategoriesColumn>
                    <Containers.CategoryHeader>
                        <Text size={['xl']} weight={'md'}>
                            Featured Collections
                        </Text>
                    </Containers.CategoryHeader>
                    <Containers.CategoriesRow>
                        <Containers.CategoriesSubCol>
                            <Containers.RectangleContainer>
                                <RandomImageContainer
                                    title={'Classics'}
                                    onClick={() => setCurrentPage('Classics')}
                                />
                            </Containers.RectangleContainer>
                            <Spacer />
                            <Containers.CategoriesRow>
                                <Containers.SquareContainer>
                                    <RandomImageContainer
                                        title={'Fantasy'}
                                        onClick={() =>
                                            setCurrentPage('Fantasy')
                                        }
                                    />
                                </Containers.SquareContainer>
                                <Spacer />
                                <Containers.SquareContainer>
                                    <RandomImageContainer
                                        title={'Historical fiction'}
                                        onClick={() =>
                                            setCurrentPage('Historical fiction')
                                        }
                                    />
                                </Containers.SquareContainer>
                            </Containers.CategoriesRow>
                        </Containers.CategoriesSubCol>
                        <Spacer />
                        <Containers.CategoriesSubCol>
                            <Containers.CategoriesRow>
                                <Containers.SquareContainer>
                                    <RandomImageContainer
                                        title={'Humour'}
                                        onClick={() => setCurrentPage('Humour')}
                                    />
                                </Containers.SquareContainer>
                                <Spacer />
                                <Containers.SquareContainer>
                                    <RandomImageContainer
                                        title={'Horror'}
                                        onClick={() => setCurrentPage('Horror')}
                                    />
                                </Containers.SquareContainer>
                            </Containers.CategoriesRow>
                            <Spacer />
                            <Containers.RectangleContainer>
                                <RandomImageContainer
                                    title={'Fairy tales'}
                                    onClick={() =>
                                        setCurrentPage('Fairy tales')
                                    }
                                />
                            </Containers.RectangleContainer>
                        </Containers.CategoriesSubCol>
                    </Containers.CategoriesRow>
                    <Spacer x={[2]} />
                </Containers.CategoriesColumn>
            ) : null}
            <Spacer y={[5]} />
            <Spacer y={[5]} />
            <RenderPage />
            <Spacer y={[10]} />
            <Containers.Footer></Containers.Footer>
        </Containers.MainContainer>
    );
};

export default DigitalLibrary;
