import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import {
  Button,
  Col,
  Modal,
  Row,
} from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { CookiesContext } from '../../contexts/CookiesContext';

const CookiesModal = ({ initAnalitics }) => {
  const [show, setShow] = useState(true);
  const { setCookiesActivated } = useContext(CookiesContext);
  const [, setCookie] = useCookies();

  const handleAcceptCookies = () => {
    initAnalitics();
    setCookiesActivated({
      cookieTechnicals: true,
      cookieStatistics: true,
    });
    setCookie('technical', { technical: true }, { path: '/' });
    setShow(false);
  };

  return (
    <>
      <Modal centered size="lg" show={show} onHide={handleAcceptCookies} className="modal-cookies-form">
        <Modal.Body className="px-3 px-md-5 pb-5 pt-4">
          <p className="bold p-lg">Política de Cookies</p>
          <p>
            Te informamos que a través de este sitio web utilizamos cookies para mejorar la experiencia de usuario.
            Asumimos que al seguir navegando aceptas su uso.
          </p>
          <Row className="justify-content-end flex-1 align-content-end">
            <Col xs="12" md>
              <Button
                className="rounded-pill p-sm py-2 d-block w-100 das-btn mx-auto mr-md-0 ml-md-auto mt-3 mt-md-0"
                onClick={handleAcceptCookies}
              >
                <span>OK</span>
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

CookiesModal.propTypes = {
  initAnalitics: PropTypes.func.isRequired,
};

export default CookiesModal;
