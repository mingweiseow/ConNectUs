import axios from 'axios'

const instance = axios.create({
	//change the base url
	baseURL: 'https://identitytoolkit.googleapis.com/v1'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance