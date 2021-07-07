import React from 'react'


const RegisterForm = ({ handleSubmit, name, setName, email, setEmail, password, setPassword }) => {
    return (
       
        <form onSubmit={ handleSubmit } className="form-group mt-3">

        <div className="form-group mb-2">
            <label className="form-label" >Name</label>
            <input type="text" 
                className="form-control" 
                placeholder="Enter Your Name" 
                value={ name }
                onChange={ (e) => setName(e.target.value) } 
           />
        </div>

        <div className="form-group mb-3">
            <label className="form-label">Email</label>
            <input type="email" 
                className="form-control" 
                placeholder="Enter Your Email" 
                value={ email } 
                onChange={ (e) => setEmail(e.target.value) } 
           />
        </div>

        <div className="form-group mb-3">
            <label className="form-label">Password</label>
            <input type="password" 
                className="form-control" 
                placeholder="Enter Your Password" 
                value={ password } 
                onChange={ (e) => setPassword(e.target.value) } 
           />
        </div>
        
        <div className="form-group">
            <button className="btn btn-primary">Submit</button>
        </div>

    </form>

    )
}

export default RegisterForm
