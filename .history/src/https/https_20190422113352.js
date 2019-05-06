import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.interceptors.request.use(
  config => {
    if (config.method === 'post' || config.method === 'put') {
      // config.data = qs.stringify(config.data);
    }
    return config;
  },
  error => {
    return Promise.reject(error.data.error.message);
  }
);

axios.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

// 发送请求

function post(url, params) {

  return new Promise((resolve, reject) => {

    axios

      .post(url, params)

      .then(
        res => {

          resolve(res.data)

        },

        err => {

          reject(err.data)

        }
      )

      .catch(err => {

        reject(err.data)

      })

  })

}

export function get(url, params) {

  return new Promise((resolve, reject) => {

    axios

      .get(url, {

        params: params

      })

      .then(res => {

        resolve(res.data)

      })

      .catch(err => {

        reject(err.data)

      })

  })

}

export const Http = {
  post,
  get
}
