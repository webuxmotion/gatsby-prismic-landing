import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import RichText from '../components/richText';
import SliceZone from "../components/sliceZone"

export const query = graphql`
    query PageQuery($id: String) {
        prismic {
            allPages(id: $id) {
                edges {
                node {
                    body {
                        ... on PRISMIC_PageBodyCall_to_action {
                        type
                        label
                        primary {
                            section_title
                        }
                        fields {
                            button_destination {
                            ... on PRISMIC_Contact_page {
                                form_title
                                form_description
                                _meta {
                                uid
                                }
                            }
                            }
                            button_label
                            call_to_action_title
                            content
                            featured_image
                        }
                        }
                    }
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

const PageWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

const Page = (props) => {
    const node = props.data.prismic.allPages.edges[0].node;
    const { page_title, content, body } = node;

    return (
        <Layout>
            <PageWrapper>
                <RichText render={page_title} />
                {content && <RichText render={content} />}
                {body && <SliceZone body={body} />}
            </PageWrapper>
        </Layout>
    );
}

export default Page;