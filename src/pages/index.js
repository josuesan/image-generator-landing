import GeneratorForm from '../components/GeneratorForm/GeneratorForm';
import PreviewBanner from '../components/PreviewBanner/PreviewBanner';
import { NextSeo } from 'next-seo';
import { Card, Col, Container, Row } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Image Generator"
        description="Image Generator is an online app to create  or generate images completely free and easy to use. You can create placeholder images, which you can use in mockups, or in the development of your applications."
        canonical="https://image-generator-landing.vercel.app"
        openGraph={{
          url: 'https://image-generator-landing.vercel.app',
          title: 'Image Generator',
          description: 'Image Generator is an online app to create  or generate images completely free and easy to use. You can create placeholder images, which you can use in mockups, or in the development of your applications.',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
          ],
          site_name: 'Image Generator',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Container fluid className="banner bg-inverted-light">
        <Row>
          <Col xs="12">
            <h1 className="bold text-center mb-5 text-base-inv-light">Online tooling for image generation</h1>
            <h2 className="bold text-center mb-0 text-base-inv-light" id="previewer">Image previewer</h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col xs="12" md="9">
            <Card className="card-form bg-gray2-light" >
              <PreviewBanner />
              <GeneratorForm />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
