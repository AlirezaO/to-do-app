import React from 'react';
import TextInput from '../TextInput/textInput';

const LoginComponent = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault(); // prevent default form submission
      };



    return(
        <div className="center">
            <form onSubmit={(e) => handleFormSubmit(e)}>

                <TextInput label="Email"/>

            </form>
        </div>
        
    )
}


export default LoginComponent;