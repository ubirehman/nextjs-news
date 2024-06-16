import React from "react";
import { Constants } from "../../Constants/page";
import Link from "next/link";

interface LogoProps {
  className: string;
  link: string,
}

const Logo: React.FC<LogoProps> = ({className, link}) => {
  return <Link href={link} className={className}>{Constants.COMPANY_IDENTITY}</Link>;
};

export default Logo;
