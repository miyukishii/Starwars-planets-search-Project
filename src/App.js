import React from 'react';
import Filter from './components/Filter';
import Header from './components/Header';
import Table from './components/Table';
// import AppContext from './context/AppContext';

function App() {
  // const { planets } = useContext(AppContext);
  return (
    <div>
      <Header />
      <Filter />
      <Table />
    </div>
  );
}

export default App;
