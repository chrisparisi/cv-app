import Builder from './components/Builder';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="container--builder">
          <Builder />
        </div>
      </div>
    </div>
  );
}

export default App;
