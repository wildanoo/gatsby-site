import React from "react";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../styles/project-detail.module.css";
import { graphql } from "gatsby";
import Navbar from "../components/Navbar";

const ArticleDetails = ({ data }) => {
   console.log('====================================');
   console.log('data detail article : ', data);
   console.log('====================================');
   const { html } = data.markdownRemark;
   const { title, stack, featuredImg } = data.markdownRemark.frontmatter;
   return (
      <Layout>
         <div className={styles.details}>
            <div className="bg-[#F0F2F5] pt-[120px] pb-[80px] text-center">
               <h2>{title}</h2>
               <h3>{stack}</h3>
            </div>
            <div className={styles.featured}>
               <GatsbyImage
                  image={featuredImg.childImageSharp.gatsbyImageData}
                  alt="featured-img"
               />
            </div>
            <div className="layout px-10">
               <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
         </div>
      </Layout>
   );
};

export default ArticleDetails;

export const query = graphql`
   query ArticleDetails($slug: String) {
      markdownRemark(frontmatter: { slug: { eq: $slug } }) {
         id
         html
         frontmatter {
            stack
            title
            featuredImg {
               childImageSharp {
                  gatsbyImageData
               }
            }
         }
      }
   }
`;
