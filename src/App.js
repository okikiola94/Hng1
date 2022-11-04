import './App.css';
import Stage1 from './components/stage1-task/stage1';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
    <Route path='/' element={<Stage1/>}/>
    <Route path='/' element={<Contact/>}/>
    <Footer/>
    </Routes>
  );
}

export default App;
