
import './App.css';
import Hello from './component/Hello'
import UseState from './component/UseState'
import Props from './component/Props'
function App() {
  return (
    <div className="App">
   {/* <Hello /> */}
   <h3> props : properties</h3>
   <Props age={10} />
   <Props age={20}/>
   <Props age={30}/>
    </div>
  );
}

export default App;
