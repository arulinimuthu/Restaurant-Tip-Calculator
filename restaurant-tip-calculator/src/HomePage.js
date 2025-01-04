import React, { useState } from 'react';
import { auth } from './firebaseConfig';
import { signOut } from 'firebase/auth';

function HomePage() {
    const [subtotal, setSubtotal] = useState('');
    const [feedback, setFeedback] = useState({
      food: '',
      service: '',
      atmosphere: '',
      overall: '',
    });

    const handleLogout = () => {
        signOut(auth);
      };
    
      const handleFeedbackChange = (e) => {
        setFeedback({
          ...feedback,
          [e.target.name]: e.target.value,
        });
      };

      return (
        <div>
          <h1>Restaurant Tip Calculator</h1>
          <input
            type="number"
            placeholder="Subtotal of bill"
            value={subtotal}
            onChange={(e) => setSubtotal(e.target.value)}
          />
          <h2>User Experience</h2>
          <label>How was the food?
            <div>
              {["😃", "😊", "😐", "☹️", "😠"].map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => setFeedback({ ...feedback, food: emoji })}
                  style={{ margin: "5px", fontSize: "1.5rem" }}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </label>
          <label>How was your waiter/waitress?
            <div>
              {["😃", "😊", "😐", "☹️", "😠"].map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => setFeedback({ ...feedback, service: emoji })}
                  style={{ margin: "5px", fontSize: "1.5rem" }}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </label>
          <label>How was the restaurant atmosphere?
            <div>
              {["😃", "😊", "😐", "☹️", "😠"].map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => setFeedback({ ...feedback, atmosphere: emoji })}
                  style={{ margin: "5px", fontSize: "1.5rem" }}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </label>
          <label>Overall experience
            <div>
              {["😃", "😊", "😐", "☹️", "😠"].map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => setFeedback({ ...feedback, overall: emoji })}
                  style={{ margin: "5px", fontSize: "1.5rem" }}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </label>
          <button onClick={handleLogout}>Logout</button>
        </div>
      );

      


    }
    
  

  export default HomePage;