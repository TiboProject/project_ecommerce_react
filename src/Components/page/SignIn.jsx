import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useEffect, useState } from "react";
import firebase from "firebase/compat";

const SignIn = () => {
  const [isUserSignedIn, setIsSignedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => true,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
      console.log(user);
    });
  }, []);


  const signOut = () => {
    firebase.auth().signOut();
  }

  return (
    <>
      {
        isUserSignedIn ? (
          <div className="flex-auto w-full h-screen ">
            <img alt="" src="https://i.goopics.net/a1yk29.jpg" className="w-full h-full object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div class='text-white max-w-xs my-auto mx-auto bg-gradient-to-b from-blue-900 to-gray-900 p-4 py-5 px-5 rounded-xl'>
                <div className="grid place-items-center">
                  <p className="text-center text-white font-mono font-semibold text-lg">
                    Vous êtes déjà connecté !
                  </p>
                  <div>
                    <button onClick={signOut}>Deconnexion</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
          :
          <div className="flex-auto w-full h-screen ">
            <img alt="" src="https://i.goopics.net/a1yk29.jpg" className="w-full h-full object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div class='text-white max-w-xs my-auto mx-auto bg-gradient-to-b from-blue-900 to-gray-900 p-4 py-5 px-5 rounded-xl'>
                <div className="grid place-items-center">
                  <p className="text-center text-white font-mono font-semibold text-lg">
                    Connectez vous et profitez d'offres exclusives !
                  </p>
                  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </div>
              </div>
            </div>
          </div>

      }

    </>

  );

}

export default SignIn;