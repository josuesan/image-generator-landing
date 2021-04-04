import { Col, Container, Row, Table } from "react-bootstrap";
import { NextSeo } from 'next-seo';

const recommendations = [
  {
    name: 'Full Page Background',
    size: '1600 x 1000 / 1920 x 1200',
  },
  {
    name: 'Product feature',
    size: '800 x 600',
  },
  {
    name: 'Header Background',
    size: '1600 x 500',
  },
  {
    name: 'Logo',
    size: '300 x 150',
  },
  {
    name: 'Pop-up background',
    size: '500 x 500',
  },
  {
    name: 'Facebook Share Images',
    size: '1200 x 628',
  },
  {
    name: 'Instagram & Facebook Feed',
    size: '1080 x 1080',
  },
  {
    name: 'Square',
    size: '250 x 250',
  },
  {
    name: 'Small square',
    size: '200 x 200',
  },
  {
    name: 'Banner',
    size: '468 x 60',
  },
  {
    name: 'Leaderboard',
    size: '728 x 90',
  },
  {
    name: 'Inline rectangle',
    size: '300 x 250',
  },
  {
    name: 'Large rectangle',
    size: '336 x 280',
  },
  {
    name: 'Skyscraper',
    size: '120 x 600',
  },
  {
    name: 'Wide skyscraper',
    size: '160 x 600',
  },
  {
    name: 'Half-Page ad',
    size: '300 x 600',
  },

  {
    name: 'Mobile header background',
    size: '800 x 1200',
  },
  {
    name: 'Large leaderboard',
    size: '970 x 90',
  },
  {
    name: 'Mobile banner',
    size: '300 x 50 / 320 x 50',
  },
  {
    name: 'Large mobile banner',
    size: '320 x 100',
  },
]
export default function RecommendationsPage() {
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
            <h1 className="text-accent-light bold">Recommendations</h1>
            <p>
              The dimensions of the images depend on the amount of space you need to occupy on the screen.
              Header or full screen images will always be much larger than logo images, for example.
              There are no set rules, but as a general rule, you can look at this list of sizes according to the different elements on the screen:
          </p>

            <Table responsive="sm">
              <thead>
                <tr>
                  <th className="text-accent-light bold">#</th>
                  <th className="text-accent-light bold">Name</th>
                  <th className="text-accent-light bold">Size</th>
                </tr>
              </thead>
              <tbody>
                {recommendations.map((elem, i) => (
                  <tr key={elem.name}>
                    <td className="text-accent-light thin">{i + 1}</td>
                    <td className="text-accent-light bold">{elem.name}</td>
                    <td className="text-accent-light">{elem.size}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}
