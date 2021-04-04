import ReactGA from 'react-ga';

const googleAnalytics = {
  init: (pixeles) => {
    ReactGA.initialize(
      [
        {
          trackingId: pixeles,
          gaOptions: { name: 'dwa' },
        },
      ],
      { debug: false, alwaysSendToDefaultTracker: false },
    );
  },

  logPage: (page) => {
    ReactGA.set({ page }, ['dwa']);
    ReactGA.pageview(page, ['dwa']);
  },

  send: (category, action, label) => {
    ReactGA.event(
      {
        category,
        action,
        label,
      },
      ['dwa'],
    );
  },
};


const AnalyticsService = {
  initialize: ({ google }) => {
    googleAnalytics.init(google);
  },

  logPage: (pathname) => {
    googleAnalytics.logPage(pathname);
  },

  analyticsName: {
    GOOGLE_ANALYTICS: 'googleAnalytics',
  },

  categorysName: {
    generateImage: {
      google: 'Generar imagen',
    },
    donationPaypal: {
      google: 'Donaciones paypal',
      facebook: 'ViewContent',
    },
    donationBuyMeCoffe: {
      google: 'Donaciones buy me a coffe',
      facebook: 'ViewContent',
    },
    scrolling: {
      google: 'Scrolling',
    },
  },

  /**
   * analyticServices: Array with type analytic service
   * [google analytic, facebook analytic, omniture, intern]
   * page: Page where set event
   * action: action type [example: click, play]
   * data: information to send
  */
  setEvent: (analyticServices, category, action, data) => {
    if (document.cookie.match('(^|;) ?_ga=([^;]*)(;|$)')) {
      for (let index = 0; index < analyticServices.length; index += 1) {
        const analyticService = analyticServices[index];
        if (analyticService === 'googleAnalytics') {
          googleAnalytics.send(category.google, action, data);
        }
      }
    }
  },
};

export default AnalyticsService;
