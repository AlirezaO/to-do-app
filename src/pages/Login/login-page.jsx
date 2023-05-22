import React from 'react';
import LoginComponent from '../../components/LoginForm/login';
import toDoImage from '../../assets/images/ToDoImage.png';
import './style.css'

const LoginPage = () => {

    return(
        <div className="login-page">

            <div  className="image-container">            
                <img src={toDoImage} alt="to do" className='to-do-image'/>
            </div>

            <div className="login-component">            
                <LoginComponent/>
            </div>
            
        </div>
        
    )
}


export default LoginPage;