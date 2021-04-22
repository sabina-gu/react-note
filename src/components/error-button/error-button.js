import React, {useState} from 'react';
import './error-button.css'

const ErrorButton =()=>{

    const [error, setError] = useState(false)


    if(error){
       this.foo.bar=0;
    }


    return (
        <button className='btn-err'
                onClick={()=> setError (true)}><i className="fas fa-biohazard"></i></button>
    )
}

export default ErrorButton