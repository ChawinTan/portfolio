import React, { useState } from "react";

function Home() {
  const personality = ["Developer", "Violinist", "Fisherman"];
  const [noun, setNoun] = useState(personality[0]);
  return (
    <div>
      <div>Hi! My name is Chawin and I am a {noun}</div>
      <div>I build things on the internet</div>
    </div>
  );
}

export default Home;
