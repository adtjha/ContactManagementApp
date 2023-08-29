import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/Home";

function App() {
  return (
    <div className='App flex flex-row items-stretch justify-evenly gap-10'>
      <Nav />
      <main className='flex-grow h-screen flex flex-col items-center justify-evenly gap-10'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
