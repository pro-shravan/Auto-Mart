
import { Link } from "react-router-dom";

function Navbar() {
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 50px",
      background: "rgba(10,10,10,0.9)",
      backdropFilter: "blur(12px)",
      color: "#fff",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    },

    logoBox: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    },

    logoImg: {
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      objectFit: "cover"
    },

    logo: {
      fontSize: "24px",
      fontWeight: "bold",
      letterSpacing: "2px",
      color: "#d4af37",
      cursor: "pointer",
    },

    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "25px",
    },

    link: {
      color: "#bbb",
      textDecoration: "none",
      fontSize: "14px",
      letterSpacing: "1px",
      transition: "0.3s",
      paddingBottom: "3px"
    },

    button: {
      padding: "8px 18px",
      borderRadius: "20px",
      border: "1px solid #d4af37",
      color: "#d4af37",
      background: "transparent",
      cursor: "pointer",
      transition: "0.3s",
      fontSize: "13px",
      fontWeight: "bold",
      letterSpacing: "1px"
    }
  };

  const navItems = ["Home", "Shop", "Cars", "Bikes", "About", "Contact"];

  return (
    <div style={styles.nav}>

      {/* LOGO */}
      <div style={styles.logoBox}>
        <img
          style={styles.logoImg}
          src="https://cdn-icons-png.flaticon.com/512/741/741407.png"
          alt="logo"
        />
        <h2 style={styles.logo}>AUTO MART</h2>
      </div>

      {/* LINKS */}
      <div style={styles.navLinks}>
        {navItems.map((item) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            style={styles.link}
            onMouseOver={(e) => {
              e.target.style.color = "#fff";
              e.target.style.borderBottom = "2px solid #d4af37";
            }}
            onMouseOut={(e) => {
              e.target.style.color = "#bbb";
              e.target.style.borderBottom = "none";
            }}
          >
            {item.toUpperCase()}
          </Link>
        ))}

        {/* CTA BUTTON */}
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
          BOOK NOW
        </button>
      </div>
    </div>
  );
}

export default Navbar;