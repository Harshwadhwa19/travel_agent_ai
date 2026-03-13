import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import apiClient from "../../api/apiClient";
function AskLocalPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (input.trim()) {
  //     setMessages([...messages, { text: input, sender: 'User' }]);
  //     setInput('');
  //     setTimeout(() => {
  //       setMessages([...messages, { text: input, sender: 'User' }, { text: 'Thanks for your message!', sender: 'Bot' }]);
  //     }, 1000);
  //   }
  // };
  const handleSubmit = async (e, city) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage = { text: input, sender: "User" };
      setMessages([...messages, userMessage]);
      const currentInput = input;
      setInput("");
      try {
        const response = await apiClient.post('/ai/ask-local', {
            city: city,
            question: currentInput
        });
        
        const botMessage = {
          text: response.data.response || "Sorry, I could not process your request.",
          sender: "Bot",
        };
        setMessages([...messages, userMessage, botMessage]);
      } catch (error) {
        console.error("Error:", error);
        const botMessage = {
          text: "An error occurred. Please try again later.",
          sender: "Bot",
        };
        setMessages([...messages, userMessage, botMessage]);
      }
    }
  };

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const localArea = queryParams.get("place") || "Unknown Location";
  const localName = "A Locale";
  const handleBackClick = () => {
    navigate("/city-selection");
  };

  // Define your styles as JavaScript objects
  const styles = {
    chatContainer: {
      marginTop: "7rem",
      display: "flex",
      flexDirection: "column",
      height: "400px",
      width: "70rem",
      border: "1px solid #ccc",
      borderRadius: "8px",
      overflow: "hidden",
      background: "white",
      margin: "0 auto",
      marginBottom: "5rem",
    },
    messageContainer: {
      flex: 1,
      padding: "10px",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
    },
    message: {
      marginBottom: "10px",
      padding: "8px",
      borderRadius: "4px",
    },
    messageUser: {
      alignSelf: "flex-end",
      padding: "0.5rem",
      background: "rgb(255, 247, 225)",
      borderRadius: "30px",
    },
    messageBot: {
      padding: "0.5rem",
      borderRadius: "30px",
      alignSelf: "flex-start",
      background: "#ececec",
    },
    inputContainer: {
      padding: "10px",
      borderRadius: "10px",
      display: "flex",
      borderTop: "1px solid #ccc",
    },
    input: {
      flex: 1,
      backgroundColor: "rgb(242, 241, 241)",
      border: "none",
      padding: "10px",
      borderRadius: "30px",
    },
    button: {
      padding: "10px",
      border: "none",
      background: "#007bff",
      color: "white",
      cursor: "pointer",
    },
    submitButton: {
      backgroundColor: "black",
      color: "white",
      borderRadius: "0 10px 10px 0",
      padding: "15px",
      borderRadius: "40%",
      marginLeft: "10px",
    },
    submitButtonHover: {
      boxShadow: "2px 2px 5px grey",
      backgroundColor: "rgb(44, 41, 41)",
      transition: "background-color 0.2s",
    },
    localInfo: {
      padding: "10px",
      backgroundColor: "rgb(250, 241, 237)",
      maxHeight: "5rem",
      overflow: "hidden",
      display: "flex",
    },
    localName: {
      padding: "0",
      margin: "0",
      fontSize: "1.2rem",
      paddingLeft: "0.5rem",
      paddingTop: "0.4rem",
      fontWeight: "bold",
    },
    localArea: {
      color: "rgb(155, 150, 150)",
      padding: "0",
      margin: "0",
      marginLeft: "-55px",
      paddingTop: "0",
      fontSize: "0.8rem",
    },
    arrowIcon: {
      alignItems: "center",
      padding: "1rem",
      backgroundColor: "lightgray",
      borderRadius: "38%",
      cursor: "pointer",
    },

    arrowIconHover: {
      backgroundColor: "green",
      cursor: "pointer",
    },

    sendIcon: {
      borderRadius: "50%",
    },
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.localInfo}>
        <span
          className="material-symbols-outlined"
          style={styles.arrowIcon}
          onClick={handleBackClick}
        >
          arrow_back
        </span>
        <div>
          <p style={styles.localName}>{localName}</p>
          <p style={styles.localArea}>{localArea}</p>
        </div>
      </div>

      <div style={styles.messageContainer}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              ...(msg.sender === "User"
                ? styles.messageUser
                : styles.messageBot),
            }}
          >
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <form
        style={styles.inputContainer}
        onSubmit={(e) => handleSubmit(e, localArea)}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.submitButton}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              styles.submitButtonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor =
              styles.submitButton.backgroundColor)
          }
        >
          <span className="material-symbols-outlined" style={styles.sendIcon}>
            arrow_upward
          </span>
        </button>
      </form>
    </div>
  );
}
export default AskLocalPage;
