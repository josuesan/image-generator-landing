import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { Download } from "../../constants/icons";
import { ImageContext } from "../../contexts/ImageContext";

function PreviewBanner() {
  const { image } = useContext(ImageContext);
  return (
    <Container className="pb-3 mt-5 preview-banner">
      <Row className="justify-content-center align-items-center">
        <Col xs="12" md="12">
          <div className="border border-base-light bg-gray3-light box">
            <img className="bg-black d-block mx-auto p-3" src={image.url} alt="Free Custom Generated" />
            <a className="d-block text-right icon download" href={image.url} title="Downland Image" download={`${image.width}X${image.height}.${image.format}`}>
              <Download />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default PreviewBanner;
