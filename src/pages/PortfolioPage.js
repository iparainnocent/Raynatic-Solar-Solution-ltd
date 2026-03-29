import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Import all videos from your assets
import largeScaleSolar from "../assets/large-scale-solar-panels-installation-project.mp4";
import solarInstallation from "../assets/solar-installation-project.mp4";
import waterPump from "../assets/water-pump-solar-insatllation.mp4";
import video1 from "../assets/WhatsApp Video 2026-03-08 at 21.21.25.mp4";
import video2 from "../assets/WhatsApp Video 2026-03-08 at 21.22.40.mp4";
import video3 from "../assets/WhatsApp Video 2026-03-08 at 21.23.34.mp4";
import video4 from "../assets/WhatsApp Video 2026-03-08 at 21.25.04.mp4";
import video5 from "../assets/WhatsApp Video 2026-03-08 at 21.27.02.mp4";
import video6 from "../assets/WhatsApp Video 2026-03-08 at 21.28.10.mp4";
import video7 from "../assets/WhatsApp Video 2026-03-08 at 21.28.41.mp4";
import video8 from "../assets/WhatsApp Video 2026-03-08 at 21.28.57.mp4";
import video9 from "../assets/WhatsApp Video 2026-03-08 at 21.29.12.mp4";
import video10 from "../assets/WhatsApp Video 2026-03-08 at 21.29.43.mp4";
import video11 from "../assets/WhatsApp Video 2026-03-08 at 21.30.28.mp4";
import video12 from "../assets/WhatsApp Video 2026-03-08 at 21.31.54.mp4";
import video13 from "../assets/WhatsApp Video 2026-03-08 at 21.32.40.mp4";
import video14 from "../assets/WhatsApp Video 2026-03-08 at 21.33.05.mp4";
import video15 from "../assets/WhatsApp Video 2026-03-08 at 21.33.16.mp4";
import video16 from "../assets/WhatsApp Video 2026-03-08 at 21.34.52.mp4";
import video17 from "../assets/WhatsApp Video 2026-03-08 at 21.35.15.mp4";
import video18 from "../assets/WhatsApp Video 2026-03-08 at 21.37.00 (1).mp4";
import vida from "../assets/vida.mp4";

