import { async } from "@firebase/util";
import { loginWithEmailPassword, registerUserWithEmail, signInWithGoogle, logoutFirebase} from "../../firebase/provider";
import { login, logout, checkingCredentials } from "./authSlice"
export const checkingAuthentication = (email, password) =>{
    return async (dispatch)=>{
        dispatch(checkingCredentials());
        
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch)=>{
        dispatch(checkingCredentials());
        
        const result = await signInWithGoogle();

        if(!result.ok) return dispatch(logout(result));

        dispatch(login(result));
    }
}

export const startCreatingUserWithEmail = ({email, password, displayName}) =>{
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await registerUserWithEmail({email, password, displayName});
        
        if(!result.ok) return dispatch(logout(result));

        dispatch(login(result));
    }
}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await loginWithEmailPassword({email, password});
        if(!result.ok) return dispatch(logout(result));

        dispatch(login(result));
    }
}


export const startLogout = () => {
    return async(dispatch) => {
        await logoutFirebase();
        dispatch(logout());
    }
}