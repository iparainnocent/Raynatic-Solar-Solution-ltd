import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import featuredProduct1 from "../assets/inverter 2.jpg";
import featuredProduct2 from "../assets/solar panel 550w.jpg";

// Import images and video for the home page sections
import heroBackground from "../assets/background-video.mp4";
import solarService from "../assets/solar installation.jpg";
import securityService from "../assets/cctv flood light.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <style>
        {`
          /* ========================
             HomePage.css (Inline for self-containment)
             ======================== */
          .home-page {
            padding-top: 80px; /* Adjust based on Navbar height */
            background-color: #f7f9fc;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }

          /* ========================
             Hero Section
             ======================== */
          .hero-section {
            position: relative;
            height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            padding: 0 20px;
            overflow: hidden;
          }

          .hero-video {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: translate(-50%, -50%);
            z-index: -2;
          }

          .hero-video-fallback {
            display: none;
          }

          .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            z-index: -1;
          }

          .hero-content {
            position: relative;
            z-index: 1;
            max-width: 900px;
          }

          .hero-content h1 {
            font-size: 2rem;
            font-weight: 800;
            margin-bottom: 1rem;
            text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
            line-height: 1.2;
          }

          .hero-content p {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: 2.5rem;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
          }

          .hero-buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
          }

          .hero-btn {
            padding: 15px 35px;
            border-radius: 9999px;
            font-size: 1.1rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }

          .hero-btn-primary {
            background-color: #ff9100;
            color: white;
            border: 2px solid #ff9100;
          }

          .hero-btn-primary:hover {
            background-color: #e68200;
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          }

          .hero-btn-secondary {
            background-color: transparent;
            color: white;
            border: 2px solid white;
          }

          .hero-btn-secondary:hover {
            background-color: rgba(255, 255, 255, 0.1);
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          }

          /* ========================
             Sections General Styling
             ======================== */
          .section-heading {
            font-size: 2.8rem;
            font-weight: 700;
            color: #0d1223;
            margin-bottom: 1.5rem;
            text-align: center;
            position: relative;
            padding-bottom: 10px;
          }

          .section-heading::after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            width: 100px;
            height: 5px;
            background-color: #ff9100;
            border-radius: 2px;
          }

          .section-paragraph {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #4a5568;
            max-width: 800px;
            margin: 0 auto 3rem;
            text-align: center;
          }

          /* ========================
             Services Section
             ======================== */
          .services-overview-section {
            padding: 4rem 2rem;
            background-color: #f0f4f8;
            text-align: center;
          }

          .service-cards-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
            margin-top: 3rem;
          }

          .service-card-home {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
            overflow: hidden;
            flex: 1;
            min-width: 280px;
            max-width: 380px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .service-card-home:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
          }

          .service-card-home img {
            width: 100%;
            height: 220px;
            object-fit: cover;
          }

          .service-card-home-content {
            padding: 25px;
          }

          .service-card-home-content h3 {
            font-size: 1.8rem;
            font-weight: 600;
            color: #0d1223;
            margin-bottom: 10px;
          }

          .service-card-home-content p {
            font-size: 1rem;
            color: #6b7280;
            line-height: 1.6;
            margin-bottom: 20px;
          }

          .service-card-home-content .learn-more-btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #ff9100;
            color: white;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 500;
            transition: background-color 0.3s ease;
          }

          .service-card-home-content .learn-more-btn:hover {
            background-color: #e68200;
          }

          /* ========================
             Featured Products Section
             ======================== */
          .featured-products-section {
            padding: 4rem 2rem;
            background-color: #fff;
            text-align: center;
          }

          .product-cards-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
            margin-top: 3rem;
          }

          .product-card-home {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
            overflow: hidden;
            flex: 1;
            min-width: 280px;
            max-width: 380px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .product-card-home:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
          }

          .product-card-home img {
            width: 100%;
            height: 220px;
            object-fit: cover;
          }

          .product-card-home-content {
            padding: 25px;
          }

          .product-card-home-content h3 {
            font-size: 1.8rem;
            font-weight: 600;
            color: #0d1223;
            margin-bottom: 10px;
          }

          .product-card-home-content p {
            font-size: 1rem;
            color: #6b7280;
            line-height: 1.6;
            margin-bottom: 15px;
          }

          .product-card-home-content .price {
            font-size: 1.4rem;
            font-weight: 700;
            color: #ff9100;
            margin-bottom: 20px;
            display: block;
          }

          .product-card-home-content .view-product-btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #0d1223;
            color: white;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 500;
            transition: background-color 0.3s ease;
          }

          .product-card-home-content .view-product-btn:hover {
            background-color: #ff9100;
          }

          /* ========================
             Call to Action (CTA) Section
             ======================== */
          .home-cta-section {
            background-color: #0d1223;
            color: white;
            padding: 4rem 2rem;
            text-align: center;
          }

          .home-cta-content {
            max-width: 800px;
            margin: 0 auto;
          }

          .home-cta-content h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }

          .home-cta-content p {
            font-size: 1.25rem;
            margin-bottom: 2rem;
          }

          .cta-btn-home {
            display: inline-block;
            background-color: #ff9100;
            color: white;
            padding: 0.75rem 2rem;
            border-radius: 9999px;
            font-weight: 600;
            text-decoration: none;
            transition: background-color 0.3s, transform 0.3s;
            box-shadow: 0 4px 10px rgba(255, 145, 0, 0.3);
          }

          .cta-btn-home:hover {
            background-color: #e68200;
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(255, 145, 0, 0.4);
          }

          /* ========================
             Responsive Adjustments
             ======================== */
          @media (max-width: 768px) {
            .hero-video {
              display: none;
            }
            .hero-video-fallback {
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: url('../assets/hero-mobile.jpg') center center / cover no-repeat;
              z-index: -2;
            }
            .hero-section {
              height: 60vh;
            }
            .hero-content h1 {
              font-size: 2rem;
            }
            .hero-content p {
              font-size: 1.1rem;
            }
            .hero-buttons {
              flex-direction: column;
              gap: 15px;
            }
            .hero-btn {
              width: 80%;
              margin: 0 auto;
            }
          }
        `}
      </style>

      <div className="home-page">
        <header className="hero-section" data-aos="fade-in">
          {/* Video Background */}
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src={heroBackground} type="video/mp4" />
          </video>

          {/* Mobile fallback image */}
          <div className="hero-video-fallback"></div>

          <div className="hero-overlay"></div>

          <div className="hero-content">
            <h1>Empowering Your Future with Sustainable Energy & Security</h1>
            <p>
              Raynetic Solar solutions provides cutting-edge solar and security
              solutions for homes and businesses, ensuring reliability,
              efficiency, and peace of mind.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="hero-btn hero-btn-primary">
                Explore Products
              </Link>
              <Link to="/contact" className="hero-btn hero-btn-secondary">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </header>

        <section className="services-overview-section">
          <h2 className="section-heading" data-aos="fade-up">
            Our Core Services
          </h2>
          <p
            className="section-paragraph"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            From comprehensive solar installations to advanced security systems,
            we offer a full spectrum of services tailored to your needs.
          </p>
          <div className="service-cards-container">
            <div
              className="service-card-home"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={solarService} alt="Solar Panel Installation" />
              <div className="service-card-home-content">
                <h3>Solar Panel Installation</h3>
                <p>
                  Professional installation of high-efficiency solar panels for
                  residential and commercial properties.
                </p>
                <Link to="/services" className="learn-more-btn">
                  Learn More
                </Link>
              </div>
            </div>
            <div
              className="service-card-home"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img src={securityService} alt="CCTV & Security Systems" />
              <div className="service-card-home-content">
                <h3>CCTV & Security Systems</h3>
                <p>
                  State-of-the-art surveillance and security solutions to
                  protect your home or business.
                </p>
                <Link to="/services" className="learn-more-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-products-section">
          <h2 className="section-heading" data-aos="fade-up">
            Featured Products
          </h2>
          <p
            className="section-paragraph"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Discover our top-selling products designed for performance,
            durability, and value.
          </p>
          <div className="product-cards-container">
            <div
              className="product-card-home"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={featuredProduct1} alt="SRNE Hybrid Inverter" />
              <div className="product-card-home-content">
                <h3>SRNE Hybrid Inverter</h3>
                <p>
                  Advanced inverter for seamless power management and battery
                  charging.
                </p>
                <span className="price">KSh 45,000</span>
                <Link to="/products" className="view-product-btn">
                  View Product
                </Link>
              </div>
            </div>
            <div
              className="product-card-home"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img src={featuredProduct2} alt="Monocrystalline Solar Panel" />
              <div className="product-card-home-content">
                <h3>Monocrystalline Solar Panel</h3>
                <p>
                  High-efficiency panels for maximum energy capture, built to
                  last.
                </p>
                <span className="price">KSh 15,000</span>
                <Link to="/products" className="view-product-btn">
                  View Product
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="home-cta-section" data-aos="zoom-in">
          <div className="home-cta-content">
            <h2>Ready to Start Your Sustainable Journey?</h2>
            <p>
              Connect with our experts today for a personalized consultation and
              a free, no-obligation quote.
            </p>
            <Link to="/contact" className="cta-btn-home">
              Contact Us Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
