import React from 'react';
import LoginComponent from '../../components/LoginForm/login';
import toDoImage from '../../assets/images/ToDoImage.png'

const LoginPage = () => {

    return(
        <div className="center">
            <img src={toDoImage} alt="to do" className="to-do-image"/>

            <LoginComponent/>
        </div>
        
    )
}


export default LoginPage;