import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";
import { GatsbyImage } from "gatsby-plugin-image";

function Articles({ data }) {
   const articles = data.articles.edges;
   const contact = data.contact.siteMetadata.contact;

   console.log('====================================');
   console.log('isi data : ', data);
   console.log('isi articles : ', articles);
   console.log('isi contact : ', contact);

   console.log('====================================');

   return (
      <Layout>
         <div className={styles.portfolio}>
            <div className="pt-[120px] text-center">
               <h2>Articles</h2>
               <h3>Articles that I've created</h3>
            </div>
            <div className={styles.projects}>
               {articles?.map((article) => (
                  <Link to={"/articles/" + article.node.frontmatter.slug} key={article.node.id}>
                     <div>
                        <GatsbyImage
                           image={article.node.frontmatter.thumbs.childImageSharp.gatsbyImageData}
                           alt="thumbs"
                        />
                        <h3>{article.node.frontmatter.title}</h3>
                        <p>{article.node.frontmatter.stack}</p>
                     </div>
                  </Link>
               ))}
            </div>
            <p>Like what you see? Email me at {contact} for a quote!</p>
         </div>
      </Layout>
   );
}

export default Articles;

export const query = graphql`
query ArticlesPage {
   articles: allMarkdownRemark(
     filter: {fileAbsolutePath: {regex: "/articles/"}}
     sort: {frontmatter: {date: DESC}}
   ) {
     totalCount
     edges {
       node {
         id
         frontmatter {
           title
           slug
           date(formatString: "DD MMMM YYYY")
           thumbs {
             id
             childImageSharp {
               gatsbyImageData
               id
             }
           }
         }
         excerpt
       }
     }
   }
   contact: site {
      siteMetadata {
         contact
      }
   }
 }`