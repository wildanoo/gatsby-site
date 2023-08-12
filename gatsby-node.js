const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
   const { data } = await graphql(`
      query ProjectsPage {
         projects: allMarkdownRemark {
            nodes {
               frontmatter {
                  slug
               }
            }
         }
         articles: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/articles/" } }) {
            nodes {
               frontmatter {
                  slug
               }
            }
         }
      }
   `);

   data.projects.nodes.forEach((node) => {
      actions.createPage({
         path: "/projects/" + node.frontmatter.slug,
         component: path.resolve("./src/templates/project-details.js"),
         context: { slug: node.frontmatter.slug },
      });
   });

   data.articles.nodes.forEach((node) => {
      actions.createPage({
         path: "/articles/" + node.frontmatter.slug,
         component: path.resolve("./src/templates/article-details.js"),
         context: { slug: node.frontmatter.slug },
      });
   });
};
