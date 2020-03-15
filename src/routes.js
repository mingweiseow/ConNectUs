//Step 2 -- Define Routes
import PageContent from './components/PageContent.vue'
import Modules from './components/Modules.vue'
import Account from './components/Account.vue'
import MakeReview from './components/Rating(MW)/RatingPage.vue'
import AskQuestion from './components/Subthread(MW)/SubthreadPage.vue'
export default[
    { path: '/', component: PageContent},
    { path: '/modules', component: Modules},
    { path: '/account', component: Account},
    { path: '/makereview', component: MakeReview},
    { path: '/askquestion', component: AskQuestion}
]