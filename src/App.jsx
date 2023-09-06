import "./App.css";
import CarouselExample from "./component/CarouselExample";
import AccordionExample from "./component/AccordionExample";

function App() {
  const images = [
    {
      src: "/img/cake-4.jpg",
      id: 1,
    },
    {
      src: "/img/cake-6.jpg",
      id: 2,
    },
    {
      src: "/img/cake-8.jpg",
      id: 3,
    },
  ];
  const items = [
    {
      title: "Accordion #1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Accordion #2",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Accordion #3",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <div className="App">
      <CarouselExample images={images} />
      <div className="accordion-container">
        <AccordionExample items={items} />
      </div>
    </div>
  );
}

export default App;
