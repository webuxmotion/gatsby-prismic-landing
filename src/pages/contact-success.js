import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContactSuccess = () => {
    return (
        <Layout>
            <Wrapper>
                <h1>
                    Thanks for getting in touch!
                </h1>
            </Wrapper>
        </Layout>
    )
};

export default ContactSuccess;