import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        id
        title
        description
        github
		url
		stack {
			title
		}
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

export default () => {
	const data = useStaticQuery(query);

	const {
		allStrapiProjects: { nodes: projects },
	} = data;

	return (
		<Layout>
			<Hero />
			<Services />
			<Jobs />
			<Projects projects={projects} title="projekt i fokus" showLink />
		</Layout>
	)
}
// ...GatsbyImageSharpFluid
