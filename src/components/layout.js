import * as React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import "./layout.css"
import { StaticQuery, Link, graphql } from "gatsby";

const Main = styled.main`
  margin: 0 auto;
`;

const NavLink = styled.div`
  margin: auto 0;

  a {
    color: white;
    padding: 0 16px;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;

    &:hover {
      color: orange;
    }
  }
`;

const Header = styled.header`
  display: flex;
  background: black;
  height: 66px;
  padding: 0 16px;
  box-sizing: border-box;
`;

const Branding = styled.div`
  color: orange;
  font-weight: bold;
  margin: auto 0;
  font-size: 20px;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
`;

const navigationQuery = graphql`
  {
  prismic {
    allNavigations {
      edges {
        node {
          branding
          navigation_links {
            label
            link {
              ... on PRISMIC_Contact_page {
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Page {
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

const Layout = ({ children }) => {

  return (
    <>
      <Header>
          <StaticQuery 
            query={`${navigationQuery}`} 
            render={(data) => {
              return (
                <>
                  <Branding>
                    <Link to="/">
                      {data.prismic.allNavigations.edges[0].node.branding}
                    </Link>
                  </Branding>
                  <NavLinks>
                    {data.prismic.allNavigations.edges[0].node.navigation_links.map((link) => {
                      return (
                        <NavLink key={link.link._meta.uid}>
                          <Link to={`/${link.link._meta.uid}`}>{link.label}</Link>
                        </NavLink>
                      )
                    })}
                  </NavLinks>
                </>
              )
            }} 
          />
      </Header>
      <Main>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
