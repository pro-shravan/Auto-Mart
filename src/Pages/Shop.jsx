import ProductCard from "../components/ProductCard";

function Shop() {
  const styles = {
    container: {
      padding: "40px 20px",
      background: "#0b0b0b",
      minHeight: "100vh",
      color: "#fff",
      fontFamily: "Segoe UI, sans-serif",
    },

    title: {
      textAlign: "center",
      fontSize: "32px",
      marginBottom: "10px",
      color: "#d4af37",
      letterSpacing: "1px",
    },

    subtitle: {
      textAlign: "center",
      fontSize: "14px",
      color: "#aaa",
      marginBottom: "30px",
    },

    banner: {
      width: "100%",
      height: "220px",
      objectFit: "cover",
      borderRadius: "12px",
      marginBottom: "30px",
    }
  };

  return (
    <div style={styles.container}>

      {/* SHOP HEADER */}
      <h2 style={styles.title}>Explore Premium Vehicles</h2>

      <p style={styles.subtitle}>
        Buy Cars, Bikes, SUVs & Luxury Vehicles at Best Prices
      </p>

      {/* BANNER IMAGE */}
      <img
        style={styles.banner}
        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
        alt="car showroom"
      />

      {/* PRODUCT LISTING */}
      <ProductCard />

    </div>
  );
}

export default Shop;