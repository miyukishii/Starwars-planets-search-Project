import React from 'react';
import Filter from './components/Filter';
import Header from './components/Header';
import Table from './components/Table';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <Header />
      <Filter />
      <Table />
    </AppProvider>
  );
}

export default App;
