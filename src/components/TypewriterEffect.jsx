import React, { useRef, useState } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

function TypewriterEffect() {
  const typewriterRef = useRef(null);
  const typewriterInstanceRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const startTypewriter = () => {
    if (!inputValue.trim()) {
      return;
    }
    if (typewriterInstanceRef.current) {
      typewriterInstanceRef.current.stop();
      typewriterInstanceRef.current.deleteAll();
    }

    setDisplayValue(inputValue);

    setTimeout(() => {
      if (typewriterRef.current) {
        typewriterInstanceRef.current = new Typewriter(typewriterRef.current, {
          strings: [inputValue],
          autoStart: true,
          loop: true,
        });
      }
    }, 0);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      startTypewriter();
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <input
                type="text"
                name="sentence"
                placeholder="Type a sentence"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                style={{ 
                  width: "300px", 
                  alignSelf: 'center', 
                  marginTop: '2rem',
                  marginRight: '10px'
                }}
              />
              <button 
                onClick={startTypewriter}
                style={{
                  padding: '5px 15px',
                  cursor: 'pointer'
                }}
              >
                Type
              </button>
              <h1 
                ref={typewriterRef} 
                style={{
                  marginLeft: '3rem', 
                  marginRight: '3rem',
                  minHeight: '50px',
                  textAlign:'center'
                }}
              >
                {!displayValue && "..."}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypewriterEffect;