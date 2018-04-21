import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

export default class extends Component {
  render () {
    const data = this.props.data
    return (
      <Content className='Content'>
        <Title>Experiments and other random stuff</Title>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <StyledLink to={node.fields.slug} css={{ color: 'white' }}>
            <Post key={node.id}>
              <PostTitle>{node.frontmatter.title}</PostTitle>
              <PostDate>- {node.frontmatter.date}</PostDate>
              <PostExcerpt>{node.excerpt}</PostExcerpt>
            </Post>
          </StyledLink>
        ))}
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
  flex: 1 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 0 40px;
`

const Title = styled.div`
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  font-family: ${props => props.theme.headingText};
  font-size: 24px;
  text-transform: uppercase;
  margin-top: 20px;

  @media (min-width: 700px) {
    font-size: 30px;
    margin-top: 70px;
  }
`

const StyledLink = styled(Link)`
  position: relative;
  color: ${props => props.theme.light};
  margin-top: 40px;
  
  @media (min-width: 700px) {
    margin-top: 70px;
  }

  &:hover {
    opacity: 0.6;
  }
`

const Post = styled.div`
  position: relative;
  display: block;
`

const PostTitle = styled.div`
  position: relative;
  display: block;
  font-family: ${props => props.theme.headingText};
  font-size: 18px;
  text-transform: uppercase;

  @media (min-width: 700px) {
    font-size: 24px;
  }
`

const PostDate = styled.div`
  position: relative;
  display: block;
  font-size: 80%;
`

const PostExcerpt = styled.div`
  position: relative;
  display: block;
  margin-top: 20px;
`
