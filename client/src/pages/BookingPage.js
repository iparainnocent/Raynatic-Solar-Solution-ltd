import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"; // Assuming AOS is still used for animations
import AOS from "aos";
import "./BookingPage.css"; // Link to the new CSS file

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log("Booking Request Submitted:", formData);
    alert("Your booking request has been sent! We will contact you shortly.");
    // Optionally clear the form or redirect
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    });
  };

  return (
    <div className="booking-page">
      <header className="booking-header" data-aos="fade-in">
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1>Book a Service</h1>
          <p>
            Schedule a consultation or service appointment with our experts.
          </p>
        </div>
      </header>

      <section className="booking-form-section">
        <div className="booking-container">
          <h2 data-aos="fade-up">Booking Request Form</h2>
          <form
            className="booking-form"
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
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service of Interest</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                <option value="">-- Select a Service --</option>
                <option value="Solar Panel Installation">
                  Solar Panel Installation
                </option>
                <option value="Battery Backup Systems">
                  Battery Backup Systems
                </option>
                <option value="System Maintenance & Repair">
                  System Maintenance & Repair
                </option>
                <option value="Solar Water Pumping">Solar Water Pumping</option>
                <option value="CCTV & Security Systems">
                  CCTV & Security Systems
                </option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="preferredDate">Preferred Date</label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="preferredTime">Preferred Time</label>
              <input
                type="time"
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Additional Message (optional)</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-booking-btn">
              Submit Booking Request
            </button>
          </form>
        </div>
      </section>

      <section className="booking-contact-cta" data-aos="zoom-in">
        <div className="booking-contact-content">
          <h2>Have Questions Before Booking?</h2>
          <p>Feel free to reach out to us directly for any inquiries.</p>
          <Link to="/contact" className="cta-btn-booking">
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
