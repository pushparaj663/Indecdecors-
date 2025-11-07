import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const formatName = (name) =>
    name.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  const breadcrumbItems = [
    <Link key="home" to="/" className="indec-breadcrumb-link">
      Home
    </Link>,
  ];

  pathnames.forEach((name, index) => {
    const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
    const displayName = name === "product" ? "Products" : formatName(name);
    const isLast = index === pathnames.length - 1;

    breadcrumbItems.push(
      isLast ? (
        <span key={routeTo} className="indec-breadcrumb-last active">
          {displayName}
        </span>
      ) : (
        <>
          <span className="indec-breadcrumb-separator"> &gt; </span>
          <Link key={routeTo} to={routeTo} className="indec-breadcrumb-link">
            {displayName}
          </Link>
        </>
      )
    );
  });

  return (
    <div className="indec-breadcrumb-wrapper">
      <nav className="indec-breadcrumb">{breadcrumbItems}</nav>
    </div>
  );
};

export default Breadcrumbs;
