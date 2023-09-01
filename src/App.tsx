// import ButtonSection from './chapter/2';
// import Summary from './chapter/3';
import Container from 'react-bootstrap/Container';
import OrderEntry from './chapter/4/orderEntry';
import { OrderDetailProvider } from './context/OrderDetail';

import { useState } from 'react';

import Summary from './chapter/3';

import OrderConfirmation from './chapter/5/OrderConfirmation';

export type Phase = 'inProgress' | 'review' | 'completed';

const renderPhase = {
  inProgress: OrderEntry,
  review: Summary,
  completed: OrderConfirmation,
};

function App() {
  const [orderPhase, setOrderPhase] = useState<Phase>('inProgress');

  const handlePhase = (phase: Phase) => {
    setOrderPhase(phase);
  };

  const Component = renderPhase[orderPhase];

  return (
    <Container className="w-screen h-screen bg-slate-300">
      <OrderDetailProvider>
        <Component handlePhase={handlePhase} />
      </OrderDetailProvider>
    </Container>
  );
}

export default App;
