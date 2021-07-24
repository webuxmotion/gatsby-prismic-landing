import React from 'react';
import CallToActionGrid from './callToActionGrid';
import Hero from './hero';

const SliceZone = ({ body }) => {

    return (
        <div>
            {body.map(({ type, primary, ...rest }, i) => {
                if (type === 'hero2') {
                    return (
                        <Hero 
                            key={i} 
                            title={primary.hero_title}
                            content={primary.hero_content}
                            backgroundImage={primary.background_image.url}
                        />
                    )
                } else if (type === 'call_to_action') {
                    return (
                        <CallToActionGrid 
                            key={i}
                            title={primary.section_title} 
                            fields={rest.fields}
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