import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

const ThankYouPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <style>
        {`
          /* ========================
             ThankYouPage.css (Inline for self-containment)
             ======================== */
          .thank-you-page {
            padding-top: 80px; /* Adjust based on Navbar height */
            background-color: #f7f9fc;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 20px;
          }

          .thank-you-content {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            padding: 50px 30px;
            max-width: 700px;
            width: 100%;
          }

          .thank-you-content svg {
            color: #28a745; /* Green for success icon */
            font-size: 5rem;
            margin-bottom: 20px;
          }

          .thank-you-content h1 {
            font-size: 3rem;
            font-weight: 700;
            color: #0d1223;
            margin-bottom: 15px;
          }

          .thank-you-content p {
            font-size: 1.1rem;
            line-height: 1.6;
            color: #4a5568;
            margin-bottom: 25px;
          }

          .thank-you-buttons {
            display: flex;
            flex-direction: column;
            gap: 15px;
            max-width: 300px;
            margin: 0 auto;
          }

          .thank-you-btn {
            padding: 12px 25px;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            display: block; /* Make buttons block level for full width */
          }

          .thank-you-btn-primary {
            background-color: #0d1223; /* Dark button */
            color: white;
            border: 2px solid #0d1223;
          }

          .thank-you-btn-primary:hover {
            background-color: #ff9100; /* Accent color on hover */
            border-color: #ff9100;
            transform: translateY(-2px);
          }

          .thank-you-btn-secondary {
            background-color: transparent;
            color: #0d1223;
            border: 2px solid #0d1223;
          }

          .thank-you-btn-secondary:hover {
            background-color: #e0e8f0;
            transform: translateY(-2px);
          }

          /* ========================
             Responsive Adjustments
             ======================== */
          @media (max-width: 768px) {
            .thank-you-content {
              padding: 30px 20px;
            }
            .thank-you-content h1 {
              font-size: 2.5rem;
            }
            .thank-you-content p {
              font-size: 1rem;
            }
            .thank-you-buttons {
              max-width: 90%;
            }
          }

          @media (max-width: 480px) {
            .thank-you-content h1 {
              font-size: 2rem;
            }
            .thank-you-content svg {
              font-size: 4rem;
            }
            .thank-you-btn {
              padding: 10px 20px;
              font-size: 0.9rem;
            }
          }
        `}
      </style>

      <div className="thank-you-page" data-aos="fade-in">
        <div className="thank-you-content">
          {/* Checkmark SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="80px"
            height="80px"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          <h1>Thank You for Your Order!</h1>
          <p>
            Your order has been successfully placed and an email confirmation
            with details has been sent to your inbox. We appreciate your
            business!
          </p>
          <div className="thank-you-buttons">
            <Link
              to="/products"
              className="thank-you-btn thank-you-btn-primary"
            >
              Continue Shopping
            </Link>
            <Link to="/" className="thank-you-btn thank-you-btn-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
