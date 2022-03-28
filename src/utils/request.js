import axios from 'axios'
import { getAdminToken,getBucketToken,generateBucketToken } from './auth'

// create an axios instance
const service = axios.create({
	baseURL: 'http://localhost:9000',
 // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
	if(config.url.indexOf('/admin') !== -1){
		config.headers['Authorization'] = getBucketToken()
	}
	else{
		config.headers['Authorization'] = getBucketToken()
	}
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
	if (response.status !== 200){
		switch(response.status){
			case 403: router.replace({path: '/login'})
		}
	}else {
		return res
	}
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
