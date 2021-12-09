import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { useAuth } from "../../contexts/authContext";

import "./Header.css";

const Header = () => {
  const location = useLocation();
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  const NAV_ITEMS = [
    {
      title: "JEWELRY",
      link: "/jewelry",
      id: 1,
    },
    {
      title: "WATCHES",
      link: "/products",
      id: 2,
    },
    {
      title: "ABOUT US",
      link: "/about-us",
      id: 4,
    },
    {
      title: "CONTACTS",
      link: "*",
      id: 5,
    },
  ];
  return (
    <>
      <div className="header">
        <div></div>
        <Link to="/">
          <img
            width="200px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYtxGME3fgl58WSO-zZxVGw_viW5oZrCIXw6xYrayYuYFMW31kcz0-hwGSpaGoxMcp80&usqp=CAU"
            alt=""
          />
        </Link>
        <div style={{display:"flex"}}>
        <div>
          {email ? (
            <Link to="/auth">
              <button className="sign-btn" onClick={handleLogout}>
                Logout
              </button>
            </Link>
          ) : null}
          {email ? null : (
            <Link to="/auth">
              <button className="sign-btn">Login</button>
            </Link>
          )}
        </div>
        <div>
          <Badge count={5}>
            <ShoppingCartOutlined
              style={{ fontSize: "30px", cursor: "pointer" }}
            />
          </Badge>
        </div>
        </div>
      </div>
      <div className="navbar">
        {NAV_ITEMS.map((item) => (
          <Link
            to={item.link}
            className={
              location.pathname === item.link
                ? "navbar__item-active"
                : "navbar__item"
            }
          >
            {item.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;