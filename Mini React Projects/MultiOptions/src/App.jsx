import "./App.css";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Outlet />
      <p>SOU O PADRAO DO APP</p>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
