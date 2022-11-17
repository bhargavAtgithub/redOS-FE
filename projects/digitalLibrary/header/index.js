import React from 'react';
import { Text } from '../../../tokens';
import * as HComponents from './header.components';

const Header = ({ onClickHome }) => {
    return (
        <HComponents.HeaderContainer>
            <HComponents.LeftHeaderItems>
                <HComponents.HeaderItem onClick={onClickHome}>
                    <Text color="SNOW" cursor={'pointer'}>
                        Home
                    </Text>
                </HComponents.HeaderItem>
                <HComponents.HeaderItem>
                    <Text color="SNOW" cursor={'pointer'}>
                        Collections
                    </Text>
                </HComponents.HeaderItem>
                <HComponents.HeaderItem>
                    <Text color="SNOW" cursor={'pointer'}>
                        Partners
                    </Text>
                </HComponents.HeaderItem>
                <HComponents.HeaderItem>
                    <Text color="SNOW" cursor={'pointer'}>
                        Locations
                    </Text>
                </HComponents.HeaderItem>
            </HComponents.LeftHeaderItems>
            <HComponents.RightHeaderItems>
                <HComponents.HeaderItem>
                    <Text color="SNOW" cursor={'pointer'}>
                        Login
                    </Text>
                </HComponents.HeaderItem>
            </HComponents.RightHeaderItems>
        </HComponents.HeaderContainer>
    );
};

export default Header;
