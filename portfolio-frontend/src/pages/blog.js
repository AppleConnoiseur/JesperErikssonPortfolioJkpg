import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid

const Blog = ({
	data: {
	  allStrapiBlogs: { nodes: blogs },
	},
  }) => {
	return (
	  <Layout>
		<section className="blog-page">
		  <Blogs blogs={blogs} title="Alla artiklar" />
		</section>
	  </Layout>
	)
  }
  export const query = graphql`
	{
	  allStrapiBlogs {
		nodes {
		  slug
		  desc
		  date(locale: "sv", formatString: "DD MMM YYYY")
		  id
		  title
		  category
		  image {
			childImageSharp {
			  fluid {
				...GatsbyImageSharpFluid
			  }
			}
		  }
		}
	  }
	}
  `

export default Blog
