import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Catalog from './components/Catalog.jsx';
import LLMView from './components/LLMView.jsx';
import Login from './components/Login.jsx';
import AddLLM from './components/AddLLM.jsx';
import EditLLM from './components/EditLLM.jsx';
import Search from './components/Search.jsx';
import Graph from './components/Graph.jsx';

const App = () => {   
    
    return (
        <div className='app'>
            <div className='main'>
                <Header /> 
                <Routes> 
                    <Route path="/" element={<Catalog />} />
                    <Route path="/llm/:id" element={<LLMView />} />
                    <Route path="/search/:name" element={<Search />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/addllm" element={<AddLLM />} />
                    <Route path="/edit/:id" element={<EditLLM />} />
                    <Route path="/graph" element={<Graph />} />
                    <Route path="*" element={<p>Your 404 component</p>} />
                </Routes>
            </div>
        <Footer />
    </div>
    );
};

export default App;
