import React, { useState } from "react";

function AboutUs() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <section
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          boxShadow: isHovered ? "0px 0px 20px 8px rgba(13,255,78,0.8)" : "0px 0px 10px 4px rgba(13,255,78,0.5)",
          display: "flex",
          flexDirection: "column",
          textAlign: "white",
          maxWidth: "1200px",
          transition: "box-shadow 0.3s ease",
          padding: "35px 35px", 
          borderRadius: "10px",
          border: "4px solid rgba(13,255,78,0.2)",
          background: "rgba(12, 16, 20, 0.7)",
          width: "100%",
          margin: "0 auto",
          cursor: "pointer",
        }}
      >
        <h2 style={{ marginBottom: "5px", font: "700 40px Inter, sans-serif" }}>
          About Us
        </h2>
        <p
          style={{
            lineHeight: "1.6",
            textAlign: "justify",
            font: "400 20px Inter, sans-serif"
          }}
        >
          GitHub Community SRM is the official student-led community affiliated
          with GitHub, spearheading the open-source revolution at SRMIST. With
          the vision of revolutionizing the technical world, we constantly
          strive to impart the best knowledge on emerging technologies. We have
          reached 1k+ followers on Instagram, and nearly 500 followers on
          LinkedIn within 6 months.
          <br />
          <br />
          At GitHub Community SRM, we believe in a friendly work environment,
          developing and nurturing students at an apt pace. This qualifies us as
          the first community in SRMIST, Kattankulathur. So what are you waiting
          for, go ahead and register on the link in bio and become a part of
          this vibrant community!
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
