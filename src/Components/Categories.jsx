function Categories() {

  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "25px",
      padding: "60px",
      background: "#0b0b0b",
    },

    card: {
      height: "320px",
      borderRadius: "18px",
      overflow: "hidden",
      position: "relative",
      cursor: "pointer",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "flex-end",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
      boxShadow: "0 10px 25px rgba(0,0,0,0.4)"
    },

    overlay: {
      width: "100%",
      padding: "18px",
      background: "linear-gradient(to top, rgba(0,0,0,0.95), transparent)",
      color: "#fff",
      fontSize: "20px",
      fontWeight: "600",
      letterSpacing: "1px",
    },

    title: {
      textAlign: "center",
      color: "white",
      fontSize: "32px",
      marginBottom: "20px",
      fontWeight: "bold"
    }
  };

  const data = [
    {
      name: "SPORTS CARS",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    },
    {
      name: "SUV VEHICLES",
      img: "https://images.unsplash.com/photo-1511910849309-0dffb8788b8b"
    },
    {
      name: "BIKES",
      img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc"
    },
    {
      name: "LUXURY CARS",
      img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
    }
  ];

  return (
    <div>
      <h2 style={styles.title}>Explore Vehicle Categories</h2>

      <div style={styles.container}>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              backgroundImage: `url(${item.img})`
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.06)";
              e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.7)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.4)";
            }}
          >
            <div style={styles.overlay}>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;