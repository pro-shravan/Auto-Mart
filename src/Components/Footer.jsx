
function Footer() {
  const styles = {
    container: {
      background: "#0b0b0b",
      color: "#cfcfcf",
      padding: "60px 20px 20px",
      fontFamily: "Arial, sans-serif",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "30px",
      maxWidth: "1200px",
      margin: "0 auto",
    },

    logo: {
      fontSize: "26px",
      fontWeight: "bold",
      color: "#d4af37",
      letterSpacing: "2px",
      marginBottom: "10px",
    },

    text: {
      fontSize: "14px",
      lineHeight: "1.6",
      color: "#aaa",
    },

    heading: {
      color: "#ffffff",
      marginBottom: "12px",
      fontSize: "16px",
      fontWeight: "600",
    },

    link: {
      display: "block",
      textDecoration: "none",
      color: "#aaa",
      marginBottom: "8px",
      fontSize: "14px",
      cursor: "pointer",
      transition: "0.3s",
    },

    newsletterBox: {
      marginTop: "10px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },

    input: {
      padding: "10px",
      borderRadius: "6px",
      border: "none",
      outline: "none",
      background: "#1a1a1a",
      color: "white",
    },

    button: {
      padding: "10px",
      border: "none",
      borderRadius: "6px",
      background: "#d4af37",
      color: "#000",
      cursor: "pointer",
      fontWeight: "bold",
    },

    bottom: {
      borderTop: "1px solid #222",
      marginTop: "40px",
      paddingTop: "15px",
      textAlign: "center",
      fontSize: "13px",
      color: "#777",
    },

    iconRow: {
      display: "flex",
      gap: "10px",
      marginTop: "10px",
    },

    badge: {
      width: "40px",
      height: "40px",
      borderRadius: "8px",
      background: "#1a1a1a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
      color: "#d4af37",
    }
  };

  const links = ["Home", "Shop", "Cars", "Bikes", "About", "Contact"];

  const support = ["FAQ", "Loan Help", "Booking Guide", "Service Centers"];

  return (
    <div style={styles.container}>

      {/* TOP GRID */}
      <div style={styles.grid}>

        {/* BRAND */}
        <div>
          <div style={styles.logo}>AUTO MART</div>
          <p style={styles.text}>
            Premium vehicle marketplace for buying cars, bikes, SUVs and luxury vehicles.
            Find your dream ride with ease and trust.
          </p>

          <div style={styles.iconRow}>
            <div style={styles.badge}>FB</div>
            <div style={styles.badge}>IG</div>
            <div style={styles.badge}>TW</div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 style={styles.heading}>Quick Links</h4>
          {links.map((item, i) => (
            <span key={i} style={styles.link}>{item}</span>
          ))}
        </div>

        {/* SUPPORT */}
        <div>
          <h4 style={styles.heading}>Customer Support</h4>
          {support.map((item, i) => (
            <span key={i} style={styles.link}>{item}</span>
          ))}
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 style={styles.heading}>Get Updates</h4>
          <p style={styles.text}>
            Subscribe for latest car launches and exclusive offers.
          </p>

          <div style={styles.newsletterBox}>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.input}
            />
            <button style={styles.button}>Subscribe</button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div style={styles.bottom}>
        © 2026 AUTO MART. All Rights Reserved. | Drive Your Dream
      </div>

    </div>
  );
}

export default Footer;