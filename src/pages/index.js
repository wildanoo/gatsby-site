import { graphql, Link, navigate } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import PortfolioCard from "../components/PortfolioCard";

export default function Home({ data }) {
   return (
      <Layout>
         <section className={styles.header}>
            <div className="bg-[#F0F2F5] pt-[50px] pb-[80px] w-full">
               <div className="flex flex-col gap-[20px] max-w-sm mx-auto justify-center items-center text-center sm:mx-auto sm:max-w-4xl sm:mt-[100px] sm:px-[150px] ">
                  <div>
                     <StaticImage
                        src="../images/pp-1.png"
                        alt="Profile image"
                        width={200}
                        height={200}
                        className="rounded-[50%]"
                     />
                  </div>
                  <div className="font-bold text-[26px] leading-[35px] sm:text-[40px] text-green-700">
                     Hello, I'm Wildan,{" "}
                     <div className="inline">software developer based in Indonesia.</div>
                  </div>
                  <div className="text-[20px]">
                     A software developer in Indonesia. I specialize in front-end development and
                     javascript realm.
                  </div>
                  <div className="flex gap-[20px] ">
                     <div className="bg-black text-white rounded-full py-3 px-5 cursor-pointer">
                        GET IN TOUCH
                     </div>
                     <div className="border border-black rounded-full py-3 px-5 cursor-pointer font-semibold">
                        VIEW ALL WORKS
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex bg-white px-5 sm:px-[40px] w-full layout mx-auto justify-center">
               <div className="flex flex-col py-[40px] justify-center items-center text-center">
                  <div className="font-bold text-[26px] leading-[35px] sm:text-[35px]">
                     The skills, tools and <div>technologies I am good at:</div>
                  </div>
                  <div className="grid grid-cols-3 mt-7 gap-5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
                     <div className="flex flex-col gap-2 mx-auto">
                        <div className="">
                           <StaticImage
                              src="../images/skills/icon-javascript.svg"
                              alt="Tech"
                              height={65}
                              className=""
                           />
                        </div>
                        <span className="font-medium">Javascript</span>
                     </div>
                     <div className="flex flex-col gap-2 mx-auto">
                        <div className="">
                           <StaticImage
                              src="../images/skills/icon-typescript.svg"
                              alt="Tech"
                              height={65}
                              className=""
                           />
                        </div>
                        <span className="font-medium">Typescript</span>
                     </div>
                     <div className="flex flex-col gap-2 mx-auto">
                        <div className="">
                           <StaticImage
                              src="../images/skills/icon-react.svg"
                              alt="Tech"
                              height={65}
                              className=""
                           />
                        </div>
                        <span className="font-medium">React</span>
                     </div>
                     <div className="flex flex-col gap-2 mx-auto">
                        <div className="">
                           <StaticImage
                              src="../images/skills/icon-nextjs.svg"
                              alt="Tech"
                              height={65}
                              className=""
                           />
                        </div>
                        <span className="font-medium">Next.js</span>
                     </div>
                     <div className="flex flex-col gap-2 mx-auto">
                        <div className="">
                           <StaticImage
                              src="../images/skills/icon-nodejs.svg"
                              alt="Tech"
                              height={65}
                              className=""
                           />
                        </div>
                        <span className="font-medium">Node.js</span>
                     </div>
                     <div className="flex flex-col gap-2 mx-auto">
                        <div className="">
                           <StaticImage
                              src="../images/skills/icon-express.svg"
                              alt="Tech"
                              height={65}
                              className=""
                           />
                        </div>
                        <span className="font-medium">Express.js</span>
                     </div>
                     <div className="flex flex-col gap-2 mx-auto">
                        <div className="">
                           <StaticImage
                              src="../images/skills/icon-nest.svg"
                              alt="Tech"
                              height={65}
                              className=""
                           />
                        </div>
                        <span className="font-medium">Nest.js</span>
                     </div>
                     <div className="flex flex-col gap-2 mx-auto">
                        <div className="">
                           <StaticImage
                              src="../images/skills/icon-socket.svg"
                              alt="Tech"
                              height={65}
                              className=""
                           />
                        </div>
                        <span className="font-medium">Socket.io</span>
                     </div>
                     <div className="flex flex-col gap-2 mx-auto">
                        <div className="">
                           <StaticImage
                              src="../images/skills/icon-postgresql.svg"
                              alt="Tech"
                              height={65}
                              className=""
                           />
                        </div>
                        <span className="font-medium">PostgreSQL</span>
                     </div>
                     <div className="flex flex-col gap-2 mx-auto">
                        <div className="">
                           <StaticImage
                              src="../images/skills/icon-mongodb.svg"
                              alt="Tech"
                              height={65}
                              className=""
                           />
                        </div>
                        <span className="font-medium">MongoDB</span>
                     </div>
                     <div className="flex flex-col gap-2 mx-auto">
                        <div className="">
                           <StaticImage
                              src="../images/skills/icon-sass.svg"
                              alt="Tech"
                              height={65}
                              className=""
                           />
                        </div>
                        <span className="font-medium">Sass/Scss</span>
                     </div>
                     <div className="flex flex-col gap-2 mx-auto">
                        <div className="">
                           <StaticImage
                              src="../images/skills/icon-storybook.svg"
                              alt="Tech"
                              height={65}
                              className=""
                           />
                        </div>
                        <span className="font-medium">Storybook</span>
                     </div>
                     <div className="flex flex-col gap-2 mx-auto">
                        <div className="">
                           <StaticImage
                              src="../images/skills/icon-git.svg"
                              alt="Tech"
                              height={65}
                              className=""
                           />
                        </div>
                        <span className="font-medium">Git</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="bg-[#F0F2F5] w-full">
               <div className="layout px-5 sm:px-[40px] py-[50px] w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="font-bold text-[35px]">
                     Check out My <div className="text-green-700">Projects.</div>
                  </div>
                  <div className="text-[18px]">
                     Some showcase of my project that use javascript tech stack, front-end and also
                     back-end project that has been done in my previous company.
                  </div>
                  {data?.projectList?.edges?.length > 0 &&
                     data?.projectList?.edges.map((val) => {
                        return (
                           <div
                              key={val?.node?.id}
                              className="flex justify-center items-center cursor-pointer"
                              onClick={() => navigate(`/projects/${val?.node?.frontmatter?.slug}`)}
                           >
                              <div className="card w-[550px] overflow-hidden rounded-lg">
                                 <div className="">
                                    <GatsbyImage
                                       image={
                                          val?.node?.frontmatter?.featuredImg?.childImageSharp
                                             .gatsbyImageData
                                       }
                                       alt="banner"
                                    />
                                 </div>
                                 <div className="px-[30px] py-[20px] bg-white">
                                    <div className="card-title">
                                       {val?.node?.frontmatter?.title}
                                    </div>
                                    <div className="card-subtitle">{val?.node?.excerpt}</div>
                                 </div>
                              </div>
                           </div>
                        );
                     })}
               </div>
               {data?.projectList?.edges?.length > 3 && (
                  <div className="flex justify-center items-center mb-[50px]">
                     <button
                        className="px-10 py-2 rounded-lg bg-seagreen text-white"
                        onClick={() => navigate(`/projects`)}
                     >
                        VIEW ALL PROJECTS
                     </button>
                  </div>
               )}
            </div>
            {/* <div className="bg-[#F0F2F5] w-full">
               <div className="layout px-[40px] py-[50px] w-full grid grid-cols-2 gap-6">
                  <div className="font-bold text-[35px]">
                     Check out My <div className="text-green-700">Projects.</div>
                  </div>
                  <div className="text-[18px]">
                     Some showcase of my project that use javascript tech stack, front-end and also
                     back-end project that has been done in my previous company.
                  </div>
                  <div className="flex justify-center items-center">
                     <div className="card w-[550px] overflow-hidden rounded-lg">
                        <div className="">
                           <StaticImage
                              src="../images/portfolio/portfolio-1.jpg"
                              alt="Portfolio-1"
                              objectFit="cover"
                              height={400}
                              width={550}
                           />
                        </div>
                        <div className="px-[30px] py-[20px] bg-white">
                           <div className="card-title">Finance Landing Page</div>
                           <div className="card-subtitle">Landing page UI kit</div>
                        </div>
                     </div>
                  </div>
                  <div className="flex justify-center items-center">
                     <div className="card w-[550px] overflow-hidden rounded-lg">
                        <div>
                           <StaticImage
                              src="../images/portfolio/portfolio-2.jpg"
                              alt="Portfolio-2"
                              objectFit="cover"
                              height={400}
                              width={550}
                           />
                        </div>
                        <div className="px-[30px] py-[20px] bg-white">
                           <div className="card-title">Finance Landing Page</div>
                           <div className="card-subtitle">Landing page UI kit</div>
                        </div>
                     </div>
                  </div>
                  <div className="flex justify-center items-center">
                     <div className="card w-[550px] overflow-hidden rounded-lg">
                        <div>
                           <StaticImage
                              src="../images/portfolio/portfolio-3.png"
                              alt="Portfolio-3"
                              objectFit="cover"
                              height={400}
                              width={550}
                           />
                        </div>
                        <div className="px-[30px] py-[20px] bg-white">
                           <div className="card-title">Finance Landing Page</div>
                           <div className="card-subtitle">Landing page UI kit</div>
                        </div>
                     </div>
                  </div>
                  <div className="flex justify-center items-center">
                     <div className="card w-[550px] overflow-hidden rounded-lg">
                        <div>
                           <StaticImage
                              src="../images/portfolio/portfolio-4.png"
                              alt="Portfolio-4"
                              objectFit="cover"
                              height={400}
                              width={550}
                           />
                        </div>
                        <div className="px-[30px] py-[20px] bg-white">
                           <div className="card-title">Finance Landing Page</div>
                           <div className="card-subtitle">Landing page UI kit</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}
            <div className="w-full">
               <div className="layout px-5 sm:px-[40px] py-[50px] w-full grid grid-cols-1 gap-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                     <div className="font-bold text-[35px]">
                        Look at My <div className="text-green-700">Working Experiences.</div>
                     </div>
                     <div className="text-[18px] sm:px-5">
                        Here is a quick summary of my most recent working experiences, from my past
                        and my latest company
                     </div>
                  </div>
                  <div className="grid grid-cols-1 p-5 w-full sm:grid-cols-4 sm:px-[30px] sm:py-[30px] gap-5 shadow-md rounded-xl">
                     <div className="">
                        <StaticImage
                           src={"../images/company/ptgue.jpg"}
                           alt={"portfolio-1"}
                           height={150}
                        />
                        <div className="mt-4">PT Global Urban Esensial</div>
                     </div>
                     <div className="sm:hidden">Sep 2021 - Present</div>
                     <div className="sm:col-span-2 bg-white">
                        <div className="card-title">Front-end Developer</div>
                        <div className="card-subtitle pl-5 mt-3">
                           <ul className="list-disc flex flex-col gap-2">
                              <li>Develop Homecare PWA layout & API integration</li>
                              <li>Develop Dkonsul Web application layout & API integration</li>
                              <li>
                                 Develop Doctor to Doctor Web application layout & API integration
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="hidden sm:block">Sep 2021 - Present</div>
                  </div>
                  <div className="grid grid-cols-1 p-5 sm:grid-cols-4 w-full sm:px-[30px] sm:py-[30px] gap-5 shadow-md rounded-xl">
                     <div className="">
                        <StaticImage
                           src={"../images/company/meteor.png"}
                           alt={"portfolio-2"}
                           height={150}
                        />
                        <div>PT Meteor Inovasi Digital</div>
                     </div>
                     <div className="sm:hidden">Oct 2018 - Aug 2021</div>
                     <div className="sm:col-span-2 bg-white">
                        <div className="card-title">Fullstack Developer</div>
                        <div className="card-subtitle pl-5 mt-3">
                           <ul className="list-disc flex flex-col gap-2">
                              <li>
                                 Develop interface portal management system for Meteor platform
                              </li>
                              <li>Develop API services for Boost ID application</li>
                              <li>Develop API services for Meteor platform</li>
                           </ul>
                        </div>
                     </div>
                     <div className="hidden sm:block">Oct 2018 - Aug 2021</div>
                  </div>
                  <div className="grid grid-cols-1 p-5 sm:grid-cols-4 w-full sm:px-[30px] sm:py-[30px] gap-5 shadow-md rounded-xl">
                     <div className="">
                        <StaticImage
                           src={"../images/company/aitindo.png"}
                           alt={"portfolio-3"}
                           height={150}
                        />
                        <div>PT Aiti Prima Indonesia</div>
                     </div>
                     <div className="sm:hidden">Dec 2016 - Mar 2018</div>
                     <div className="sm:col-span-2 bg-white">
                        <div className="card-title">Web Developer</div>
                        <div className="card-subtitle pl-5 mt-3">
                           <ul className="list-disc flex flex-col gap-2">
                              <li>
                                 Develop Prestasi Junior Indonesia multiplayer Javascript game using
                                 tablet for primary school student, to learn about economy.
                              </li>
                              <li>
                                 Develop Prestasi Junior Indonesia web based single player game and
                                 animation.
                              </li>
                              <li>
                                 Develop website campaign abbot family club for abbot customer and
                                 reward management.
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="hidden sm:block">Dec 2016 - Mar 2018</div>
                  </div>
                  <div className="grid grid-cols-1 p-5 sm:grid-cols-4 w-full sm:px-[30px] sm:py-[30px] gap-5 shadow-md rounded-xl">
                     <div className="">
                        <StaticImage
                           src={"../images/company/minda.png"}
                           alt={"portfolio-4"}
                           height={150}
                        />
                        <div className="mt-4">PT Minda Perdana</div>
                     </div>
                     <div className="sm:hidden">Apr 2016 - Dec 2016</div>
                     <div className="sm:col-span-2 bg-white">
                        <div className="card-title">Web Developer</div>
                        <div className="card-subtitle pl-5 mt-3">
                           <ul className="list-disc flex flex-col gap-2">
                              <li>Develop E-procurement application for Garuda Indonesia</li>
                           </ul>
                        </div>
                     </div>
                     <div className="hidden sm:block">Apr 2016 - Dec 2016</div>
                  </div>
                  <div className="grid grid-cols-1 p-5 sm:grid-cols-4 w-full sm:px-[30px] sm:py-[30px] gap-5 shadow-md rounded-xl">
                     <div className="">
                        <StaticImage
                           src={"../images/company/rusun.png"}
                           alt={"portfolio-5"}
                           height={120}
                        />
                        <div className="mt-4">PT Rumah Sunatan Indonesia</div>
                     </div>
                     <div className="sm:hidden">Oct 2015 - Apr 2016</div>
                     <div className="sm:col-span-2 bg-white">
                        <div className="card-title">SEO Specialist</div>
                        <div className="card-subtitle pl-5 mt-3">
                           <ul className="list-disc flex flex-col gap-2">
                              <li>Running SEO campaign for circumcision keyword in indonesia</li>
                              <li>Research keyword, optimize for onpage and offpage SEO</li>
                           </ul>
                        </div>
                     </div>
                     <div className="hidden sm:block">Oct 2015 - Apr 2016</div>
                  </div>
               </div>
            </div>
            <div className="bg-[#F0F2F5] w-full">
               <div className="layout px-5 sm:px-[40px] py-[50px] w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="font-bold text-[35px]">
                     Check out My <div className="text-green-700">Blog.</div>
                  </div>
                  <div className="text-[18px]">
                     My recent article that I share related to tech that I already use and also for
                     my personal notes.
                  </div>
                  {data?.articleList?.edges?.length > 0 &&
                     data?.articleList?.edges.map((val) => {
                        return (
                           <div
                              key={val?.node?.id}
                              className="flex justify-center items-center cursor-pointer"
                              onClick={() => navigate(`/projects/${val?.node?.frontmatter?.slug}`)}
                           >
                              <div className="card w-[550px] overflow-hidden rounded-lg">
                                 <div className="">
                                    <GatsbyImage
                                       image={
                                          val?.node?.frontmatter?.featuredImg?.childImageSharp
                                             .gatsbyImageData
                                       }
                                       alt="banner"
                                    />
                                 </div>
                                 <div className="px-[30px] py-[20px] bg-white">
                                    <div className="card-title">
                                       {val?.node?.frontmatter?.title}
                                    </div>
                                    <div className="card-subtitle">{val?.node?.excerpt}</div>
                                 </div>
                              </div>
                           </div>
                        );
                     })}
               </div>
               {data?.articleList?.edges?.length > 3 && (
                  <div className="flex justify-center items-center mb-[50px]">
                     <button
                        className="px-4 py-2 rounded-lg bg-mediumseagreen text-white"
                        onClick={() => navigate(`/articles`)}
                     >
                        VIEW ALL ARTICLES
                     </button>
                  </div>
               )}
            </div>
         </section>
      </Layout>
   );
}

export const query = graphql`
   query Banner {
      file(relativePath: { eq: "banner.png" }) {
         childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
         }
      }
      projectList: allMarkdownRemark(
         sort: { frontmatter: { date: DESC } }
         filter: { fileAbsolutePath: { regex: "/projects/" } }
         limit: 4
      ) {
         edges {
            node {
               id
               excerpt(pruneLength: 150)
               frontmatter {
                  slug
                  title
                  date(formatString: "MMM DD, YYYY")
                  featuredImg {
                     childImageSharp {
                        gatsbyImageData
                     }
                  }
               }
            }
         }
      }
      articleList: allMarkdownRemark(
         sort: { frontmatter: { date: DESC } }
         filter: { fileAbsolutePath: { regex: "/articles/" } }
         limit: 4
      ) {
         edges {
            node {
               id
               excerpt(pruneLength: 150)
               frontmatter {
                  slug
                  title
                  date(formatString: "MMM DD, YYYY")
                  featuredImg {
                     childImageSharp {
                        gatsbyImageData
                     }
                  }
               }
            }
         }
      }
   }
`;
