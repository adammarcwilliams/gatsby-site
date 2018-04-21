import React from 'react'
import styled from 'styled-components'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Content className='Content'>
      <Title>{post.frontmatter.title}</Title>
      <Markdown dangerouslySetInnerHTML={{ __html: post.html }} />
    </Content>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
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
  font-family: ${props => props.theme.headingText};
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 700px) {
    font-size: 30px;
  }
`

const Markdown = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: auto;

  h1 {
    font-family: ${props => props.theme.headingText};
    font-size: 18px;
    text-transform: uppercase;

    @media (min-width: 700px) {
      font-size: 24px;
    }
  }
`
