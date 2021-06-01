import React from 'react';

const Input = (props) => {
    return(
        <>
            <form onSubmit={props.onSubmit}>
                <h1>What's the Weather in Your Area?</h1>
                <input 
                    onChange={props.onChange} 
                    type="text" 
                    placeholder="Enter your Zipcode"
                />
                <input 
                     
                    type="submit" 
                    value="Submit" 
                />
            </form>
        </>
     )
}

export default Input;