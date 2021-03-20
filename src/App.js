import './App.css';
import { Container } from "react-bootstrap";
import FlightPlannerHome from './pages/FlightPlannerHome';


function App() {

  return (
    <div>
      <Container fluid className="App">
        <Container fluid>
          <FlightPlannerHome/>
        </Container>
      </Container>
    </div>
  );
}

export default App;