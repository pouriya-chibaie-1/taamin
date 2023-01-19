import axios from "axios";

export const baseUrl = "http://37.156.21.70/";

const axiosApi = axios.create({
  baseURL: baseUrl,
  timeout: 20000,
});

// api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(st.accessToken())}`;
// axios.defaults.headers.post['Authorization'] = `Bearer ${st.accessToken()}`;

axiosApi.interceptors.request.use(
  function (res) {
    // Do something before request is sent
    return res;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosApi.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // const originalRequest = error.config;
    // if (error.response.status === 401 && !originalRequest._retry) {
    //     originalRequest._retry = true;
    //     return api('api/token/refresh/',
    //         {
    //             "refresh_token": st.refreshToken()
    //         })
    //         .then(res => {
    //             if (res.status === 201) {
    //                 // 1) put token to LocalStorage
    //                 st.setLogin(res.data);

    //                 // 2) Change Authorization header
    //                 api.defaults.headers.common['Authorization'] = 'Bearer ' + st.accessToken;

    //                 // 3) return originalRequest object with Axios.
    //                 return api(originalRequest);
    //             }
    //         })
    // }
    // if (error.response.status === 400) {
    // try to get new access token with refresh token
    // try the request again
    // logout user and redirect to login page if error
    // return error.response.data;
    // return error.response;
    // }

    return Promise.reject(error);
  }
);

export default axiosApi;
