const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

class API {
  constructor() {
    this.headers = {
      'Content-Type': 'application/json',
    };
    this.headersDownlands = {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    };
  }

  getHeader() {
    return this.headers;
  }

  get(url, query = null, images = false) {
    const newQuery = query;
    const params = {
      method: 'get',
      headers: this.getHeader(),
    };

    if (query && query.filters) {
      newQuery.filters = btoa(JSON.stringify(query.filters));
    }
    return this.invoke(url, params, newQuery, false, images);
  }

  put(url, body) {
    const params = {
      method: 'put',
      headers: this.getHeader(),
      body: JSON.stringify(body),
    };

    return this.invoke(url, params);
  }

  patch(url, body) {
    const params = {
      method: 'PATCH',
      headers: this.getHeader(),
      body: JSON.stringify(body),
    };

    return this.invoke(url, params);
  }

  post(url, body) {
    const params = {
      method: 'post',
      headers: this.getHeader(),
      body: JSON.stringify(body),
    };
    return this.invoke(url, params);
  }

  postFormData(url, body) {
    const params = {
      method: 'post',
      headers: {},
      body,
    };

    return this.invoke(url, params);
  }

  delete(url) {
    const params = {
      method: 'delete',
      headers: this.getHeader(),
    };

    return this.invoke(url, params);
  }

  // AUTH METHODS

  getHeaderAuth(downland) {
    return this.headers;
  }

  getAuth(url, query = null, downland = false) {
    const newQuery = query;
    const params = {
      method: 'get',
      headers: this.getHeaderAuth(downland),
    };
    if (query && query.filters) {
      newQuery.filters = btoa(JSON.stringify(query.filters));
    }
    return this.invoke(url, params, newQuery, downland);
  }

  putAuth(url, body) {
    const params = {
      method: 'put',
      headers: this.getHeaderAuth(),
      body: JSON.stringify(body),
    };

    return this.invoke(url, params);
  }

  patchAuth(url, body) {
    const params = {
      method: 'PATCH',
      headers: this.getHeaderAuth(),
      body: JSON.stringify(body),
    };

    return this.invoke(url, params);
  }

  postAuth(url, body) {
    const params = {
      method: 'post',
      headers: { ...this.getHeaderAuth() },
      body: JSON.stringify(body),
    };

    return this.invoke(url, params);
  }

  postFormDataAuth(url, body) {
    const params = {
      method: 'post',
      headers: {
        Authorization: `Bearer ${Cookie.getJSON(JWT_SESSION)}`
      },
      body,
    };

    return this.invoke(url, params);
  }

  deleteAuth(url) {
    const params = {
      method: 'delete',
      headers: this.getHeaderAuth(),
    };

    return this.invoke(url, params);
  }

  // AUTH METHODS
  invoke = (url, params, query = null, downland = false, images = false) => {
    // -- Prepare URL
    const apiUrl = new URL(`${API_BASE_URL}${url}`);
    if (query) apiUrl.search = new URLSearchParams(query).toString();
    // -- Prepare abort signal
    // const abortController = new AbortController();
    // const { signal } = abortController;

    // -- Prepare params
    const fetchParams = {
      ...params,
      // signal,
    };

    const promise = new Promise((resolve, reject) => {
      fetch(apiUrl, fetchParams)
        .then(async (response) => {
          if (response.headers.has('token')) {
            // authService.refreshToken(response.headers.get('token'));
          }
          if (downland) {
            return {
              status: response.status,
              data: await response.blob(),
            };
          }
          if (images) {
            return {
              status: response.status,
              data: await response,
            };
          }
          return {
            status: response.status,
            data: await response.json(),
          };
        })
        .catch((error) => {
          if (error.name === 'AbortError') {
            /*
            toast.error('Error de conexión, intente de nuevo', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
            });
            */
            // console.error('Request took more than 5 seconds. Automatically cancelled.');
          }
          return reject(error);
        })
        .then((response) => {
          const res = response;
          if (!res || !res.status) {
            return reject(Error({ response: true }));
          }
          if ([401].indexOf(res.status) !== -1) {
            Cookie.remove(JWT_SESSION);
            Cookie.remove(CURRENT_USER);
            if (process.browser) {
              window.location.href = loginPath;
            }
          }
          if ([403].indexOf(res.status) !== -1) {
            return reject(res.data);
          }
          if (res.status >= 200 && res.status < 300) {
            return resolve(res.data);
          }
          return reject(res.data);
        });
    });

    // setTimeout(() => {
    //   abortController.abort();
    // }, 7000);
    return promise;
  }
}

export default new API();
