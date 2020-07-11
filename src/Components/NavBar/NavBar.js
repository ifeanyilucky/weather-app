import React from "react";
import { Navbar, NavbarBrand, NavbarText, Container } from "reactstrap";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <Navbar color="transparent" dark expand="md">
        <Container>
    <Link to="/">
          <NavbarBrand
            style={{
              fontSize: "25px",
              color: "#ffc400",
              fontFamily: "Poppins",
            }}
            className="font-weight-bold"
          >
            Wea<span class="font-weight-light">ther</span>
          </NavbarBrand>
<Link>
          <NavbarText>
            <Link to="/news">
              <button
                className="btn btn-primary btn-sm"
                style={{
                  background: "#ffc400",
                  outline: "none",
                  color: "black",
                  border: "none",
                }}
              >
                News
              </button>
            </Link>
          </NavbarText>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
