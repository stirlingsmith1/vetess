import { useEffect, useState } from "react";

function AnimatedNumber({ end, suffix = "", prefix = "", duration = 1600 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return (
    <>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

export default function About() {
  return (
    <main
      style={{
        backgroundColor: "#FEFCF8",
        fontFamily: "'DM Sans', sans-serif",
        padding: "96px 24px",
      }}
    >
      <section style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        
        {/* HERO */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: "52px",
            lineHeight: "78px",
            color: "#1E3060",
          }}
        >
          About VetBridge
        </h1>

        <p
          style={{
            marginTop: "24px",
            maxWidth: "768px",
            marginInline: "auto",
            fontSize: "20px",
            lineHeight: "32.5px",
            color: "#3D3529",
          }}
        >
          VetBridge is a nonprofit organization dedicated to helping veterans,
          active duty service members, and military spouses successfully
          transition to civilian careers.
        </p>

        {/* CARDS */}
        <div
          style={{
            marginTop: "80px",
            display: "grid",
            gap: "32px",
            gridTemplateColumns: "1fr 1fr",
            textAlign: "left",
          }}
        >
          {/* Mission */}
          <div
            style={{
              border: "1px solid #E9E9CD",
              borderRadius: "20px",
              padding: "32px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "30px",
                lineHeight: "36px",
                color: "#1E3060",
              }}
            >
              Our Mission
            </h2>

            <p
              style={{
                marginTop: "16px",
                fontSize: "16px",
                lineHeight: "26px",
                color: "#1B1919",
              }}
            >
              We bridge the gap between military service and civilian employment
              by providing free career services, job placement assistance, and
              ongoing support to those who have served our country.
            </p>
          </div>

          {/* Impact */}
          <div
            style={{
              border: "1px solid #E9E9CD",
              borderRadius: "20px",
              padding: "32px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "30px",
                lineHeight: "36px",
                color: "#1E3060",
              }}
            >
              Our Impact
            </h2>

            <p
              style={{
                marginTop: "16px",
                fontSize: "16px",
                lineHeight: "26px",
                color: "#1B1919",
              }}
            >
              Since our founding, we have helped over 47,000 veterans find
              meaningful employment, with 94% securing positions within 90 days
              of program completion.
            </p>
          </div>
        </div>

        {/* STATS */}
<div
  style={{
    marginTop: "80px",
    width: "949px",
    height: "179.75px",
    maxWidth: "100%",
    backgroundColor: "#FFFFFF",
    borderBottom: "1px solid #EDE0C8",
    paddingTop: "44px",
    paddingBottom: "1px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    textAlign: "center",
    marginInline: "auto",
  }}
>
  {[
    { num: 47, suffix: "k+", top: "Veterans", bottom: "Placed" },
    { num: 2400, suffix: "+", top: "Employers", bottom: "Hiring Now" },
    { num: 94, suffix: "%", top: "Hired in", bottom: "90 Days" },
    { num: 0, prefix: "$", top: "Cost to", bottom: "Veterans" },
  ].map((item, i) => (
    <div
      key={i}
      style={{
        borderRight: i !== 3 ? "1px solid #EDE0C8" : "none",
        padding: "0 24px",
        height: "86px",
      }}
    >
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontWeight: 500,
          fontSize: "48px",
          lineHeight: "48px",
          color: "#8B1A1F",
        }}
      >
        <AnimatedNumber
          end={item.num}
          suffix={item.suffix}
          prefix={item.prefix}
        />
      </p>

      <p
        style={{
          marginTop: "8px",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
          fontSize: "15px",
          lineHeight: "18.75px",
          color: "#0A1226",
        }}
      >
        {item.top}
      </p>

      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "16px",
          color: "#6F6969",
        }}
      >
        {item.bottom}
      </p>
    </div>
  ))}
</div>

      </section>
    </main>
  );
}