import RichText from '../components/richText';
import { Link } from "gatsby";
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    padding: 20px;
    background: #eee;
    border-radius: 20px;
    margin: 20px 0;
`;

const Button = styled.div`
    background: orange;
    display: inline-block;
    border-radius: 6px;
    padding: 4px 8px;
    cursor: pointer;
    
    a {
        color: white;
        display: inline-block;
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Image = styled.img`
    max-width: 100px;
    margin: 0;
`;

const CallToActionCard = ({ title, content, buttonLabel, buttonDestination, image }) => {
    return (
        <Wrapper>
            <RichText render={title} />
            <Content>
                <RichText render={content} />
                <div>
                    <Image src={image} alt="featured" />
                </div>
            </Content>
            <Button>
                <Link to={buttonDestination}>{buttonLabel}</Link>
            </Button>
        </Wrapper>
    )
}

export default CallToActionCard;