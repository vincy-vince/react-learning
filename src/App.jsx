import Head from "./Components/head.jsx"
import Body from "./Components/body.jsx";

export default function App() {
  return (
<>
<Head />

<div className="overall-container">

<Body
  img="public/vanam.webp"
  text="Mr.Whiskerson"
  phoneno="(212) 555-1234"
  email="mr.whiskerson@catnap.meow"
/>

<Body
  img="public/download (1).jpeg"
  text="Fluffy"
  phoneno="(212) 777-2345"
  email="catchFish@myself.meow"
/>

<Body
  img="public/meawcool.jpeg"
  text="Meowson"
  phoneno="(345) 167-9876"
  email="purrson@meow.mom"
/>

<Body
  img="public/meowfia.jpeg"
  text="Mr.Meofia"
  phoneno="(767) 696-5432"
  email="meowfia@busy.furr-ever"
/>
</div></>
  );
}

