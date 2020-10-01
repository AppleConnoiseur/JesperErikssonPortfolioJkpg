import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

var MyName = 'Jesper E';
const NameComponent = ({ fancy }) => {
	if (fancy) {
		return (<h3>{MyName}</h3>);
	}
	return (<p>{MyName}</p>);
};

export default () => {
	return (
		<Layout>
			<Hero />
			<Services />
			<Jobs />
		</Layout>
	)
}
// ...GatsbyImageSharpFluid
