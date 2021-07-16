import { graphql } from 'gatsby';
import React from 'react';
import { RichText } from 'prismic-reactjs';

export const query = graphql`
    query PageQuery($id: String) {
        prismic {
            allPages(id: $id) {
                edges {
                node {
                    content
                    page_title
                    _meta {
                        uid
                        id
                    }
                }
                }
            }
        }
    }
`;

const Page = (props) => {
    const node = props.data.prismic.allPages.edges[0].node;
    const { page_title, content } = node;

    return (
        <>
            <RichText render={page_title} />
            {content && <RichText render={content} />}
        </>
    );
}

export default Page;