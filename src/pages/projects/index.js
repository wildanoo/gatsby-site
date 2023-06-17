import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";
import { GatsbyImage } from "gatsby-plugin-image";

function Projects({ data }) {
   console.log("isi data : ", data);
   const projects = data.projects.nodes;
   const contact = data.contact.siteMetadata.contact;

   return (
      <Layout>
         <div className={styles.portfolio}>
            <h2>Portfolio</h2>
            <h3>Projects & Website I've created</h3>
            <div className={styles.projects}>
               {projects.map((project) => (
                  <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                     <div>
                        <GatsbyImage
                           image={project.frontmatter.thumbs.childImageSharp.gatsbyImageData}
                           alt="thumbs"
                        />
                        <h3>{project.frontmatter.title}</h3>
                        <p>{project.frontmatter.stack}</p>
                     </div>
                  </Link>
               ))}
            </div>
            <p>Like what you see? Email me at {contact} for a quote!</p>
         </div>
      </Layout>
   );
}

export default Projects;

export const query = graphql`
   query ProjectsPage {
      projects: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
         nodes {
            frontmatter {
               slug
               stack
               title
               thumbs {
                  id
                  childImageSharp {
                     id
                     gatsbyImageData
                  }
               }
            }
            id
         }
      }
      contact: site {
         siteMetadata {
            contact
         }
      }
   }
`;
