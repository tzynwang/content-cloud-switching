import React, { memo, useState, useEffect } from 'react';
import cn from 'classnames';
import './App.css';

enum STEPS {
  ONE = 'ONE',
  TWO = 'TWO',
  THREE = 'THREE',
}

function App() {
  /* States */
  const [step, setStep] = useState<STEPS>(STEPS.ONE);

  /* Functions */
  const handleStepChange = (currentStep: STEPS) => () => {
    setStep(currentStep);
  };

  /* Hooks */
  useEffect(() => {}, [step]);

  /* Main */
  return (
    <div className="App">
      <div className="Wrapper">
        <div className={cn('container', `container${step}`)}>
          <div className="item">
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
          </div>
          <div className="item">
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
          </div>
          <div className="item">
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
            <span className="tag">標籤</span>
          </div>
        </div>
      </div>
      <div className="ButtonWrapper">
        <button
          className={cn('stepButton', step === STEPS.ONE && 'currentButton')}
          onClick={handleStepChange(STEPS.ONE)}
        ></button>
        <button
          className={cn('stepButton', step === STEPS.TWO && 'currentButton')}
          onClick={handleStepChange(STEPS.TWO)}
        ></button>
        <button
          className={cn('stepButton', step === STEPS.THREE && 'currentButton')}
          onClick={handleStepChange(STEPS.THREE)}
        ></button>
      </div>
    </div>
  );
}

export default memo(App);
