import { Accordion, Col, Container, Row, useAccordionToggle } from "react-bootstrap"
import { NextSeo } from 'next-seo';

const Question = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionToggle(eventKey);
  return (
    <h3 className="h4 text-accent-light bold mb-4 hoverable" onClick={decoratedOnClick}>{children}</h3>
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
        title="Image Generator"
        description="Image Generator is an online app to create  or generate images completely free and easy to use. You can create placeholder images, which you can use in mockups, or in the development of your applications."
        canonical="https://image-generator-landing.vercel.app"
        openGraph={{
          url: 'https://image-generator-landing.vercel.app',
          title: 'Image Generator',
          description: 'Image Generator is an online tooling app to create / generate images completely free and easy to use. You can create placeholder images, which you can use in mockups, or in the development of your applications.',
          images: [
            {
              url: 'https://image-generator-landing.vercel.app/opengraph.png',
              width: 1200,
              height: 600,
              alt: 'Image Generator',
            },
            {
              url: 'https://image-generator-landing.vercel.app/opengraph2.png',
              width: 1200,
              height: 600,
              alt: 'Image Generator',
            },
          ],
          site_name: 'Image Generator',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Container className="mt-5">
        <Row>
          <Col xs="12">
            <h1 className="text-accent-light bold mb-4">About Us</h1>
            <p className="p-lg">Image generator that allows you to create test images (fake images, placeholder images) in a customized way in which we can modify the color, the text, its size.</p>
            <p className="p-lg">This tool aims to help programmers, designers, layout designers, among others, to save time in their projects, by using Image Generator to create their mockups, MVP with our images quickly and easily. </p>
            <p className="p-lg mb-4">This project has been developed by Josue Sanchez with a lot of love. New features will be included soon to improve the user experience. </p>

            <h2 className="h1 text-accent-light bold mb-4">Frequently Asked Questions</h2>
            <Accordion defaultActiveKey="0">
              {faqs.map((elem, i) => (
                <div key={elem.id}>
                  <Question eventKey={`${elem.id}`}>
                    {`${i + 1}. ${elem.question}`}
                  </Question>

                  <Accordion.Collapse eventKey={`${elem.id}`}>
                    <p className="p-md">{elem.answer}</p>
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
