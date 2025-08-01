import React from 'react'


interface IPROPS {
  text: string;
  onClick: () => void;
}


let customer: React.FC<IPROPS> = ({text,  onClick}) =>{
  return(
    <div>
      <h3>{text}</h3>
       <button onClick={onClick} >
      {text}
    </button>
         
    </div>
  )
}
export default customer;
/*type IPROPS = {
  text: string;
  onClick: () => void;
  disabled?: boolean; // Optional prop
};

const Button: React.FC<IPROPS> = ({ text, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;*/




// simple functional components
/*interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;*/

/*interface IPROPS{
  name:String;
  tittle:String;
  
}

let Customer:React.FC<IPROPS> = ({name,tittle, }) =>{
return(
    <div>
        <h1>Customer Components</h1>
        <h4>Name: {name}</h4>
        <h4>Tittle: {tittle}</h4>
        
    </div>
)
}
export default Customer;*/
//props
/*</Customer>interface MyButtonProps {
 
    title: string;
  disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
  return (
    <button disabled={disabled}>{title}</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a disabled button" disabled={true}/>
    </div>
  );
}*/

//usestate hook(reducer)
/*import {useReducer} from 'react';

interface State {
   count: number 
};

type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] }

  const initialState: State = { count: 0 };
  function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
   const addSix = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });


  return (
    <div>
      <h1>Welcome to my counter</h1>

      <p>Count: {state.count}</p>
      <button onClick={addSix}>Add 6</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}*/

//usecontext example
/*import { createContext, useContext, useState } from 'react';

type Theme = "light" | "dark" | "system";
const ThemeContext = createContext<Theme>("system");

const useGetTheme = () => useContext(ThemeContext);

export default function MyApp() {
  const [theme, setTheme] = useState<Theme>('light');
 return (
    <ThemeContext value={theme}>
      <MyComponent />
    </ThemeContext>
  )
}
function MyComponent() {
  const theme = useGetTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  )
}*/

