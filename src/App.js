import { Routes, Route} from 'react-router-dom'
import Chronology from './components/Chronology'
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Chronology />} />
        </Route>
    </Routes>
  );
}

export default App;
