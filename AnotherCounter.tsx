import React, { useState } from 'react';

interface ICounterState {
  value: number;
}

interface ICounterProps {
  startValue?: number;
  incrementStep?: number;
}

const AnotherCounter: React.FC<ICounterProps> = ({ 
  startValue = 5, 
  incrementStep = 2 
}) => {
  const [counter, setCounter] = useState<ICounterState>({ value: startValue });

  const increase = () => {
    setCounter({ value: counter.value + incrementStep });
  }

  const decrease = () => {
    setCounter({ value: counter.value - incrementStep });
  }

  const reset = () => {
    setCounter({ value: startValue });
  }

  return (
    <div className="container mt-4">
      <h1>Alternative Counter Component</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <h3 className="display-4 mb-4">{counter.value}</h3>
              
              <div className="btn-group">
                <button 
                  className="btn btn-primary"
                  onClick={increase}
                >
                  Increase (+{incrementStep})
                </button>
                
                <button 
                  className="btn btn-secondary"
                  onClick={reset}
                >
                  Reset 
                </button>
                
                <button 
                  className="btn btn-danger"
                  onClick={decrease}
                >
                  Decrease (-{incrementStep})
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnotherCounter;