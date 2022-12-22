import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { Slide } from "./components/Slide";

function App() {
  return (
    <div>
      <div className='w-full'>
        <Navbar />
        <Slide />
        <Main />
      </div>
    </div>
  );
}

export default App;
