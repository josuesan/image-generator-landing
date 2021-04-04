import { Accordion, Col, Container, Row } from "react-bootstrap"
import { NextSeo } from 'next-seo';

const Question = ({ children }) => {
  return (
    <h4 className="text-accent-light bold">{children}</h4>
  );
}


export default function AboutPage() {
  const faqs = [
    {
      id: 0,
      question: 'Can you use these images freely? does it have any cost?',
      answer: 'Yes. they are totally free.',
    },
    {
      id: 1,
      question: 'Does this platform contain an api that I can use? ',
      answer: 'At the moment no, it is being evaluated how feasible it is to expose that api publicly.',
    },
    {
      id: 2,
      question: 'Why do you use ads on the platform?',
      answer: 'This platform is 100% free but it carries infrastructure costs that must be paid... the ads help to pay for it.',
    },
    {
      id: 3,
      question: 'Is it possible to create the image without any text? ',
      answer: 'Yes, you just have to leave the text field empty.',
    },
    {
      id: 4,
      question: 'Do you have any doubt or suggestion?',
      answer: 'Do not hesitate to contact me, send me an email here.',
    },
    {
      id: 5,
      question: 'How can I support Imagegenerator.com?',
      answer: 'Mention us on your blog, make a tweet, there is the possibility of making donations through paypal.',
    },
  ]
  return (
    <>
      <NextSeo
        title="Using More of Config"
        description="This example uses more of the available config options."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Container>
        <Row>
          <Col xs="12">
            <h1 className="text-accent-light bold">About Us</h1>
            <p>Image generator that allows you to create test images (fake images, placeholder images,) in a customized way in which we can modify the color, the text, its size.</p>
            <p>This tool aims to help programmers, designers, layout designers, among others, to save time in their projects, by using Image Generator to create their mockups, MVP with our images quickly and easily. </p>
            <p>This project has been developed by Josue Sanchez with a lot of love. New features will be included soon to improve the user experience. </p>

            <h2>Frequently Asked Questions</h2>
            <Accordion defaultActiveKey="0">
              {faqs.map((elem) => (
                <div key={elem.id}>
                  <Accordion.Toggle as={Question} eventKey={`${elem.id}`}>
                    {elem.question}
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey={`${elem.id}`}>
                    <p>{elem.answer}</p>
                  </Accordion.Collapse>
                </div>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  )
}
