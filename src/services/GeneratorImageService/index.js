import ApiService from '../Api';

const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const GeneratorImageService = {
  get: (slug) => (
    ApiService.getAuth(`/${API_VERSION}/cards/${slug}`)
      .then((response) => response.data)
      .catch((error) => { throw error; })
  ),
  create: (data) => {
    if (data.text !== '') {
      return ApiService
        .get(`/${API_VERSION}/images/?text=${encodeURIComponent(data.text)}&fontSize=${data.fontSize}&fontColor=${encodeURIComponent(data.fontColor)}&format=${data.format}&width=${data.width}&height=${data.height}&bgColor=${encodeURIComponent(data.bgColor)}`)
        .then((response) => response.data)
        .catch((error) => { throw error; })
    }
    else {
      return ApiService
        .get(`/${API_VERSION}/images/?format=${data.format}&width=${data.width}&height=${data.height}&bgColor=${encodeURIComponent(data.bgColor)}`)
        .then((response) => response.data)
        .catch((error) => { throw error; })
    }
  }
};

export default GeneratorImageService;
