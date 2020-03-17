import axios from 'axios'

const instance = axios.create({
	//change the base url
	baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
})

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance