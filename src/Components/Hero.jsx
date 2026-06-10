
function Hero() {
  const styles = {
    container: {
      height: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      textAlign: "left",
      padding: "60px",
      boxSizing: "border-box",
      color: "#fff",

      background: `
        linear-gradient(to right, rgba(0,0,0,0.88), rgba(0,0,0,0.35)),
        url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7")
      `,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },

    content: {
      maxWidth: "650px",
    },

    title: {
      fontSize: "clamp(38px, 6vw, 78px)",
      fontWeight: "900",
      lineHeight: "1.1",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "20px",
    },

    highlight: {
      color: "#d4af37",
    },

    subtitle: {
      fontSize: "clamp(16px, 2.5vw, 20px)",
      color: "#ddd",
      marginBottom: "30px",
      lineHeight: "1.6",
    },

    button: {
      padding: "14px 38px",
      fontSize: "15px",
      borderRadius: "30px",
      border: "2px solid #d4af37",
      cursor: "pointer",
      fontWeight: "bold",
      color: "#d4af37",
      background: "transparent",
      transition: "all 0.3s ease",
      letterSpacing: "1px",
    },

    smallText: {
      marginTop: "20px",
      color: "#aaa",
      fontSize: "14px",
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>

        <h1 style={styles.title}>
          Drive Your <span style={styles.highlight}>Dream</span>
        </h1>

        <p style={styles.subtitle}>
          Explore premium cars, SUVs, and bikes at unbeatable prices.
          Experience luxury, performance, and comfort — all in one place.
        </p>

        <button
          style={styles.button}
          onMouseOver={(e) => {
            e.target.style.background = "#d4af37";
            e.target.style.color = "#000";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "#d4af37";
          }}
        >
          EXPLORE CARS
        </button>

        <p style={styles.smallText}>
          Trusted by thousands of car buyers across India
        </p>

      </div>
    </div>
  );
}

export default Hero;