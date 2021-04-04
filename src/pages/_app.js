import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout/Layout';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp
