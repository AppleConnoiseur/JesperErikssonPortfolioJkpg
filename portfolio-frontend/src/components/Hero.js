import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
	const {
		file: {
			childImageSharp: { fluid },
		},
	} = useStaticQuery(query)

	// console.log(data)

	return (
		<header className="hero">
			<div className="section-center hero-center">
				<article className="hero-info">
					<div>
						<h1>I'm Jesper</h1>
						<div className="underline"></div>
						<h4>Student på TUC Sweden YH.</h4>
			  - 🔭 I’m currently working on my own Portfolio site
			  <br />
			  - 🌱 I’m currently learning React, Gatsby, GraphQL and Strapi
			  <br />
			  - 🤔 I’m looking for help with anything backend :)
			  <br />
			  - 💬 I can cook a mean lasagna.
			  <br />
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://strapi.io/documentation/v3.x/getting-started/introduction.html"
						>
							Strapi
			  </a>
			  ,{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://reactjs.org/docs/getting-started.html"
						>
							React
			  </a>
			  ,{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.gatsbyjs.org/docs/"
						>
							Gatsby
			  </a>{" "}
			  ,{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://styled-components.com/docs"
						>
							Styled Components
			  </a>
						<br />
			  - ⚡ Fun fact: I used to do nothing with my life.
			  <br />
			  - 📫 How to reach me: use the link below :)
			  <br />
						<Link to="/contact" className="btn">
							kontakta mig
			  </Link>
						<SocialLinks />
					</div>
				</article>
				<Image fluid={fluid} className="hero-img" />
			</div>
		</header>
	)
}

export default Hero
