import Vue from 'vue';
import Router from 'vue-router';
//import firebase from 'firebase';

//pages
import LandingPage from './components/auth/LandingPage.vue'
import SignIn from './components/auth/SignIn.vue'
import SignUp from './components/auth/SignUp.vue'
import Home from './components/home/Home.vue'
import Modules from './components/modules/Modules.vue'
import ModReview from './components/modules/ModReview.vue'
import MakeReview from './components/Rating(MW)/RatingPage.vue'
import AskQuestion from './components/Subthread(MW)/SubthreadPost.vue'
import Account from './components/account/Account.vue'
import ReviewPage from './components/Comment(MW)/ReviewPage.vue'
import SubthreadPage from './components/Subthread(MW)/SubthreadPage.vue'
Vue.use(Router);

export default new Router({
	routes: [
		{ path: '/', name: 'welcome', component: LandingPage},
		{ path: '/signin', name: 'sign-in', component: SignIn},
		{ path: '/signup', name: 'sign-up', component: SignUp},
		{ path: '/home', name: 'home', component: Home},
		{ path: '/summary', name: 'summary', component: ModReview},
		{ path: '/modules', name: 'modules', component: Modules},
		{ path: '/account', name: 'account', component: Account},
		{ path: '/makereview/:module_id', name: 'review', component: MakeReview	},
		{ path: '/askquestion/:module_id', name: 'ask', component: AskQuestion},
		{ path: '/reviewpage/:review_id', name: 'reviewpage', component: ReviewPage},
		{ path: '/subthreadpage/:subthread_id', name: 'subthreadpage', component: SubthreadPage}
	],
	mode: 'history'
})

// let router = new Router({
// 	routes: [
// 		{ 
// 			path: '/', 
// 			name: 'welcome', 
// 			component: LandingPage,
// 			meta: {
// 				requiresGuest: true
// 			}
// 		},
// 		{ 
// 			path: '/signin', 
// 			name: 'sign-in', 
// 			component: SignIn,
// 			meta: {
// 				requiresGuest: true
// 			}
// 		},
// 		{ 
// 			path: '/signup', 
// 			name: 'sign-up', 
// 			component: SignUp,
// 			meta: {
// 				requiresGuest: true
// 			}
// 		},
// 		{ 
// 			path: '/home', 
// 			name: 'home', 
// 			component: Home,
// 			meta: {
// 				requiresAuth: true
// 			}
// 		},
// 		{ 
// 			path: '/summary', 
// 			name: 'summary', 
// 			component: ModuleDesc,
// 			meta: {
// 				requiresAuth: true
// 			}
// 		},
// 		{ 
// 			path: '/modules', 
// 			name: 'modules', 
// 			component: Modules,
// 			meta: {
// 				requiresAuth: true
// 			}
// 		},
// 		{ 
// 			path: '/account', 
// 			name: 'account', 
// 			component: Account,
// 			meta: {
// 				requiresAuth: true
// 			}
// 		},
// 		{ 
// 			path: '/makereview', 
// 			name: 'review', 
// 			component: MakeReview,
// 			meta: {
// 				requiresAuth: true
// 			}
// 		},
// 		{ 
// 			path: '/askquestion', 
// 			name: 'ask', 
// 			component: AskQuestion,
// 			meta: {
// 				requiresAuth: true
// 			}
// 		}
// 	],
// 	mode: 'history'
// });

// router.beforeEach((to, from, next) => {
// 	//check for required auth guard
// 	if (to.matched.some(record => record.meta.requiresAuth)) {
// 		//check if NOT logged in 
// 		if (!firebase.auth().currentUser) {
// 			//go to login page
// 			next({
// 				path: '/login',
// 				query: {
// 					redirect: to.fullPath
// 				}
// 			});
// 		} else {
// 			//proceed to the route
// 			next();
// 		}
// 	} else if(to.matched.some(record => record.meta.requiresGuest)) {
// 		//check if logged in 
// 		if (firebase.auth().currentUser) {
// 			//go to login page
// 			next({
// 				path: '/home',
// 				query: {
// 					redirect: to.fullPath
// 				}
// 			});
// 		} else {
// 			//proceed to the route
// 			next();
// 		}
// 	} else {
// 		next();
// 	}
// });

// export default router;
