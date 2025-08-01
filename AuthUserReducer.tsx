import React, { useReducer } from 'react';

type State = {
  isLogin: boolean;
};

type Action = { type: 'LOGIN' } | { type: 'LOGOUT' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'LOGIN':
      return { isLogin: true };
    case 'LOGOUT':
      return { isLogin: false };
    default:
      return state;
  }
};

const AuthUserReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {isLogin: false});
    
  return (
    <div className="container">
      <div className="row card p-4 mt-4">
        <div className="col-md-10">
          {state.isLogin ? (
            <h1>Welcome User</h1>
          ) : (
            <h1>Please Login For Dashboard</h1>
          )}
          {state.isLogin ? (
            <button
              className="btn btn-danger m-2"
              onClick={() => dispatch({ type: 'LOGOUT' })}
            >
              Logout
            </button>
          ) : (
            <button
              className="btn btn-primary m-2"
              onClick={() => dispatch({ type: 'LOGIN' })}
            >
              Login
            </button>
              )}
        </div>
      </div>
    </div>
  );
};

export default AuthUserReducer