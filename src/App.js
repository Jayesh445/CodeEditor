import './App.css';
import Editor from './components/Editor';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Output from './components/Output';
import './input.css';

function App() {
  return (
    < >
      <Header />
      <MainBody>
        <Editor />
        <Output />
      </MainBody>
    </>
  );
}

export default App;
