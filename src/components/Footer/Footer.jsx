import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Heart, Logo, Mail } from '../../constants/icons';

const Footer = () => {
  return (
    <footer>
      <Container  >
        <Row className="align-items-center justify-content-center mb-5">
          <Col xs="12">
            <div className="footer-logo">
              <a className="text-center d-block text-accent-light" title="Image Generator">
                <Logo />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mb-5">
          <Col xs="12" md="4">
            <Link href="/about">
              <a className="d-block text-center text-accent-light hoverable pb-1" title="About">About</a>
            </Link>
            <a href="https://paypal.me/josuesan95" target="_blank" rel="noopener noreferrer" className="pb-1 d-block text-center text-accent-light hoverable" title="Donations">Donations</a>
          </Col>
          <Col xs="12" md="4">
            <a title="Send me an email" className="d-block text-center icon text-accent-light" href="mailto:%6a%6f%73%75%65%73%61%6e%2e%64%65%76%40%67%6d%61%69%6c%2e%63%6f%6d">
              <Mail />
            </a>
          </Col>
          <Col xs="12" md="4">
            <Link href="/recommendations">
              <a className="d-block text-center text-accent-light hoverable pb-1" title="Recommendations">Recommendations</a>
            </Link>
            <a href="mailto:%6a%6f%73%75%65%73%61%6e%2e%64%65%76%40%67%6d%61%69%6c%2e%63%6f%6d" className="pb-1 d-block text-center text-accent-light hoverable" title="Contact me">Contact me</a>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="12">
            <p className="text-center text-accent-light">© Copyright 2021</p>
            <p className="text-center text-accent-light devby">
              Made by Josue Sanchez, with love
              &nbsp;
              <Heart />
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
