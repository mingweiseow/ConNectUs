import LandingPage from './components/LandingPage.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'

export default[
	{ path: '/', component: LandingPage},
	{ path: '/signin', component: SignIn},
	{ path: '/signup', component: SignUp}
]