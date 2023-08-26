import { Link, graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

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

   const [expand, setExpand] = useState(false);

   const { title } = data.site.siteMetadata;
   return (
      <nav className="flex px-5 py-3 bg-[#F0F2F5] fixed w-full z-30">
         <div className="flex layout justify-between sm:px-[40px]">
            <h1 className="text-black font-bold">{title}</h1>
            <div className="sm:hidden cursor-pointer">
               <GiHamburgerMenu
                  className={`${expand ? "hidden" : "block"}`}
                  onClick={() => setExpand(!expand)}
               />
               <GrClose
                  className={`${expand ? "block" : "hidden"}`}
                  onClick={() => setExpand(!expand)}
               />
            </div>
            <div className="text-black font-bold hidden sm:block">
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
         <div
            className={`layout absolute flex flex-col top-[45px] left-0  p-5 rounded-b-2xl bg-[#F0F2F5] drop-shadow-lg
            ${expand ? "block" : "hidden"}`}
         >
            <div>
               <Link to="/" className="font-medium mx-0">
                  Home
               </Link>
            </div>
            <div>
               <Link to="/about" className="font-medium mx-0">
                  About
               </Link>
            </div>
            <div>
               <Link to="/projects" className="font-medium mx-0">
                  Portfolio Projects
               </Link>
            </div>
            <div>
               <Link to="/articles" className="font-medium mx-0">
                  Articles
               </Link>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
