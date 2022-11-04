import './App.css';
import Stage1 from './components/stage1-task/stage1';
import Contact from './components/contact/contact';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
    <Route path='/Stage1' element={<Stage1/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    </Routes>
  )
}

export default App;
