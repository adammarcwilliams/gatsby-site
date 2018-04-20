import React, { Component } from 'react'
import Link from "gatsby-link"
import styled from 'styled-components'
import { rhythm } from "../utils/typography"

export default class extends Component {
  render () {
    const data = this.props.data
    return (
      <Content className='Content'>
        <div>
          <h1 display={"inline-block"} borderBottom={"1px solid"}>
          Amazing Pandas Eating Things
          </h1>
          <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Link
                to={node.fields.slug}
                css={{ textDecoration: `none`, color: `inherit` }}
                >
                <div key={node.id}>
                  <h3 marginBottom={rhythm(1 / 4)}>
                    {node.frontmatter.title}{" "}
                    <span color="#BBB">— {node.frontmatter.date}</span>
                  </h3>
                  <p>{node.excerpt}</p>
                </div>
              </Link>
            ))}
      </div>
    </Content>
    )
  }
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

const Content = styled.div`
  flex: 1 1 auto;
  position: relative;
  display: flex;
  justify-content: flex-center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 40px;
  background-color: ${props => props.theme.dark}
`