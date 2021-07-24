import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from "../components/layout";
import RichText from '../components/richText';

const Form = styled.form`
  padding: 20px;
  background: #eee;
  margin-top: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  input {
    margin: 10px 0;
    border-radius: 4px;
    height: 40px;
    border: 1px solid #eee;
    width: 100%;
    box-sizing: border-box;
  }

  textarea {
    margin: 10px 0;
    border-radius: 4px;
    border: 1px solid #eee;
    height: 100px;
    width: 100%;
    resize: no-resize;
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  background: orange;
  color: white;
  cursor: pointer;
  padding: 4px 8px;
  box-shadow: none;
  border: none;
`;

const PageWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

export const query = graphql`
{
  prismic {
    allContact_pages {
      edges {
        node {
          form_title
          form_description
          form_fields {
            field_name
            field_type
            required
          }
        }
      }
    }
  }
}
`;

const ContactUs = (props) => {
    const node = props.data.prismic.allContact_pages.edges[0].node;

    return (
        <Layout>
          <PageWrapper>
            <RichText render={node.form_title} />
            <RichText render={node.form_description} />
            <Form
              name="contact-us"
              method="POST"
              data-netlify="true"
              action="/contact-success"
            >
              {node.form_fields.map((item, i) => {
                if (item.field_type === 'textarea') {
                  return (
                    <textarea
                      key={i}
                      name={item.field_name}
                      required={item.required === "Yes"}
                      placeholder={item.field_name}
                    />
                  )
                } else {
                  return (
                    <input
                      key={i}
                      name={item.field_name}
                      required={item.required === "Yes"}
                      placeholder={item.field_name}
                      type={item.field_type}
                    />
                  )
                }
              })}
              <Button type="submit">
                Submit
              </Button>
            </Form>
          </PageWrapper>
        </Layout>
    )
}

export default ContactUs;