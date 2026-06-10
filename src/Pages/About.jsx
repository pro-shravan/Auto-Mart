function About() {
  const styles = {
    container: {
      padding: "60px 20px",
      fontFamily: "Segoe UI, sans-serif",
      background: "linear-gradient(to right, #0b0b0b, #1a1a1a)",
      color: "#eee",
      lineHeight: "1.7",
      minHeight: "100vh"
    },

    header: {
      textAlign: "center",
      marginBottom: "50px",
    },

    title: {
      fontSize: "42px",
      fontWeight: "bold",
      background: "linear-gradient(90deg, #d4af37, #ffcc00)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    subtitle: {
      color: "#aaa",
      marginTop: "10px",
      fontSize: "16px"
    },

    section: {
      maxWidth: "900px",
      margin: "0 auto 30px auto",
      background: "#141414",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.6)",
      border: "1px solid rgba(255,255,255,0.05)",
    },

    heading: {
      fontSize: "24px",
      marginBottom: "10px",
      color: "#d4af37",
    },

    text: {
      fontSize: "16px",
      color: "#ccc",
    },

    highlight: {
      color: "#ffcc00",
      fontWeight: "bold",
    },

    divider: {
      width: "60px",
      height: "3px",
      background: "linear-gradient(90deg, #d4af37, #ffcc00)",
      margin: "10px 0 20px 0",
      borderRadius: "10px",
    },

    image: {
      width: "100%",
      height: "300px",
      objectFit: "cover",
      borderRadius: "12px",
      marginBottom: "20px",
    }
  };

  return (
    <div style={styles.container}>

      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>About AUTO MART</h1>
        <p style={styles.subtitle}>
          Premium Vehicle Marketplace for Cars, Bikes & Luxury Rides
        </p>
      </div>

      {/* IMAGE BANNER */}
      <div style={{ maxWidth: "900px", margin: "0 auto 40px auto" }}>
        <img
          style={styles.image}
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
          alt="luxury cars"
        />
      </div>

      {/* SECTION 1 */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Who We Are</h2>
        <div style={styles.divider}></div>
        <p style={styles.text}>
          <span style={styles.highlight}>AUTO MART</span> is a premium vehicle marketplace
          where you can explore, compare, and purchase cars, bikes, and SUVs from top brands.
          We aim to make vehicle buying simple, transparent, and trustworthy.
        </p>
      </div>

      {/* SECTION 2 */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Our Vision</h2>
        <div style={styles.divider}></div>
        <p style={styles.text}>
          Our vision is to revolutionize the automobile buying experience by offering
          a seamless digital showroom where users can find their dream vehicle with ease,
          comfort, and confidence.
        </p>
      </div>

      {/* SECTION 3 */}
      <div style={styles.section}>
        <h2 style={styles.heading}>What We Offer</h2>
        <div style={styles.divider}></div>
        <p style={styles.text}>
          We provide a wide range of vehicles including:
          <br /><br />
          🚗 Luxury Cars<br />
          🚙 SUVs & Family Cars<br />
          🏍️ Premium Bikes<br />
          ⚡ Electric Vehicles<br /><br />

          Every listing is carefully curated for quality and performance.
        </p>
      </div>

      {/* SECTION 4 */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Why Choose AUTO MART?</h2>
        <div style={styles.divider}></div>
        <p style={styles.text}>
          We don’t just sell vehicles — we deliver trust, quality, and experience.
          Our platform ensures transparent pricing, verified listings, and a smooth
          buying journey for every customer.
          <br /><br />
          At <span style={styles.highlight}>AUTO MART</span>,
          your dream vehicle is just a click away.
        </p>
      </div>

    </div>
  );
}

export default About;