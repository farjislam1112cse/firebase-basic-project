import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase_ins/firebase.init';
import { useState } from 'react';

const SocialLogin = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const GoogleProvider = new GoogleAuthProvider();


    const handleSocialLogin = () => {

        signInWithPopup(auth, GoogleProvider)

            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch(err => {
                console.log('err', err.message);
            })

    }



    const handleSocialLogout = () => {

        console.log("sofrifg");
        signOut(auth)
            .then(res => {
                setUser(null)
            })
            .catch(err => {
                console.log(err);
            })


    }

    return (
        <div className='text-center flex  flex-col justify-center'>
            <hr className='border-black pt-2'></hr>
            <div className="divider font-bold">continue with</div>
            <div className="flex justify-around">
                {/* if user found ? login btn : logoutbtn */}

                {
                    user ? <button
                        onClick={handleSocialLogout}
                        className=" bg-red-800 py-2 px-8 rounded-lg text-white">Google out</button> :
                        <button
                            onClick={handleSocialLogin}
                            className=" bg-red-800 py-2 px-8 rounded-lg text-white">Google in</button>

                }
                <button
                    // onClick={() => handleSocialLogin(githubLogin)}
                    className=" bg-red-800 py-2 px-8 rounded-lg text-white">Github</button>

            </div>
            {
                user && <div className='py-1'>
                    <div className='flex  flex-col justify-center'>
                        <div className='flex justify-center py-2'>
                            <img className ='rounded-full' src={user.photoURL} alt="badhon's photo" />
                        </div>
                        <p className='font-bold text-zinc-900'>{user.displayName}</p>
                        <p className='font-bold text-zinc-900'>{user.email}</p>


                    </div>

                </div>
            }

        </div>
    );
};

export default SocialLogin;