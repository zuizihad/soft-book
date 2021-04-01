import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathName: '/' } }
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        error: '',
        success: ''
    });

    const haqndleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const newUserInfo = {
                    name: displayName,
                    email: email,
                }
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return (
        <div>
            <div className="btn btn-primary" onClick={haqndleLogin}>continue with Google</div>
        </div>
    );
};

export default Login;