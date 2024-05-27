import React from "react";
import { Link } from "react-router-dom";


const ListItem = ({ listInnerItem, listclasName, href, className }) => {
  return (
    <>
      <li className={listclasName}>
        <Link
          className={`font-Roboto text-[18px] font-normal leading-7  ${className}`}
          to={href}
        >
          {listInnerItem}
        </Link>
      </li>
    </>
  );
};

export default ListItem
