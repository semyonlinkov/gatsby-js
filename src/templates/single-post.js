import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby"

const SinglePost = ({ data }) => {

	const { html } = data.markdownRemark;
	const { title, url, category, img } = data.markdownRemark.frontmatter;
	const image = getImage(img);

	return (
		<Layout>
			<Seo title="Пост 1" />
			<div>
				<h1>Пост1</h1>
				<div>
					<GatsbyImage image={image} alt={title} />
				</div>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</Layout>
	)
}

export default SinglePost;

export const query = graphql`
query PostQuery($url: String) {
	markdownRemark(frontmatter: {url: {eq: $url}}) {
	  html
	  frontmatter {
		 title
		 url
		 category
		 img {
			childImageSharp {
			  gatsbyImageData(width: 600)
			}
		 }
	  }
	}
 }
`
