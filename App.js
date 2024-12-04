import React from 'react';
import './App.css';
import Header from './header';
import Table from './table';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Footer from './footer';
// import { Dropdown } from 'bootstrap';
import DropdownOp from './dropdown';

import Formsheet from './form';
function App(){
 
  

  return (
    
    <div className="container">
      <div className='text-center fs-2'>
       
    <Header />
    </div>
    
    <div className='container pt-5'>
    <div className=''>
   
      <Formsheet />
    </div>
    <div className=''>
      <DropdownOp />
    </div>
    <div className='mt-5'>
    <Table />
  
    </div>

    <div className='' >
    <Footer />
    </div>
    </div>
    </div>
    
    
  );
}

export default App;
