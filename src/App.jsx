import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Catalog from './components/Catalog.jsx';
import LLMView from './components/LLMView.jsx';
import Login from './components/Login.jsx';

const App = () => {   
    
    return (
        <div className='app'>
            <div className='main'>
                <Header /> 
                <Routes> 
                    <Route path="/" element={<Catalog />} />
                    <Route path="/llm/:id" element={<LLMView />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<p>Your 404 component</p>} />
                </Routes>
            </div>
        <Footer />
    </div>
    );
};

export default App;
