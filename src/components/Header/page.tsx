import React from "react";
import HeaderUI from "./pageUI";

const Header = () => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
    const date = new Date().toLocaleString(undefined, options)
  return (
   <HeaderUI date={date} />
  );
};

export default Header;
