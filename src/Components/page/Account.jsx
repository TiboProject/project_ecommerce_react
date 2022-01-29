import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Constant } from "../../Constant";
import { firebase } from "../../firebase";

const Account = () => {
    const [isSignedIn, setIsSigned] = useState(false);
    const auth = getAuth();

    const signOut = () => {
        firebase.auth().signOut();
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsSigned(true);
            } else {
                setIsSigned(false);
            }
        });
    });


    return (
        <>

            {
                isSignedIn ?
                    (
                        <div className="flex-auto w-full h-screen ">
                            <img src="https://i.goopics.net/b8ava9.jpg" className="w-full h-full object-cover" />
                            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold text-center rounded-3xl  shadow-lg p-20 max-w-3xl">
                                <img class="mb-3 w-32 h-34 rounded-full shadow-lg mx-auto" src={auth.currentUser.photoURL} alt="" />
                                <h1 class="text-xl text-gray-900"> {auth.currentUser.displayName} </h1>
                                <h3 class="text-lg text-gray-700 "> {auth.currentUser.email} </h3>
                                <button class="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide" onClick={signOut}>Déconnexion</button>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className="flex-auto w-full h-screen ">
                            <img src="https://i.goopics.net/by8pjt.jpg" className="w-full h-full object-cover object-top" />
                            <div class="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold text-center rounded-3xl  shadow-lg p-10 max-w-3xl">
                                <h1 class="text-xl text-gray-900"> Vous ne semblez pas être connecté... </h1>
                                <button class="bg-indigo-600 px-4 py-1 mt-4 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide" onClick={signOut}>Connexion</button>
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default Account;