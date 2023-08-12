import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import ptgue from "../images/company/ptgue.jpg"

const PortfolioCard = ({
   companyName,
   imagePath,
   alt,
   imageHeight = 150,
   positionTitle,
   positionDesc,
   time,
}) => {
   return (
      <div className="grid grid-cols-4 w-[900px] px-[30px] py-[30px] gap-5 shadow-xl rounded-xl">
         <div className="">
            {/* <StaticImage src={imagePath} alt={alt} height={imageHeight} /> */}
            <GatsbyImage image={ptgue} height={imageHeight} />
            <div>{companyName}</div>
         </div>
         <div className="col-span-2 bg-white">
            <div className="card-title">{positionTitle}</div>
            <div className="card-subtitle pl-5 mt-3">{positionDesc}</div>
         </div>
         <div>{time}</div>
      </div>
   );
};

export default PortfolioCard;
