import React from "react";

const Top = () => {
  return (
    <div id="about" className=" mx-auto" style={{background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(38,121,9,1) 0%, rgba(31,138,56,1) 0%, rgba(23,157,106,1) 4%, rgba(0,212,255,1) 85%)"}}>
      <div className="flex items-center justify-between md:justify-start" style={{background:"linear-gradient(90deg, #67B26F 0%, rgba(76,162,205,0.61) 100%)"}}>
        {/* Logo and Text */}
        <div className="flex items-center ml-0">
          {/* Image */}
          <div className="mr-4 my-2">
            <img
              style={{width:"120px"}}
              src="/logo.jpg"
              alt="provider_img"
              className="rounded-xl object-cover ml-1 mr-3"
            />
          </div>
          {/* Text */}
          <div>
            <h4 className="capitalize font-bold md:text-3xl mr-8">
              Indian Institute of Technology, Indore
            </h4>
            <h4 className="capitalize font-bold leading-tight py-2">
              भारतीय प्रौद्योगिकी संस्थान इंदौर
            </h4>
          </div>
        </div>

        {/* Health Center */}
        <div className="absolute top-4 right-6">
          <p className="leading-6 font-bold text-blue-600 text-2xl">Health Center-स्वास्थ्य केंद्र</p>
        </div>
      </div>
      <div className="bg-blue-900 h-1 w-100%"></div>
    </div>
  );
};

export default Top;
