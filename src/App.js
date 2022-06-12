import './App.css';
import UseStateClass from './components/UseStateClass';
import UseStateFunction from './components/UseStateFunction'
import UseStateLazy from './components/UseStateLazy'
import UsePrevState from './components/UsePrevState'

function App() {
  return (
    <div className="App">
      <UseStateClass />
      <UseStateFunction />
      <UseStateLazy />
      <UsePrevState />
    </div>
  );
}

export default App;
