import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap'
import Switcher from '../Switcher/Switcher';
import Link from 'next/link';
import { Logo } from '../../constants/icons';

const Header = () => {
  const [isToogled, setIsToggled] = useState(false);
  const handleToogle = () => {
    if (isToogled) {
      document.querySelector('.menu-toggle').classList.remove('is-toggled');
      setIsToggled(false)
      return;
    }
    document.querySelector('.menu-toggle').classList.add('is-toggled');
    setIsToggled(true);
    return;
  }
  return (
    <header className="header w-100 bg-background-light py-3 shadow-box px-2 px-md-0">
      <Container>
        <Row className="h-100 row align-items-center justify-content-between">
          <div className="logo">
            <Link href="/">
              <a
                title="Image Generator"
              >
                <Logo />
              </a>
            </Link>
          </div>
          <div className="d-flex d-md-flex align-items-center cta">
            <Switcher />
            <a
              title="Buy me coffe"
              href="https://www.buymeacoffee.com/josuesan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-2 text-accent-light hoverable ml-3 bold"
            >
              Buy me a coffe
            </a>
          </div>
          <button type="button" aria-label="Menu" className="d-none d-md-none menu-toggle m-0 p-0 hoverable" onClick={handleToogle} >
            <span className="bg-dark"></span>
            <span className="bg-dark"></span>
            <span className="bg-dark"></span>
          </button>
        </Row>
      </Container>
    </header>
  )
}

export default Header
