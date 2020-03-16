//Step 2 -- Define Routes
import LandingPage from './components/LandingPage.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'
import PageContent from './components/PageContent.vue'
import Modules from './components/Modules.vue'
import Account from './components/Account.vue'
import MakeReview from './components/Rating(MW)/RatingPage.vue'
import AskQuestion from './components/Subthread(MW)/SubthreadPage.vue'

export default[
	{ path: '/', component: LandingPage},
	{ path: '/signin', component: SignIn},
	{ path: '/signup', component: SignUp},
    { path: '/summary', component: PageContent},
    { path: '/modules', component: Modules},
    { path: '/account', component: Account},
    { path: '/makereview', component: MakeReview},
    { path: '/askquestion', component: AskQuestion}
]
