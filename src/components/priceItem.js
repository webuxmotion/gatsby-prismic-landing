import React from 'react';
import styled from 'styled-components';

import RichText from '../components/richText';

const Wrapper = styled.section`
    flex-grow: 1;
    flex-basis: 0;
    margin: 0 10px;
    background: ${props => props.mostPopular ? 'orange' : '#eee'};
    color: ${props => props.mostPopular ? 'white' : 'black'};
    padding: 10px;
    position: relative;
`;

const Price = styled.section`
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    padding: 10px;
    margin-left: -10px;
    margin-right: -10px;
    background: rgba(0, 0, 0, 0.2);
`;

Price.Small = styled.span`
    font-size: 12px;
`;

const Description = styled.div`
    margin-top: 20px;
`;

const MostPopular = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    background: green;
    color: white;
    font-weight: bold;
`;

const PriceItem = ({ title, description, price, mostPopular }) => {

    return (
        <Wrapper mostPopular={mostPopular}>
            {mostPopular && (
                <MostPopular>Most popular</MostPopular>
            )}
            <RichText render={title} />
            <Price>
                ${price} <Price.Small>/ month</Price.Small>
            </Price>
            <Description>
                <RichText render={description} />
            </Description>
        </Wrapper>
    )
}

export default PriceItem;