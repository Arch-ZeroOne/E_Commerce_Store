import { auth } from "./config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const provider = new GoogleAuthProvider();
const google = document.getElementById("logInGoogle");


