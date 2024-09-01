import './App.css';
import Editor from './components/Editor';
import Header from './components/Header';
import Output from './components/Output';
import './input.css';

function App() {
  return (
    < >
      <Header />
      <div className='lg:grid grid-cols-2 gap-2 place-content-center '>
        <Editor />
        <Output />
      </div>
    </>
  );
}

export default App;