// Portfolio items array
const portfolioItems = [
  {
    id: 1,
    title: "Large-Scale Solar Panel Installation",
    description:
      "A comprehensive solar panel installation project showcasing a commercial building setup from start to finish.",
    content: largeScaleSolar,
    type: "video",
  },
  {
    id: 2,
    title: "Residential Solar Installation",
    description:
      "Full rooftop solar system for a modern family home, including a 5kW inverter and a 10kWh battery backup.",
    content: solarInstallation,
    type: "video",
  },
  {
    id: 3,
    title: "Water Pump Solar Installation",
    description:
      "Off-grid solar solution for a rural farm, powering a submersible water pump for irrigation and livestock.",
    content: waterPump,
    type: "video",
  },
  {
    id: 4,
    title: "High volatage battery installation",
    description:
      "High-voltage battery installation for a solar energy system, providing efficient energy storage and reliable power supply for homes or businesses, ensuring stable performance, improved energy efficiency, and continuous electricity even during power outages",
    content: video1,
    type: "video",
  },
  {
    id: 5,
    title: "Installation of 30kw Hour system",
    description:
      "Installation of a 30 kWh solar battery storage system, designed to store energy generated from solar panels and provide reliable, efficient power for homes, businesses, or farms. This system ensures continuous electricity supply, improved energy independence, and dependable backup power during grid outages.",
    content: video2,
    type: "video",
  },
  {
    id: 6,
    title: "125kw system with abattery storage of 225kwh Installation",
    description:
      "Installation of a 125 kW solar power system with a 225 kWh battery storage system, designed to generate and store large amounts of solar energy for reliable and efficient power supply. This solution is ideal for commercial facilities, farms, or large properties, providing energy independence, reduced electricity costs, and continuous power even during grid outages.",
    content: video3,
    type: "video",
  },
  {
    id: 7,
    title: "Water pump system installation",
    description:
      "Water pump system installation for solar-powered irrigation, designed to provide a reliable and efficient water supply for farms, livestock, or rural properties. The system uses solar energy to power the pump, ensuring sustainable water delivery, reduced energy costs, and dependable operation even in off-grid locations.",
    content: video4,
    type: "video",
  },
  {
    id: 8,
    title: "Large scale water pump system project",
    description:
      "Large-scale water pump system project for efficient water supply and irrigation, designed to deliver reliable and high-capacity water distribution for farms, communities, or commercial operations. The system ensures consistent performance, improved productivity, and sustainable water management.",
    content: video5,
    type: "video",
  },
  {
    id: 9,
    title: "water pump system project ",
    description:
      "Water pump system project designed to provide efficient and reliable water supply for irrigation, livestock, or domestic use. The system ensures consistent water distribution, improved productivity, and sustainable operation, especially when integrated with solar power for energy efficiency.",
    content: video6,
    type: "video",
  },
  {
    id: 10,
    title: "1 MW Grid-tie solar installation",
    description:
      "1 MW Grid-Tie Solar Installation designed to generate clean, renewable energy and feed it directly into the electrical grid. This large-scale solar project delivers high-efficiency power generation, reduces electricity costs, supports sustainability goals, and provides a reliable, environmentally friendly energy solution for commercial or industrial operations..",
    content: video7,
    type: "video",
  },
  {
    id: 11,
    title: "250 KW  GRID-TIE System",
    description:
      "250 kW Grid-Tie Solar System installation designed to generate renewable energy and supply it directly to the grid. Ideal for commercial or industrial applications, this system ensures high-efficiency power generation, reduced electricity costs, and a reliable, sustainable energy solution.",
    content: video8,
    type: "video",
  },
  {
    id: 12,
    title: "50KW High voltage batteries intallation",
    description:
      "50 kW High-Voltage Battery Installation, designed to store large amounts of energy and provide reliable, efficient power for homes, businesses, or industrial applications. This system ensures continuous electricity supply, improves energy efficiency, and offers dependable backup during power outages.",
    content: video9,
    type: "video",
  },
  {
    id: 13,
    title: "1 MW System powered by 125kw inverters",
    description:
      "1 MW Solar Power System powered by 125 kW inverters, designed for large-scale commercial or industrial energy generation. This system delivers high-efficiency solar power, seamless grid integration, and reliable, continuous electricity, optimizing energy output and reducing operational costs.",
    content: video10,
    type: "video",
  },
  {
    id: 14,
    title: "12.6KW Solar array installation",
    description:
      "12.6 kW Solar Array Installation, designed to harness solar energy for homes or small businesses. This system provides efficient, renewable power, reduces electricity costs, and ensures a reliable, sustainable energy supply, with the potential for grid-tied or off-grid operation.",
    content: video11,
    type: "video",
  },
  {
    id: 15,
    title:
      "Site previewing before commissioning  and handing over a 1MW system at Arthi river",
    description:
      "Site preview and inspection before commissioning and handover of a 1 MW solar system at Arthi River, ensuring all equipment, connections, and safety measures are properly installed. This step guarantees optimal system performance, compliance with standards, and a smooth transition to full operational use.",
    content: video12,
    type: "video",
  },
  {
    id: 16,
    title: "50KW System installation",
    description:
      "50 kW Solar System Installation, designed to provide reliable and efficient renewable energy for commercial, industrial, or large residential applications. The system ensures reduced electricity costs, continuous power supply, and optimized energy performance for sustainable operations.",
    content: video13,
    type: "video",
  },
  {
    id: 17,
    title: "5Kwh system with a 6kw inverter installation",
    description:
      "5 kWh Solar Battery System with a 6 kW Inverter Installation, designed to store and supply energy efficiently for homes or small businesses. This setup provides reliable backup power, optimizes solar energy use, reduces electricity costs, and ensures continuous, sustainable electricity supply.",
    content: video14,
    type: "video",
  },
  {
    id: 18,
    title:
      "3.48kwp solar installation charging a 5kw lithium battery for 4hours",
    description:
      "3.48 kWp Solar Installation charging a 5 kW lithium battery for approximately 4 hours, designed to harness solar energy efficiently and store it for reliable use. This system provides sustainable power, improves energy independence, and ensures a stable electricity supply for residential or small-scale applications.",
    content: video15,
    type: "video",
  },
  {
    id: 19,
    title: "500kw Grid-tie system installation",
    description:
      "500 kW Grid-Tie Solar System installation designed to generate large-scale renewable energy and supply it directly to the electrical grid. This system delivers high-efficiency power production, reduces electricity costs, and supports sustainable energy use for commercial or industrial facilities.",
    content: video16,
    type: "video",
  },
  {
    id: 20,
    title: "Water pumping system installation",
    description:
      "Water Pumping System Installation designed to provide reliable and efficient water supply for irrigation, livestock, or domestic use. The system ensures consistent water delivery, improved productivity, and sustainable operation, especially when powered by solar energy.",
    content: video17,
    type: "video",
  },
  {
    id: 21,
    title: "10kwh system installation",
    description: "10 kWh Solar Battery System Installation designed to store solar energy and provide reliable power for homes or small businesses. This system improves energy efficiency, ensures backup power during outages, and supports a stable and sustainable electricity supply.",
    content: video18,
    type: "video",
  },
  {
    id: 22,
    title: "Completed Project Video",
    description:
      "A short video showcasing a recent large-scale solar project from start to finish.",
    content: vida,
    type: "video",
  },
];

