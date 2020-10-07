import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"

const ComponentName = ({ data }) => {
	console.log(data)
	const { content, title, desc } = data.blog

	return (
		<Layout>
			<section className="blog-template">
				<div className="section-center">
					<article className="blog-content">
						<ReactMarkdown source={content} />
					</article>
					<Link to="/blog" className="btn center-btn">
						Alla artiklar
			</Link>
				</div>
			</section>
		</Layout>
	)
}

export const query = graphql`
	query GetSingleBlog($slug: String) {
	  blog: strapiBlogs(slug: { eq: $slug }) {
		content
		title
		desc
	  }
	}
`

export default ComponentName
