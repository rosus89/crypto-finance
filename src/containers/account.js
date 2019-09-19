import React  from 'react'
import SignIn from './sign_in';
import SignUp from './sign_up';

function Account(props){
    const [page, setPage] = React.useState("signIn");
    if (page === "signIn"){
        return (<SignIn setPage = {setPage} />)
    }
    else if (page === "signUp"){
        return (<SignUp setPage = {setPage} />)
    }
}

export default Account;