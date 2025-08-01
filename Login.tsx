import React, {useState} from 'react';

interface IState{
  user:{
    email: string,
    password:string,
  }
}

const Login:React.FC = () => {
  const [state, setState] = useState<IState>({
    user: {
      email: ' ',
      password: ' ',
    }
  })

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      user:{
        ...state.user,
        [event.target.name]:event.target.value,
      },
    });
  };

  const handleSubmit=(event:React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    console.log(state.user);
  }
  return(
    <>
    <div className="container">
      
        <div className="w-50">
         <form className="card p-4 mt-4" onSubmit={handleSubmit}>
            <h1>Login Form Example</h1>
 <div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name="email" value={state.user.email} onChange={handleChange}className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password"value={state.user.password}  onChange={handleChange}className="form-control" id="exampleInputPassword1" />
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</div>
</form>
<div className="mt-4 bg-light p-2">
<p>{JSON.stringify(state.user)}</p>
</div>

        </div>
    </div>
    </>
  )
}


export default Login;