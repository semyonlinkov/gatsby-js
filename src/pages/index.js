import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = (props) => {
	const { nodes } = props.data.allMarkdownRemark;

	return (
		<Layout>
			<Seo title="Home" />
			<div className={styles.posts}>
				<StaticImage
					placeholder="none"
					src="../images/example.png"
					loading="eager"
					width={64}
					quality={95}
					formats={["auto", "webp", "avif"]}
					alt=""
					style={{ marginBottom: `var(--space-3)` }}
				/>
			</div>
			<ul className={styles.list}>
				{nodes.map(post => {
					const { category, url, title, img } = post.frontmatter;
					const image = getImage(img);

					return (<div key={post.id} className={styles.post}>
						<GatsbyImage
							image={image}
							alt={title}
						/>
						<Link to={`/${category}/${url}`}>{title}</Link>
					</div>)
				})}
			</ul>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
query MyQuery {
	allMarkdownRemark {
		nodes {
			frontmatter {
			category
			title
			url
			img {
				childImageSharp {
					gatsbyImageData(width: 200, formats: AUTO, placeholder: BLURRED)
				}
				}
			}
			id
		}
	}
}
`