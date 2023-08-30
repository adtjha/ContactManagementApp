import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { ChartsAndMaps } from "./components/Charts&Maps";
import Nav from "./components/nav"; // Corrected import to match casing

function App() {
  return (
    // Main container with flex layout
    <div className='App p-2 z-0 lg:p-10 flex flex-row items-stretch justify-evenly gap-10'>
      {/* Navigation component */}
      <Nav />

      {/* Main content area */}
      <main className='flex-grow h-full flex flex-col items-center justify-evenly gap-10'>
        <Routes>
          {/* Route for the home page */}
          <Route path='/' element={<Home />} />

          {/* Route for the charts and maps page */}
          <Route path='/charts' element={<ChartsAndMaps />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
