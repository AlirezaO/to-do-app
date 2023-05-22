import React from 'react';
import TextInput from '../Input/TextInput/textInput';
import PasswordInput from '../Input/Password/password';
import CustomizedInputs from '../Input/Customized/customized';

const LoginComponent = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault(); // prevent default form submission
      };



    return(
        <div className="center">
            <form onSubmit={(e) => handleFormSubmit(e)}>

                <TextInput label="Email"/>
                <PasswordInput label="Password"/>
                {/* <CustomizedInputs label='custome'/> */}

            </form>
        </div>
        
    )
}


export default LoginComponent;