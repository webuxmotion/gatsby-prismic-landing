import { RichText } from 'prismic-reactjs';
import React from 'react';
import styled from 'styled-components';
import CallToActionCard from './callToActionCard';

const Wrapper = styled.section`
    max-width: 800px;
    margin: 0 auto;
`;

const CallToActionGrid = ({ title, fields }) => {
    return (
        <Wrapper>
            <RichText render={title} />
            {fields.map(({ 
                call_to_action_title, 
                content, 
                button_label,
                button_destination,
                featured_image
            }, i) => {
                return (
                    <CallToActionCard
                        image={featured_image.url}
                        key={i}
                        title={call_to_action_title}
                        content={content}
                        buttonLabel={button_label} 
                        buttonDestination={`/${button_destination._meta.uid}`}
                    />
                )
            })}
        </Wrapper>
    )
}

export default CallToActionGrid;