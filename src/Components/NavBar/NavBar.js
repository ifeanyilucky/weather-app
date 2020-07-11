import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="transparent" dark expand="md">
        <Container>
          <NavbarBrand
            href="/"
            style={{
              fontSize: "25px",
              color: "#ffc400",
              fontFamily: "Poppins",
            }}
            className="font-weight-bold"
          >
            Wea<span class="font-weight-light">ther</span>
          </NavbarBrand>

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
