import "./App.css";
import CarouselExample from "./component/CarouselExample";
import AccordionExample from "./component/AccordionExample";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <div className="App">
      <CarouselExample />
      <div className="AccordionExample">
        <AccordionExample />
      </div>
    </div>
  );
}

export default App;
