import { useEffect, useReducer } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import { CookiesContextProvider } from '../../contexts/CookiesContext';
import { ImageContext } from '../../contexts/ImageContext';
import { imageReducer } from '../../reducers/imageReducer';
import AnalyticsService from '../../services/AnalyticsService';
import CookiesModal from '../CookiesModal';
import Cursor from '../Cursor/Cursor';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const initialState = {
  url: '/fff.png',
  width: 400,
  height: 400,
  format: 'png',
  fontColor: '#FFFFFF',
  bgColor: '#000000',
  fontSize: '18',
  text: '400 x 400',
};

const init = () => initialState;

const Layout = ({ children }) => {
  const [cookies] = useCookies(['technical']);
  const [image, dispatch] = useReducer(imageReducer, initialState, init);
  const initAnalitics = () => {
    AnalyticsService.initialize({
      google: process.env.NEXT_PUBLIC_GOOGLE_PIXEL,
    });
    AnalyticsService.logPage(window.location.pathname);
    window.ANALYTICS_INITIALIZED = true;
  };
  useEffect(() => {
    if (cookies.technical && !window.ANALYTICS_INITIALIZED && typeof window !== 'undefined') {
      initAnalitics();
    }
  }, [cookies]);
  return (
    <div className="layout text-base-light bg-background2-light">
      <CookiesProvider>
        <CookiesContextProvider>
          <ImageContext.Provider value={{ image, dispatch }}>
            <Header />
            <main className="py-5 mt-4">
              {children}
            </main>
            <Footer />
            <Cursor />
            {!cookies.technical && (
              <CookiesModal initAnalitics={initAnalitics} />
            )}
          </ImageContext.Provider>
        </CookiesContextProvider>
      </CookiesProvider>
    </div>
  )
}

export default Layout
