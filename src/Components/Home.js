import React, { useState, useEffect, useRef } from "react";

const styles = {
  intervals: {
    color: "#ffa500",
    fontFamily: "Comic Sans MS",
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
    <div>
      <div>
        Hi! My name is Chawin and I am a{" "}
        <span style={styles.intervals}>{personality[position]}</span>
      </div>
      <div>I build things on the internet</div>
    </div>
  );
}

export default Home;
