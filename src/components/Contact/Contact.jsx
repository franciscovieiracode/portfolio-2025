import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import styles from "./ContactStyles.module.css";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e1xccbk", // EmailJS Service ID (from dashboard)
        "template_ottdo4i", // Template ID (from dashboard)
        e.target, // The form element
        "wO13X8LHgX5mnaDXT" // User ID (from dashboard)
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);

          toast.success("Your email has been sent successfully!",{
            className: "custom-toast" 
          });

          e.target.reset();
        },
        (error) => {
          console.log("Error sending email:", error.text);
          toast.error("Sorry, there was an error sending your email.");
        }
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
      <ToastContainer />
    </section>
  );
}
