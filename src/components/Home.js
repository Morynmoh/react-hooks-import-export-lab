import React from "react";

const username = 'Maureen';
const city = 'Nairobi';

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export { username, city}
export default Home;