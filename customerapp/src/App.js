import './App.css';
import CustomerList from './components/CustomerList';
import First from './contextexample/First';
import ProfileContextProvider from './contextexample/ProfileContextProvider';
import Parent from './examples/Parent';

function App() {
  return (
    <div className="App">
      <h1>Customer Application</h1>
      <CustomerList />
      <hr />
      <Parent />

      <ProfileContextProvider>
        <First />
      </ProfileContextProvider>
    </div>
  );
}

export default App;
