import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"; // Keep this import if AOS is used elsewhere and correctly configured
import AOS from "aos";

// Placeholder images for team members
import teamMember1 from "../assets/IMG-20250804-WA0063.jpg"; // Example team member image
import teamMember2 from "../assets/IMG-20250804-WA0064.jpg"; // Example team member image
import teamMember3 from "../assets/IMG-20250804-WA0065.jpg"; // Example team member image

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <style>
        {`
          /* ========================
             AboutPage.css (Inline for self-containment)
             ======================== */
          .about-page {
            padding-top: 80px; /* Adjust based on Navbar height */
            background-color: #f7f9fc;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }

          /* ========================
             Header Section
             ======================== */
          .about-header {
            position: relative;
            height: 400px;
            background: url('https://placehold.co/1920x400/0d1223/ffffff?text=About+Us') no-repeat center center/cover;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            padding: 0 20px;
          }

          .about-header .header-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
          }

          .about-header .header-content {
            position: relative;
            z-index: 1;
            max-width: 800px;
          }

          .about-header h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          }

          .about-header p {
            font-size: 1.25rem;
            font-weight: 300;
            margin: 0 auto;
          }

          /* ========================
             Content Sections
             ======================== */
          .about-section {
            padding: 4rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
          }

          .about-section h2 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #0d1223;
            margin-bottom: 1.5rem;
            position: relative;
            padding-bottom: 10px;
          }

          .about-section h2::after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background-color: #ff9100;
            border-radius: 2px;
          }

          .about-section p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #4a5568;
            margin-bottom: 1.5rem;
          }

          .mission-vision-values {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
            margin-top: 3rem;
          }

          .mvv-card {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
            padding: 2.5rem;
            flex: 1;
            min-width: 280px;
            max-width: 350px;
            text-align: left;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .mvv-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
          }

          .mvv-card h3 {
            font-size: 1.8rem;
            font-weight: 600;
            color: #ff9100;
            margin-bottom: 1rem;
          }

          .mvv-card p {
            font-size: 1rem;
            color: #6b7280;
            line-height: 1.6;
            margin-bottom: 0;
          }

          /* ========================
             Why Choose Us Section
             ======================== */
          .why-choose-us {
            background-color: #e0e8f0;
            padding: 4rem 2rem;
            text-align: center;
          }

          .why-choose-us ul {
            list-style: none;
            padding: 0;
            margin-top: 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto;
          }

          .why-choose-us li {
            background-color: white;
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            font-size: 1.1rem;
            color: #374151;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 1rem;
            text-align: left;
          }

          .why-choose-us li svg {
            color: #ff9100;
            font-size: 1.8rem;
            flex-shrink: 0;
          }

          /* ========================
             Team Section
             ======================== */
          .team-section {
            padding: 4rem 2rem;
            text-align: center;
          }

          .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            max-width: 1000px;
            margin: 3rem auto 0;
          }

          .team-member-card {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
            padding: 1.5rem;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .team-member-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
          }

          .team-member-image {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 auto 1rem;
            border: 4px solid #ff9100;
            box-shadow: 0 0 0 5px rgba(255, 145, 0, 0.2);
          }

          .team-member-card h3 {
            font-size: 1.4rem;
            font-weight: 600;
            color: #0d1223;
            margin-bottom: 0.5rem;
          }

          .team-member-card p {
            font-size: 0.95rem;
            color: #6b7280;
            margin-bottom: 0;
          }

          /* ========================
             Contact CTA Section
             ======================== */
          .about-contact-cta {
            background-color: #0d1223;
            color: white;
            padding: 4rem 2rem;
            text-align: center;
          }

          .about-contact-content {
            max-width: 800px;
            margin: 0 auto;
          }

          .about-contact-content h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }

          .about-contact-content p {
            font-size: 1.25rem;
            margin-bottom: 2rem;
          }

          .cta-btn-about {
            display: inline-block;
            background-color: #ff9100;
            color: white;
            padding: 0.75rem 2rem;
            border-radius: 9999px; /* Fully rounded */
            font-weight: 600;
            text-decoration: none;
            transition: background-color 0.3s, transform 0.3s;
            box-shadow: 0 4px 10px rgba(255, 145, 0, 0.3);
          }

          .cta-btn-about:hover {
            background-color: #e68200;
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(255, 145, 0, 0.4);
          }

          /* ========================
             Responsive Adjustments
             ======================== */
          @media (max-width: 768px) {
            .about-header {
              height: 300px;
            }
            .about-header h1 {
              font-size: 2.5rem;
            }
            .about-header p {
              font-size: 1rem;
            }
            .about-section {
              padding: 2.5rem 1rem;
            }
            .about-section h2 {
              font-size: 2rem;
            }
            .mvv-card {
              padding: 1.5rem;
            }
            .mvv-card h3 {
              font-size: 1.5rem;
            }
            .why-choose-us ul {
              grid-template-columns: 1fr;
            }
            .team-grid {
              grid-template-columns: 1fr;
            }
            .about-contact-content h2 {
              font-size: 2rem;
            }
            .about-contact-content p {
              font-size: 1rem;
            }
          }
        `}
      </style>

      <div className="about-page">
        <header className="about-header" data-aos="fade-in">
          <div className="header-overlay"></div>
          <div className="header-content">
            <h1>About Cents</h1>
            <p>
              Your trusted partner in sustainable energy and advanced security
              solutions.
            </p>
          </div>
        </header>

        <section className="about-section" data-aos="fade-up">
          <h2>Our Story & Mission</h2>
          <p>
            At Cents, we believe in a future powered by clean energy and secured
            by innovative technology. Founded in [Year], our journey began with
            a commitment to provide reliable, affordable, and sustainable
            solutions to homes and businesses. We are dedicated to empowering
            our clients with energy independence and peace of mind through our
            expertise in solar installations and cutting-edge security systems.
          </p>
          <div className="mission-vision-values">
            <div className="mvv-card" data-aos="fade-up" data-aos-delay="100">
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional solar and security solutions that enhance
                the quality of life, reduce environmental impact, and provide
                lasting value to our customers.
              </p>
            </div>
            <div className="mvv-card" data-aos="fade-up" data-aos-delay="200">
              <h3>Our Vision</h3>
              <p>
                To be the leading provider of integrated energy and security
                systems, driving innovation and sustainability across the
                region.
              </p>
            </div>
            <div className="mvv-card" data-aos="fade-up" data-aos-delay="300">
              <h3>Our Values</h3>
              <p>
                Integrity, Innovation, Customer Focus, Sustainability, and
                Excellence. These values guide every decision and action we
                take.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section why-choose-us" data-aos="fade-up">
          <h2>Why Choose Us?</h2>
          <p>
            Choosing Cents means partnering with a team that is committed to
            your success and satisfaction. Here’s what sets us apart:
          </p>
          <ul>
            <li data-aos="fade-right" data-aos-delay="100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24px"
                height="24px"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Expert Team: Certified and experienced professionals.
            </li>
            <li data-aos="fade-right" data-aos-delay="200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24px"
                height="24px"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Quality Products: We use only the highest-grade materials.
            </li>
            <li data-aos="fade-right" data-aos-delay="300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24px"
                height="24px"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Custom Solutions: Tailored to your unique needs.
            </li>
            <li data-aos="fade-right" data-aos-delay="400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24px"
                height="24px"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Customer Satisfaction: Your peace of mind is our priority.
            </li>
          </ul>
        </section>

        <section className="about-section team-section" data-aos="fade-up">
          <h2>Meet Our Team</h2>
          <p>
            Our dedicated team of professionals is committed to delivering
            excellence in every project.
          </p>
          <div className="team-grid">
            <div
              className="team-member-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src={teamMember1}
                alt="Team Member 1"
                className="team-member-image"
              />
              <h3>Jane Doe</h3>
              <p>CEO & Lead Engineer</p>
            </div>
            <div
              className="team-member-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src={teamMember2}
                alt="Team Member 2"
                className="team-member-image"
              />
              <h3>John Smith</h3>
              <p>Head of Operations</p>
            </div>
            <div
              className="team-member-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img
                src={teamMember3}
                alt="Team Member 3"
                className="team-member-image"
              />
              <h3>Emily White</h3>
              <p>Customer Relations Manager</p>
            </div>
          </div>
        </section>

        <section className="about-contact-cta" data-aos="zoom-in">
          <div className="about-contact-content">
            <h2>Ready to Transform Your Home or Business?</h2>
            <p>
              Contact us today to discuss your project and get a free
              consultation.
            </p>
            <Link to="/contact" className="cta-btn-about">
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
