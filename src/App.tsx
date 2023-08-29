import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/Home";

function App() {
  return (
    <div className='App p-2 z-0 lg:p-10 flex flex-row items-stretch justify-evenly gap-10'>
      <Nav />
      <main className='flex-grow h-full flex flex-col items-center justify-evenly gap-10'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
