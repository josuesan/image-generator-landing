import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import {
  Col,
  Modal,
  Row
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
    <Modal centered size="md" show={show} onHide={handleAcceptCookies} className="modal-cookies-form">
      <Modal.Body className="p-3">
        <p className="bold p-lg">Política de Cookies</p>
        <p className="mb-3">
          Te informamos que a través de este sitio web utilizamos cookies para mejorar la experiencia de usuario.
          Asumimos que al seguir navegando aceptas su uso.
          </p>
        <Row className="justify-content-end flex-1 align-content-end mb-3">
          <Col xs="12">
            <button
              className="btn btn-2 text-accent-light hoverable mx-auto bold d-block"
              onClick={handleAcceptCookies}
            >
              OK
              </button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

CookiesModal.propTypes = {
  initAnalitics: PropTypes.func.isRequired,
};

export default CookiesModal;
