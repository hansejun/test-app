// import ButtonSection from './chapter/2';
// import Summary from './chapter/3';
import Container from 'react-bootstrap/Container';
import OrderEntry from './chapter/4/orderEntry';
import { OrderDetailProvider } from './context/OrderDetail';

function App() {
  return (
    <Container className="w-screen h-screen bg-slate-300">
      <OrderDetailProvider>
        <OrderEntry />
      </OrderDetailProvider>
    </Container>
  );
}

export default App;
