import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footter from "./components/Footter";
import HomeScreen from "./screens/HomeScreen";


const App = () => {
  return (
    <>
      <Header/>
      <main className="py-3">
        <Container>
          <HomeScreen/>
        </Container>
      </main>
      <Footter/>
    </>
  );
}

export default App