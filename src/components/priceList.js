import { RichText } from 'prismic-reactjs';
import React from 'react';
import styled from 'styled-components';
import PriceItem from './priceItem';

const Wrapper = styled.section`
    max-width: 800px;
    margin: 0 auto;
`;

const List = styled.div`
    display: flex;
`;

const PriceList = ({ title, fields }) => {

    return (
        <Wrapper>
            <RichText render={title} />
            <List>
                {fields.map((item, i) => {
                    console.log('item', item);
                    return (
                        <PriceItem
                            key={i}
                            mostPopular={item.price_type === "Most popular"}
                            description={item.description}
                            title={item.price_list_title}
                            price={item.price_per_month}
                        />
                    )
                })}
            </List>
        </Wrapper>
    )
}

export default PriceList;