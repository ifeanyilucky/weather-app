import React from "react";
import style from "./header.module.css";
import NavBar from "../NavBar/NavBar";
function Header() {
  const content = (
    <div>
      <div className={style.header}>
        {" "}
        <NavBar />
        <div className="container">
          <div className="col-lg-10 mx-auto text-center">
            <h2 className={style.headerText}>Latest News</h2>
          </div>
        </div>
      </div>
    </div>
  );
  return content;
}

export default Header;
