import React from 'react';

const API = {
  key: "1b8dd4b36d114e8798839fe9fab911a7",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
       <div className="search-box">
         <input type="text" className="search-bar" placeholder="Search.." />
       </div> 
      </main>
    </div>
  );
}

export default App;
