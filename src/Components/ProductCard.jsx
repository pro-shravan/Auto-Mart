
function ProductCard() {
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "30px",
      padding: "60px",
      background: "#0b0b0b",
    },

    card: {
      background: "#141414",
      borderRadius: "16px",
      overflow: "hidden",
      textAlign: "left",
      transition: "0.3s",
      cursor: "pointer",
      boxShadow: "0 10px 25px rgba(0,0,0,0.6)",
      border: "1px solid rgba(255,255,255,0.05)",
    },

    imageWrapper: {
      overflow: "hidden",
      height: "220px",
    },

    image: {
      width: "100%",
      height: "220px",
      objectFit: "cover",
      transition: "0.4s",
    },

    content: {
      padding: "15px",
    },

    name: {
      fontSize: "15px",
      color: "#eee",
      marginBottom: "10px",
      minHeight: "40px",
      lineHeight: "1.4",
    },

    price: {
      color: "#d4af37",
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
    },

    badge: {
      display: "inline-block",
      padding: "4px 10px",
      fontSize: "12px",
      background: "#1f1f1f",
      color: "#aaa",
      borderRadius: "12px",
      marginBottom: "10px",
    },

    button: {
      width: "100%",
      padding: "10px",
      border: "none",
      borderRadius: "8px",
      background: "linear-gradient(90deg, #d4af37, #b8860b)",
      color: "#000",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "0.3s",
      letterSpacing: "1px",
    }
  };

  const vehicles = [
    {
      id: 1,
      name: "BMW M5 Competition 2024",
      price: 12500000,
      type: "Luxury Sedan",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e"
    },
    {
      id: 2,
      name: "Audi Q7 Premium SUV",
      price: 9800000,
      type: "SUV",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2"
    },
    {
      id: 3,
      name: "Mercedes-Benz C-Class",
      price: 7500000,
      type: "Luxury Sedan",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8"
    },
    {
      id: 4,
      name: "Royal Enfield Classic 350",
      price: 220000,
      type: "Bike",
      image: "https://images.unsplash.com/photo-1558980664-10e7170f3e23"
    },
    {
      id: 5,
      name: "Range Rover Velar",
      price: 14500000,
      type: "Luxury SUV",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
    },
    {
      id: 6,
      name: "Tesla Model 3 Electric",
      price: 6000000,
      type: "Electric Car",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399"
    }
  ];

  return (
    <div style={styles.container}>
      {vehicles.map((item) => (
        <div
          key={item.id}
          style={styles.card}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <div style={styles.imageWrapper}>
            <img
              src={item.image}
              alt={item.name}
              style={styles.image}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
          </div>

          <div style={styles.content}>
            <span style={styles.badge}>{item.type}</span>

            <h3 style={styles.name}>{item.name}</h3>

            <p style={styles.price}>
              ₹{item.price.toLocaleString()}
            </p>

            <button
              style={styles.button}
              onMouseOver={(e) => {
                e.target.style.opacity = "0.85";
              }}
              onMouseOut={(e) => {
                e.target.style.opacity = "1";
              }}
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;