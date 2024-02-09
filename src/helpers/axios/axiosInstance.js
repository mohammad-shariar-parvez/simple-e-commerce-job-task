
import axios from "axios";



const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;


// Add a request interceptor
instance.interceptors.request.use(
  async function (config) {





    // const token = session.user.accessToken ? session.user.accessToken  : "";


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
      data: response?.data?.result,
      meta: response?.data?.meta,
    };
    // console.log("res---", responseObject);
    // console.log("res---", responseObject);
    // console.log("res 1111", response);
    return responseObject;
  },
  async function (error) {
    // const config = error?.config;
    // console.log("ERROR CONFIG---", error.esponse?.status);
    console.log("ERROR CONFIG----", error);

    // if (error?.response?.status === 403 && !config?.sent) {
    //   config.sent = true;
    //   const response = await getNewAccessToken();
    //   const accessToken = response?.data?.accessToken;
    //   config.headers['Authorization'] = accessToken;
    //   setToLocalStorage(authKey, accessToken);
    //   return instance(config);
    // } else {

    //   // const responseObject: IGenericErrorResponse = {
    //   //   statusCode: error?.response?.status || 500,
    //   //   message: error?.response?.data?.message || "Something went wrong",
    //   //   errorMessages: error?.response?.data?.message,
    //   // };
    //   // console.log(error);
    // }
    return Promise.reject(error);

  }
);

export { instance };
