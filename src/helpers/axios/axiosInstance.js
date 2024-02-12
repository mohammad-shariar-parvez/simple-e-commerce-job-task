import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;


// Add a request interceptor
instance.interceptors.request.use(
  async function (config) {
    //Add anything to request config.header such as token
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(

  function (response) {
    const responseObject = {
      data: response?.data?.result || response.data.item,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  async function (error) {

    //Handle error based on status code if needed 
    return Promise.reject(error);

  }
);

export { instance };
