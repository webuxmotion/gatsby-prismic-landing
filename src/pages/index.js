import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SliceZone from "../components/sliceZone"

export const query = graphql`
{
  prismic {
    allHomepages {
      edges {
        node {
          body {
            ... on PRISMIC_HomepageBodyHero2 {
              type
              primary {
                hero_content
                hero_title
                background_image
              }
            }
            ... on PRISMIC_HomepageBodyCall_to_action {
              type
              label
              fields {
                button_destination {
                  ... on PRISMIC_Page {
                    page_title
                    content
                    _meta {
                      uid
                    }
                  }
                }
                content
                call_to_action_title
                button_label
                featured_image
              }
              primary {
                section_title
              }
            }
            ... on PRISMIC_HomepageBodyPrice_list {
              type
              primary {
                title
              }
              fields {
                description
                price_list_title
                price_per_month
                price_type
              }
            }
          }
        }
      }
    }
  }
}
`;

const IndexPage = (props) => {

  return (
    <Layout>
      <SliceZone body={props.data.prismic.allHomepages.edges[0].node.body} />
    </Layout>
  )
}

export default IndexPage
