import PropTypes from 'prop-types';
import React from 'react';
import { Spacer, Text } from '../../tokens';
import useCursor from '../../tokens/cursor/useCursor';
import * as MetaContainers from './metaCard.styles';

const MetaCard = ({ meta }) => {
    const cursor = useCursor();

    return (
        <Spacer>
            <a href={meta.url} target="_blank" rel="noreferrer">
                <MetaContainers.MetaContainer
                    onMouseEnter={() => {
                        cursor.toggleHidden(true);
                    }}
                    onMouseLeave={() => {
                        cursor.toggleHidden(false);
                    }}
                >
                    {meta.image && (
                        <MetaContainers.MetaImageContainer>
                            <MetaContainers.MetaImage
                                src={meta.image}
                                alt={meta.title}
                            />
                        </MetaContainers.MetaImageContainer>
                    )}
                    <Spacer xy={[2]}>
                        <MetaContainers.MetaTextContainer>
                            <Text color="RED" size={['sm']} maxLines={2}>
                                {meta.url}
                            </Text>

                            <Spacer y={[0.5]} />

                            {meta.title && (
                                <>
                                    <Text weight={'b'}>{meta.title}</Text>
                                    <Spacer y={[0.5]} />
                                </>
                            )}
                            {meta.description && (
                                <>
                                    <Text size={['sm']} maxLines={3}>
                                        {meta.description}
                                    </Text>
                                    <Spacer y={[1]} />
                                </>
                            )}
                            {meta.publisher && (
                                <>
                                    <Text size={['mi']} maxLines={1}>
                                        {meta.publisher}
                                    </Text>
                                </>
                            )}
                        </MetaContainers.MetaTextContainer>
                    </Spacer>
                </MetaContainers.MetaContainer>
            </a>
        </Spacer>
    );
};

MetaCard.defaultProps = {};

MetaCard.propTypes = {
    meta: PropTypes.object,
};

export default MetaCard;
