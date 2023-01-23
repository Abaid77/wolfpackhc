import React from "react";
import logo from "../public/logo_large.png";
import Image from "next/image";

const about = () => {
  return (
    <div>
      About
      <div>
        <Image src={logo} />
      </div>
    </div>
  );
};

export default about;