const PortfolioPage = () => {
  useEffect(() => {
    const aosCssLink = document.createElement("link");
    aosCssLink.href = "https://unpkg.com/aos@2.3.1/dist/aos.css";
    aosCssLink.rel = "stylesheet";
    aosCssLink.id = "aos-css";
    document.head.appendChild(aosCssLink);

    const aosScript = document.createElement("script");
    aosScript.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
    aosScript.id = "aos-script";
    aosScript.onload = () => {
      if (window.AOS) window.AOS.init({ duration: 1000 });
    };
    document.body.appendChild(aosScript);

    return () => {
      const existingAosCss = document.getElementById("aos-css");
      if (existingAosCss) document.head.removeChild(existingAosCss);
      const existingAosScript = document.getElementById("aos-script");
      if (existingAosScript) document.body.removeChild(existingAosScript);
    };
  }, []);

  const handleMouseEnter = (e) => {
    if (e.target.tagName === "VIDEO") e.target.play();
  };

  const handleMouseLeave = (e) => {
    if (e.target.tagName === "VIDEO") {
      e.target.pause();
      e.target.currentTime = 0;
    }
  };

  return (
    <>
      <style>{`
        .portfolio-page { display:flex; flex-direction:column; min-height:100vh; width:100%; box-sizing:border-box; }
        .portfolio-header { position:relative; width:100%; height:400px; background:url('https://placehold.co/1920x600/0f172a/ffffff?text=Our+Portfolio') no-repeat center center/cover; display:flex; align-items:center; justify-content:center; text-align:center; color:white; }
        .portfolio-header .header-overlay { position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); }
        .portfolio-header .header-content { position:relative; z-index:1; }
        .portfolio-header h1 { font-size:3.5rem; font-weight:700; margin-bottom:0.5rem; text-shadow:2px 2px 4px rgba(0,0,0,0.5); }
        .portfolio-header p { font-size:1.25rem; font-weight:300; max-width:600px; margin:0 auto; }
        .portfolio-grid-section { padding:4rem 2rem; background-color:#f9fafb; }
        .portfolio-container { display:grid; grid-template-columns: repeat(auto-fit, minmax(300px,1fr)); gap:2rem; max-width:1200px; margin:0 auto; }
        .portfolio-card { background:white; border-radius:12px; box-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05); overflow:hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; display:flex; flex-direction:column; position:relative; }
        .portfolio-card:hover { transform:translateY(-10px); box-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04); }
        .portfolio-image-container { width:100%; height:250px; overflow:hidden; position:relative; }
        .portfolio-image, .portfolio-video { width:100%; height:100%; object-fit:cover; transition: transform 0.5s ease; }
        .portfolio-card:hover .portfolio-image, .portfolio-card:hover .portfolio-video { transform:scale(1.05); }
        .portfolio-content { padding:1.5rem; text-align:left; }
        .portfolio-content h3 { font-size:1.5rem; font-weight:600; color:#1f2937; margin-bottom:0.5rem; }
        .portfolio-content p { font-size:1rem; color:#6b7280; line-height:1.5; }
        .portfolio-cta { background-color:#1e40af; color:white; padding:4rem 2rem; text-align:center; }
        .portfolio-cta-content { max-width:800px; margin:0 auto; }
        .portfolio-cta-content h2 { font-size:2.5rem; font-weight:700; margin-bottom:1rem; }
        .portfolio-cta-content p { font-size:1.25rem; margin-bottom:2rem; }
        .cta-btn { display:inline-block; background:white; color:#1e40af; padding:0.75rem 2rem; border-radius:9999px; font-weight:600; text-decoration:none; transition: background-color 0.3s,color 0.3s; }
        .cta-btn:hover { background:#dbeafe; color:#1e40af; }
        @media(max-width:768px) { .portfolio-header{height:300px;} .portfolio-header h1{font-size:2.5rem;} .portfolio-header p{font-size:1rem;} .portfolio-grid-section{padding:2rem 1rem;} .portfolio-cta-content h2{font-size:2rem;} .portfolio-cta-content p{font-size:1rem;} }
      `}</style>

      <div className="portfolio-page">
        <header className="portfolio-header" data-aos="fade-in">
          <div className="header-overlay"></div>
          <div className="header-content">
            <h1>Our Portfolio</h1>
            <p>
              Explore some of our successful projects and see our work in
              action.
            </p>
          </div>
        </header>

        <section className="portfolio-grid-section">
          <div className="portfolio-container">
            {portfolioItems.map((item, index) => (
              <div
                className="portfolio-card"
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className="portfolio-image-container"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.type === "video" ? (
                    <video
                      src={item.content}
                      className="portfolio-video"
                      muted
                      loop
                      preload="metadata"
                    />
                  ) : (
                    <img
                      src={item.content}
                      alt={item.title}
                      className="portfolio-image"
                    />
                  )}
                </div>
                <div className="portfolio-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-cta" data-aos="zoom-in">
          <div className="portfolio-cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Contact us today to get a custom quote and begin your journey
              towards a smarter, more secure home or business.
            </p>
            <Link to="/contact" className="cta-btn">
              Get a Quote
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default PortfolioPage;
