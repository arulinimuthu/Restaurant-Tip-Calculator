import React, { useEffect, useState } from 'react';
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

      const [tipAmount, setTipAmount] = useState(0);

      useEffect(() => {
        if (Object.values(feedback).every((val) => val)) {
          const emojiToTipMap = {
            '😃': 15,
            '😊': 10,
            '😐': 5,
            '☹️': 2,
            '😠': 0,
          };
          const averageTip =
            (emojiToTipMap[feedback.food] +
              emojiToTipMap[feedback.service] +
              emojiToTipMap[feedback.atmosphere] +
              emojiToTipMap[feedback.overall]) /
            4;
          setTipAmount(((subtotal * averageTip) / 100).toFixed(2));
        }
      }, [feedback, subtotal]);


      return (
        <div>
          <h1>Restaurant Tip Advisor</h1>
          <input
            type="number"
            placeholder="Subtotal of bill"
            value={subtotal}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 0) setSubtotal(value);
            }}
          />
          <h2>User Experience</h2>
          <label>How was the food?
            <div>
              {["😃", "😊", "😐", "☹️", "😠"].map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => setFeedback({ ...feedback, food: emoji })}
                  style={{ margin: "5px", fontSize: "1.5rem",  backgroundColor: feedback.food === emoji ? "lightblue" : ""}}
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
                  style={{ margin: "5px", fontSize: "1.5rem",  backgroundColor: feedback.service === emoji ? "lightblue" : ""}}
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
                  style={{ margin: "5px", fontSize: "1.5rem",  backgroundColor: feedback.atmosphere === emoji ? "lightblue" : ""}}
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
                  style={{ margin: "5px", fontSize: "1.5rem",  backgroundColor: feedback.overall === emoji ? "lightblue" : ""}}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </label>
          <h3>
            Tip Amount: ${tipAmount}
          </h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      );

      


    }
    
  

  export default HomePage;