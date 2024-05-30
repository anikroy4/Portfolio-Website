import React from "react";


const ListItem = ({ listInnerItem, listclasName, href, className }) => {
  return (
    <>
      <li className={listclasName}>
        <a
          className={` ${className}`}
          to={href}
        >
          {listInnerItem}
        </a>
      </li>
    </>
  );
};

export default ListItem
