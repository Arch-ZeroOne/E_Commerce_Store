import React from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { app } from "../firebase/config";

const auth = getAuth(app);
function SignInForm() {
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  return (
    <div className=" bg-[rgb(0,0,0,0.2)] z-50 fixed w-full">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
          <form className="flex flex-col">
            <input
              type="email"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Email address"
            />
            <input
              type="password"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Password"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            >
              Login
            </button>

            <div className="flex justify-center p-3 gap-3">
              <i
                className="fa-brands fa-google text-2xl cursor-pointer"
                onClick={() => toggleForm(googleProvider)}
              ></i>
              <i className="fa-brands fa-facebook text-2xl cursor-pointer"></i>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function toggleForm(provider) {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      console.log(user);
    })
    .catch((error) => {
      const error_code = error.code;
      const error_message = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error_code);
    });
}

export default SignInForm;
