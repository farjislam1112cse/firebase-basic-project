import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../firebase_ins/firebase.init';

const SocialLogin = () => {

    const auth = getAuth(app);
    const GoogleProvider = new GoogleAuthProvider();

    const handleSocialLogin = () => {
        signInWithPopup(auth , GoogleProvider)

            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(err => {
                console.log('err', err.message);
            })
       
    }

    return (
        <div className='text-center flex  flex-col justify-center'>
            <hr className='border-black pt-2'></hr>
            <div className="divider font-bold">continue with</div>
            <div className="flex justify-around">
                <button
                    onClick={handleSocialLogin}
                    className=" bg-red-800 py-2 px-8 rounded-lg text-white">Google</button>
                <button
                    // onClick={() => handleSocialLogin(githubLogin)}
                    className=" bg-red-800 py-2 px-8 rounded-lg text-white">Github</button>

            </div>
        </div>
    );
};

export default SocialLogin;