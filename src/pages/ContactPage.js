import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Thank you! Your message was sent successfully.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message: " + (data.message || "Try again later."));
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Network error. Please try again later.");
    }
  };

  return (
    <>
      <style>
        {`
          /* ========================
             ContactPage.css (Inline for self-containment)
             ======================== */
          .contact-page {
            padding-top: 80px;
            background-color: #f7f9fc;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }

          .contact-header {
            position: relative;
            height: 350px;
            background: url('https://placehold.co/1920x400/1a202c/ffffff?text=Contact+Us') no-repeat center center/cover;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            padding: 0 20px;
          }

          .contact-header .header-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
          }

          .contact-header .header-content {
            position: relative;
            z-index: 1;
            max-width: 800px;
          }

          .contact-form-section {
            padding: 4rem 2rem;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-grow: 1;
          }

          .contact-container {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            padding: 40px;
            max-width: 700px;
            width: 100%;
          }

          .contact-container h2 {
            font-size: 2rem;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 2rem;
            text-align: center;
            border-bottom: 2px solid #ff9100;
            padding-bottom: 1rem;
          }

          .contact-form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .form-group {
            display: flex;
            flex-direction: column;
          }

          .form-group label {
            font-size: 1rem;
            font-weight: 500;
            color: #374151;
            margin-bottom: 0.5rem;
          }

          .form-group input[type="text"],
          .form-group input[type="email"],
          .form-group textarea {
            padding: 12px 15px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            font-size: 1rem;
            color: #374151;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
            width: 100%;
          }

          .form-group input:focus,
          .form-group textarea:focus {
            outline: none;
            border-color: #ff9100;
            box-shadow: 0 0 0 3px rgba(255, 145, 0, 0.25);
          }

          .submit-btn {
            background-color: #0d1223;
            color: white;
            padding: 15px 25px;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;
            margin-top: 1rem;
            box-shadow: 0 4px 10px rgba(13, 18, 35, 0.2);
          }

          .submit-btn:hover {
            background-color: #ff9100;
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(255, 145, 0, 0.3);
          }

          .contact-info-section {
            background-color: #e0e8f0;
            padding: 4rem 2rem;
            text-align: center;
          }

          .contact-info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            max-width: 1000px;
            margin: 3rem auto 0;
          }

          .info-card {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
            padding: 2.5rem;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .info-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
          }

          @media (max-width: 768px) {
            .contact-header { height: 250px; }
            .contact-form-section { padding: 2.5rem 1rem; }
            .contact-container { padding: 25px; }
            .contact-info-section { padding: 2.5rem 1rem; }
            .contact-info-grid { grid-template-columns: 1fr; }
          }
        `}
      </style>

      <div className="contact-page">
        <header className="contact-header" data-aos="fade-in">
          <div className="header-overlay"></div>
          <div className="header-content"></div>
        </header>

        <section className="contact-form-section">
          <div className="contact-container">
            <h2 data-aos="fade-up">Send Us a Message</h2>
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </section>

        <section className="contact-info-section" data-aos="fade-up">
          <h2>Our Contact Information</h2>
          <p>You can also reach us directly through the following channels:</p>
          <div className="contact-info-grid">
            <div className="info-card" data-aos="fade-up" data-aos-delay="100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48px" height="48px">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <h3>Phone & WhatsApp</h3>
              <p><a href="tel:+254791755862">+254 791755862</a></p>
              <p>WhatsApp: <a href="https://wa.me/254711622650" target="_blank" rel="noopener noreferrer">+254 791755862</a></p>
            </div>
            <div className="info-card" data-aos="fade-up" data-aos-delay="200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48px" height="48px">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <h3>Email</h3>
              <p><a href="mailto:darrownzau19@gmail.com">darrownzau19@gmail.com</a></p>
            </div>
            <div className="info-card" data-aos="fade-up" data-aos-delay="300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48px" height="48px">
                <path d="M7.8 2h8.4C17.37 2 19 3.63 19 5.8v12.4c0 2.17-1.63 3.8-3.8 3.8H7.8C5.63 22 4 20.37 4 18.2V5.8C4 3.63 5.63 2 7.8 2zM12 17.5c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5zm5-9.5c.83 0 1.5-.67 1.5-1.5S17.83 6 17 6s-1.5.67-1.5 1.5.67 1.5 1.5 1.5z" />
              </svg>
              <h3>Social Media</h3>
              <p>Facebook: <a href="https://www.facebook.com/High-tech-Solar-Solutions-Accessories-Ltd" target="_blank" rel="noopener noreferrer">Raynetic SOLAR Solutions limited</a></p>
              <p>Instagram: <a href="https://www.instagram.com/hightech_solar_solution" target="_blank" rel="noopener noreferrer">Drrow Kimanthi Nzau</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;