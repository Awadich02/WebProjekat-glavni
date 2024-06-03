import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "O nama",
  },


  {
    path: "/cars",
    display: "Lista usluga",
  },
  
  {
    path: "/contact",
    display: "Kontakt",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Linkovi</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Info</h5>
              <p className="office__info">9. maj bb, Zenica</p>
              <p className="office__info">Mobitel: 062 061 063</p>
              <p className="office__info">Email: autodetailing@gmail.com</p>

            </div>
          </Col>
          <Col lg="6" md="6" sm="6">
            <div className="map-container">
              <iframe
                title="Mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d715.1033943932321!2d17.933258269680447!3d44.19854776950331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee39939132437%3A0x1be85357085f897d!2sAwads%20Detailing!5e0!3m2!1sbs!2sba!4v1717357945052!5m2!1sbs!2sba"
                width="650"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
/*
What do I need to fix in folder structure and code so that my project runs. In my React-Car-Rental-Website-master I want to have a completely different page for login and registering an account that opens when i press either login or registruj se. Hard code me one admin and one user with email and password. If I login with admin it takes me to mern-admin-master dashboard and if I login as a user it takes me to the home page of React-Car-Rental-Website-master and gives me logout option instead of login and registruj se */ 