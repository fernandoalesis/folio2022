
import { Fragment } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import About from './componentes/About/About.jsx'
import Services from './componentes/Servicios/Services.jsx';
import Projects from './componentes/Projects/Projects.jsx';
import Footer from './componentes/Footer/Footer';

function App() {
  return (

    

    <Fragment>
      

      <div className='App' >
          <Header/>
          <div className='bgAbout' > <About/></div>
        
          <div className='bgServices' ><Services/></div>
          
          <div className='bgProjects' ><Projects/></div>
          
          <div className='bgFooter' ><Footer/></div>
          
         
        </div>

    </Fragment>

    
  );
}

export default App;
