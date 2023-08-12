import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";

function Navbar() {
   const data = useStaticQuery(graphql`
      query SiteInfo {
         site {
            siteMetadata {
               title
            }
         }
      }
   `);

   const { title } = data.site.siteMetadata;
   return (
      <nav className="flex px-5 py-3 bg-[#F0F2F5] fixed w-full z-30">
         <div className="flex layout justify-between px-[40px]">
            <h1 className="text-black font-bold">{title}</h1>
            <div className="links text-black font-bold">
               <Link to="/" className="font-medium">
                  Home
               </Link>
               <Link to="/about" className="font-medium">
                  About
               </Link>
               <Link to="/projects" className="font-medium">
                  Portfolio Projects
               </Link>
               <Link to="/articles" className="font-medium">
                  Articles
               </Link>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
