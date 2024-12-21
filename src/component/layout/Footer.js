import React from "react";

const Footer = () => {
  return (
    <div className="p-0 m-0 ">
      <div className=" bg-dark text-center py-4 mt-5">
        <h5 className="text-light">Creator by Azizul Hakim </h5>
        <p className="mb-0 text-light">azizulhakim@gmail.com</p>
        <p className="mb-0 text-light">
          Copyright © {new Date().getFullYear()} - All rights reserved by
          azizulhakim@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
