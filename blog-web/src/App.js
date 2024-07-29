
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './Components/NotFound';
import { AllBlog } from './Components/AllBlog';
import { Home } from './Components/Home';
import { MainLayout } from './Layout/MainLayout';
import { Contact } from "./Components/Contact";
import { Test } from "./Components/Test";
import { Details } from "./Components/Details";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AllBlog' element={<AllBlog/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/*' element={<NotFound/>}/>
        <Route path="/blog/:id" element={<Details/>}/>
      </Routes>
      </MainLayout>
    

   
 
    
   
        
  );
}

export default App;
