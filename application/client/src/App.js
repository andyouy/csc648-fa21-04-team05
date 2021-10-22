
import React from 'react';
import About from "./pages/aboutMe"

function App() {
  const [data, setData] = React.useState(null);

  React. useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      Hello
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
