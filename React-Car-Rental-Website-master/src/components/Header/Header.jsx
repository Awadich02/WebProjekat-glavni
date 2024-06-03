// src/components/Header.jsx
import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";


const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "O nama" },
  { path: "/cars", display: "Usluge" },
  { path: "/contact", display: "Kontakt" }
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <i className="ri-car-line"></i>
                    <span>
                      Auto Detailing <br /> Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="nav__right">
              <Container>
                <Row>
                  <Col lg="6" md="6" sm="6">
                    <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                      <NavLink to="/login" className="d-flex align-items-right gap-1">
                        <i className="ri-login-circle-line"></i> Login
                      </NavLink>
                      <NavLink to="/register" className="d-flex align-items-right gap-1">
                        <i className="ri-user-line"></i> Registruj se
                      </NavLink>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
