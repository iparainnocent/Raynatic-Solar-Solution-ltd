import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ServicesPage.css";
import "aos/dist/aos.css";
import AOS from "aos";

// Import service images from your assets directory
import solarPanelsImage from "../assets/solar panel 550w.jpg";
import inverterImage from "../assets/inverter 2.jpg";
import solarWaterHeaterImage from "../assets/solar water heater 1.jpeg";
import waterPumpContollerInstallationImage from "../assets/Water pump controller Installation.jpg";
import solarFloodLightImage from "../assets/Solar flood light.jpg";

const services = [
  {
    title: "Solar Panel Installation",
    description:
      "We provide professional installation of high-quality solar panel systems for both residential and commercial properties. Our team ensures optimal placement and seamless integration to maximize energy efficiency.",
    image: solarPanelsImage,
    link: "/products",
  },
  {
    title: "Inverters & Batteries",
    description:
      "Our reliable inverters and battery backup systems ensure uninterrupted power supply. We offer a range of solutions to meet your specific energy storage needs.",
    image: inverterImage,
    link: "/products",
  },
  {
    title: "Solar Water Heaters",
    description:
      "Reduce your energy bills with our efficient solar water heating solutions. We install and maintain systems that provide hot water using clean, renewable energy.",
    image: solarWaterHeaterImage,
    link: "/products",
  },
  {
    title: "Water pump controller Installation",
    description:
      "Boost the performance and reliability of your water pumping system with our 5.5 kW Pumping Inverter Water Pump Controller. Designed for efficiency and durability, this advanced controller automatically regulates your pump’s speed and operation to ensure a steady water supply while reducing energy consumption.",

    image: waterPumpContollerInstallationImage,
    link: "/products",
  },
  {
    title: "Solar flood light",
    description:
      "Protect your property with our advanced solar-powered CCTV cameras and security systems. Our solutions offer reliable surveillance even during power outages.",
    image: solarFloodLightImage,
    link: "/products",
  },
];

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services-page">
      <header className="services-header" data-aos="fade-in">
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1>Our Services</h1>
          <p>
            Delivering cutting-edge solar and security solutions for a
            sustainable future.
          </p>
        </div>
      </header>

      <section className="services-grid-section">
        <div className="services-container">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="service-link">
                  View Products <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-cta" data-aos="zoom-in">
        <div className="services-cta-content">
          <h2>Ready to Transform Your Energy?</h2>
          <p>
            Contact us today for a free consultation and let's find the perfect
            solution for you.
          </p>
          <Link to="/contact" className="cta-btn-service">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
