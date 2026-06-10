function Contact() {

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to right, #0b0b0b, #1a1a1a)",
      padding: "20px",
      fontFamily: "Segoe UI, sans-serif",
    },

    box: {
      width: "100%",
      maxWidth: "520px",
      background: "#141414",
      padding: "40px",
      borderRadius: "15px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
      border: "1px solid rgba(255,255,255,0.05)",
    },

    title: {
      textAlign: "center",
      color: "#d4af37",
      marginBottom: "10px",
      fontSize: "28px",
      letterSpacing: "1px",
    },

    subtitle: {
      textAlign: "center",
      color: "#aaa",
      marginBottom: "25px",
      fontSize: "14px",
    },

    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      borderRadius: "8px",
      border: "1px solid #333",
      background: "#0f0f0f",
      color: "#fff",
      outline: "none",
      fontSize: "14px",
      transition: "0.3s",
    },

    textarea: {
      width: "100%",
      padding: "12px",
      height: "120px",
      borderRadius: "8px",
      border: "1px solid #333",
      background: "#0f0f0f",
      color: "#fff",
      outline: "none",
      fontSize: "14px",
      resize: "none",
      marginBottom: "15px",
    },

    button: {
      width: "100%",
      padding: "12px",
      borderRadius: "30px",
      border: "none",
      background: "linear-gradient(90deg, #d4af37, #ffcc00)",
      color: "#000",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "0.3s",
      fontSize: "15px",
      letterSpacing: "1px",
    },

    iconRow: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      marginBottom: "20px",
      marginTop: "10px",
    },

    badge: {
      width: "40px",
      height: "40px",
      borderRadius: "8px",
      background: "#1f1f1f",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#d4af37",
      fontSize: "12px",
    },

    image: {
      width: "100%",
      height: "160px",
      objectFit: "cover",
      borderRadius: "10px",
      marginBottom: "20px",
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>

        {/* IMAGE HEADER */}
        <img
          style={styles.image}
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="cars showroom"
        />

        <h2 style={styles.title}>Contact AUTO MART</h2>

        <p style={styles.subtitle}>
          Get in touch for car booking, test drives & vehicle inquiries
        </p>

        {/* SOCIAL BADGES (UI ONLY) */}
        <div style={styles.iconRow}>
          <div style={styles.badge}>CALL</div>
          <div style={styles.badge}>MAIL</div>
          <div style={styles.badge}>CHAT</div>
        </div>

        {/* FORM */}
        <input
          type="text"
          placeholder="Your Name"
          style={styles.input}
          onFocus={(e) => e.target.style.border = "1px solid #d4af37"}
          onBlur={(e) => e.target.style.border = "1px solid #333"}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={styles.input}
          onFocus={(e) => e.target.style.border = "1px solid #d4af37"}
          onBlur={(e) => e.target.style.border = "1px solid #333"}
        />

        <input
          type="text"
          placeholder="Vehicle Interested In (e.g. BMW X5)"
          style={styles.input}
          onFocus={(e) => e.target.style.border = "1px solid #d4af37"}
          onBlur={(e) => e.target.style.border = "1px solid #333"}
        />

        <textarea
          placeholder="Your Message (Booking, Test Drive, Loan Query...)"
          style={styles.textarea}
          onFocus={(e) => e.target.style.border = "1px solid #d4af37"}
          onBlur={(e) => e.target.style.border = "1px solid #333"}
        ></textarea>

        <button
          style={styles.button}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 0 20px rgba(212,175,55,0.8)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
          }}
        >
          SEND INQUIRY
        </button>

      </div>
    </div>
  );
}

export default Contact;