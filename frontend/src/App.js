import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footter from "./components/Footter";


const App = () => {
  return (
    <>
      <Header/>
      <main className="py-3">
        <Container>
          <Outlet/>
        </Container>
      </main>
      <Footter/>
    </>
  );
}

export default App