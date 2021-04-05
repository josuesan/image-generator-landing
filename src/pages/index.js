import GeneratorForm from '../components/GeneratorForm/GeneratorForm';
import PreviewBanner from '../components/PreviewBanner/PreviewBanner';
import { NextSeo } from 'next-seo';

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
      <h1 className="bold text-center">Online tooling app for image generation</h1>
      <PreviewBanner />
      <GeneratorForm />
    </>
  )
}
