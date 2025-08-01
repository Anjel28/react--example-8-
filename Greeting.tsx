import React from 'react';

// Define the type for the component's props
interface GreetingProps {
  name: string;          // Required string parameter
  age?: number;          // Optional number parameter
  onSayHello: () => void; // Function parameter with no arguments
  onGreet: (message: string) => void; // Function parameter with string argument
}

const Greeting: React.FC<GreetingProps> = ({ 
  name, 
  age, 
  onSayHello, 
  onGreet 
}) => {
  const handleClick = () => {
    onSayHello();
    onGreet(`Hello from ${name}!`);
  };

  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old.</p>}
      <button onClick={handleClick}>Greet</button>
    </div>
  );
};

export default Greeting;