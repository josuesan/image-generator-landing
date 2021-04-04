/* eslint-disable no-underscore-dangle */
import React, { createContext, useState } from 'react';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';

export const CookiesContext = createContext();

export const CookiesContextProvider = ({ children }) => {
  const [cookies] = useCookies(['wishlist', 'comparator', '_ga', 'technical']);
  const [cookiesActivated, setCookiesActivated] = useState({
    cookieTechnicals: true,
    cookieStatistics: cookies._ga !== undefined,
  });

  return (
    <CookiesContext.Provider
      value={{
        cookiesActivated,
        setCookiesActivated,
      }}
    >
      {children}
    </CookiesContext.Provider>
  );
};

CookiesContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
