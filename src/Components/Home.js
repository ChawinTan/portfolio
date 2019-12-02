import React, { useState, useEffect, useRef } from "react";

const styles = {
  container: {
    textAlign: "center",
    position: "absolute",
    left: "50%",
    top: "50%",
    webkitTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)"
  },
  about: {
    fontFamily: "Comic Sans MS",
    color: "rgba(51, 51, 51, 0.7)"
  },
  intervals: {
    color: "#ffa500",
    fontStyle: "italic",
    fontWeight: 500
  }
};

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Home() {
  const personality = ["Developer", "Violinist", "Fisherman"];
  let [position, setPosition] = useState(0);

  useInterval(() => {
    if (position === 2) {
      position = 0;
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  }, 1500);

  return (
    <div style={styles.container}>
      <div style={styles.about}>
        Hi! My name is Chawin and I am a{" "}
        <span style={styles.intervals}>{personality[position]}</span>
      </div>
      <div style={styles.about}>I build things on the internet</div>
    </div>
  );
}

export default Home;
