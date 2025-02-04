// This component is a dummy component and won't send any email to the server
// server.js contains the code for the server that will be used to send the email
// user need's to create a .env file to root directory and add email and password
import { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import "/src/assets/styles/Contact.css";

function ContactMe() {
  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiDimensions, setConfettiDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [messageLength, setMessageLength] = useState(0);

  const formRef = useRef(null);

  // Updates confetti dimensions on mount
  useEffect(() => {
    if (formRef.current) {
      setConfettiDimensions({
        width: formRef.current.offsetWidth,
        height: formRef.current.offsetHeight,
      });
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonText("Sending...");

    // Simulate sending message
    setTimeout(() => {
      setStatus({ type: "success", message: "Message sent!" });
      setShowConfetti(true);
      setButtonText("Send");
      setFormDetails(formInitialDetails);

      // Hide confetti after a delay
      setTimeout(() => {
        setShowConfetti(false);
        setStatus({});
      }, 5000);
    }, 1000);

    // Uncomment this section to enable actual email sending
    /*
    try {
      let response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      });

      setButtonText("Send");
      let result = await response.json();
      setFormDetails(formInitialDetails);

      if (response.ok) {
        setStatus({ type: "success", message: result.status });
      } else {
        setStatus({ type: "error", message: result.error });
      }
    } catch (error) {
      setButtonText("Send");
      setStatus({ type: error, message: "Failed to send message!" });
    }
      */
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    if (name === "message") {
      setMessageLength(value.length);
    }
  };

  const headerText = "Get In Touch";

  return (
    <div id="contact" className="contact-box">
      <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
        {showConfetti && (
          <Confetti
            width={confettiDimensions.width}
            height={confettiDimensions.height}
          />
        )}
        <h3 className="contact-header">
          {headerText.split("").map((char, index) => (
            <span
              key={index}
              className={char === " " ? "header-space" : "header-char"}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </h3>

        <div className="form-group">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formDetails.name}
              onChange={handleChange}
              maxLength="50"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formDetails.email}
              onChange={handleChange}
              maxLength="50"
              placeholder="your.email@example.com"
              required
            />
          </div>
        </div>
        <div className="message-container">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formDetails.message}
            onChange={handleChange}
            maxLength="1000"
            placeholder="This is a dummy form and won't send any email. You can contact me through linkedin :)"
            required
          ></textarea>
          <small className="char-counter">
            {messageLength}/1000 characters
          </small>
        </div>
        <div className="send-container">
          <button className="submit-btn" type="submit">
            {buttonText}
          </button>
          {status.message && (
            <p className={status.type === "success" ? "success" : "error"}>
              {status.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
