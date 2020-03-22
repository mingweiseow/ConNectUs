import Vue from 'vue';
import Router from 'vue-router';

//pages
import LandingPage from './components/auth/LandingPage.vue'
import SignIn from './components/auth/SignIn.vue'
import SignUp from './components/auth/SignUp.vue'
import Home from './components/home/Home.vue'
import Modules from './components/modules/Modules.vue'
import ModuleDesc from './components/modules/ModuleDesc.vue'
import MakeReview from './components/Rating(MW)/RatingPage.vue'
import AskQuestion from './components/Subthread(MW)/SubthreadPage.vue'
import Account from './components/account/Account.vue'

Vue.use(Router);

// export default [
// 	{ path: '/', component: LandingPage},
// 	{ path: '/signin', component: SignIn},
//     { path: '/signup', component: SignUp},
//     { path: '/home',component:Home},
//     { path: '/summary', component: ModuleDesc},
//     { path: '/modules', component: Modules},
//     { path: '/account', component: Account},
//     { path: '/review', component: MakeReview},
//     { path: '/ask', component: AskQuestion}
// ]

export default new Router({
	routes: [
		{ path: '/', name: 'welcome', component: LandingPage},
		{ path: '/signin', name: 'sign-in', component: SignIn},
		{ path: '/signup', name: 'sign-up', component: SignUp},
		{ path: '/home', name: 'home', component: Home},
		{ path: '/summary', name: 'summary', component: ModuleDesc},
		{ path: '/modules', name: 'modules', component: Modules},
		{ path: '/account', name: 'account', component: Account},
		{ path: '/makereview', name: 'review', component: MakeReview},
		{ path: '/askquestion', name: 'ask', component: AskQuestion}
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
// 			component: LandingPage,
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
// 			path: '/modules',
// 			name: 'modules',
// 			component: Modules,
// 			meta: {
// 				requiresAuth: true
// 			}
// 		},

// 		{
// 			path: '/review',
// 			name: 'review',
// 			component: MakeReview,
// 			meta: {
// 				requiresAuth: true
// 			}
// 		},

// 		{
// 			path: '/ask',
// 			name: 'ask',
// 			component: AskQuestion,
// 			meta: {
// 				requiresAuth: true
// 			}
// 		}
// 	]
// })

// router.beforeEach((to, from, next) => {
//   // Check for requiresAuth guard
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // Check if NO logged user
//     if (!firebase.auth().currentUser) {
//       // Go to login
//       next({
//         path: '/login',
//         query: {
//           redirect: to.fullPath
//         }
//       });
//     } else {
//       // Proceed to route
//       next();
//     }
//   } else if (to.matched.some(record => record.meta.requiresGuest)) {
//     // Check if NO logged user
//     if (firebase.auth().currentUser) {
//       // Go to login
//       next({
//         path: '/',
//         query: {
//           redirect: to.fullPath
//         }
//       });
//     } else {
//       // Proceed to route
//       next();
//     }
//   } else {
//     // Proceed to route
//     next();
//   }
// });

// export default router;
