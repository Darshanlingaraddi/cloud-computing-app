import React from 'react';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Cloud Computing Solutions</h1>
        <p>Empowering businesses with scalable and secure cloud infrastructure</p>
      </section>
      
      <section className="features">
        <h2>Our Cloud Services</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Cloud Storage</h3>
            <p>Secure and scalable storage solutions with automatic backup and data redundancy.</p>
          </div>
          <div className="feature-card">
            <h3>Cloud Computing</h3>
            <p>High-performance computing resources with pay-as-you-go pricing model.</p>
          </div>
          <div className="feature-card">
            <h3>Cloud Security</h3>
            <p>Advanced security features including encryption, access control, and threat detection.</p>
          </div>
          <div className="feature-card">
            <h3>Cloud Migration</h3>
            <p>Seamless migration of your existing infrastructure to the cloud with minimal downtime.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 