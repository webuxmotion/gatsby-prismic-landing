import React from 'react';
import Hero from './hero';

const SliceZone = ({ body }) => {

    return (
        <div>
            {body.map((bodyContent, i) => {
                if (bodyContent.type === 'hero2') {
                    return (
                        <Hero 
                            key={i} 
                            title={bodyContent.primary.hero_title}
                            content={bodyContent.primary.hero_content}
                            backgroundImage={bodyContent.primary.background_image.url}
                        />
                    )
                } else {
                    return null;
                }
            })}
        </div>
    )
}

export default SliceZone;