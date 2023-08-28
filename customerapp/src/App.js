import './App.css';
import CustomerList from './components/CustomerList';
import Parent from './examples/Parent';

function App() {
  return (
    <div className="App">
      <h1>Customer Application</h1>
      <CustomerList />
      <hr />
      <Parent />
    </div>
  );
}

export default App;
