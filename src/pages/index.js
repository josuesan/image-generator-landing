import GeneratorForm from '../components/GeneratorForm/GeneratorForm';
import PreviewBanner from '../components/PreviewBanner/PreviewBanner';
import { NextSeo } from 'next-seo';

export default function Home() {
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
        additionalMetaTags={[{
          property: 'dc:creator',
          content: 'Jane Doe'
        }, {
          name: 'application-name',
          content: 'NextSeo'
        }, {
          httpEquiv: 'x-ua-compatible',
          content: 'IE=edge; chrome=1'
        }]}
      />
      <PreviewBanner />
      <GeneratorForm />
    </>
  )
}
