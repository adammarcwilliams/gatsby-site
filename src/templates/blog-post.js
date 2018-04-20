import React from 'react'
import styled from 'styled-components'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Content className='Content'>
      <Harness>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Harness>
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
  flex: 1 1 auto;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 40px;
  background-color: ${props => props.theme.dark}
`
const Harness = styled.div`
  flex: 0 0 auto;
  position: relative;
  display: block;
  width: 100%;
  height: auto;
`
