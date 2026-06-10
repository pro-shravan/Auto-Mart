function Testimonials() {

  const styles = {
    container: {
      padding: "80px 20px",
      background: "linear-gradient(to right, #0b0b0b, #1a1a1a)",
      textAlign: "center",
      color: "#fff",
    },

    title: {
      fontSize: "32px",
      marginBottom: "50px",
      letterSpacing: "1px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "25px",
      maxWidth: "1100px",
      margin: "0 auto",
    },

    card: {
      background: "#141414",
      padding: "25px",
      borderRadius: "15px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.6)",
      transition: "0.3s",
      textAlign: "left",
      border: "1px solid rgba(255,255,255,0.05)",
    },

    image: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "15px",
    },

    text: {
      fontSize: "15px",
      lineHeight: "1.6",
      color: "#ccc",
      marginBottom: "15px",
    },

    name: {
      fontWeight: "bold",
      color: "#d4af37",
      marginBottom: "5px",
    },

    rating: {
      color: "#ffcc00",
      fontSize: "14px",
    },

    tag: {
      display: "inline-block",
      marginTop: "10px",
      padding: "4px 10px",
      background: "#1f1f1f",
      color: "#aaa",
      borderRadius: "12px",
      fontSize: "12px",
    }
  };

  const testimonials = [
    {
      name: "Rahul Sharma",
      text: "Bought BMW X5 from here. Smooth experience and great pricing.",
      rating: "★★★★★",
      car: "BMW X5 Owner",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Amit Verma",
      text: "Audi Q7 delivery was fast. Vehicle condition was perfect.",
      rating: "★★★★☆",
      car: "Audi Q7 Owner",
      img: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      name: "Karan Mehta",
      text: "Best platform for buying luxury cars. Highly trusted service.",
      rating: "★★★★★",
      car: "Mercedes Owner",
      img: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
      name: "Vikram Singh",
      text: "Royal Enfield booking was super easy and hassle-free.",
      rating: "★★★★☆",
      car: "Bike Buyer",
      img: "https://randomuser.me/api/portraits/men/65.jpg"
    }
  ];

  return (
    <div style={styles.container}>

      <h2 style={styles.title}>
        What Our Vehicle Buyers Say
      </h2>

      <div style={styles.grid}>
        {testimonials.map((item, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >

            <img
              src={item.img}
              alt={item.name}
              style={styles.image}
            />

            <p style={styles.text}>
              "{item.text}"
            </p>

            <p style={styles.rating}>
              {item.rating}
            </p>

            <p style={styles.name}>
              {item.name}
            </p>

            <span style={styles.tag}>
              {item.car}
            </span>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Testimonials;