#firebase installation steps:

1.console.firebase.google.com
2. create project(skip google analytics
3.register app ( </> )
4. Install Firebase - npm run Firebase
5. add config file src> firebase.init.js
6.go to docs > Build > Authentication >web > get started
7. export app from the firebase.init.js file > export default app
8.import { getAuth } from "firebase/auth" > log in.jsx    

	const GoogleProvider = new GoogleAuthProvider() 
 	const auth = getAuth();
	signInWithPopup(auth, provider)
	.then((res)=> {
		const user = res.user
		consile.log(user)
		})
		
	const user = result.user;
	.catch((err)=> console.log('err', err.message)})
			
>>>>>>>see in console user info /error
