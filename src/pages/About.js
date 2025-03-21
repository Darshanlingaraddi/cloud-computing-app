import React from 'react';

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Learn more about our company and mission</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2024, MyApp has been at the forefront of innovation,
            providing cutting-edge solutions to our customers worldwide.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We strive to create exceptional experiences and deliver value
            to our customers through innovative solutions and outstanding service.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            Our diverse team of experts brings together years of experience
            and passion for creating the best solutions for our clients.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About; 