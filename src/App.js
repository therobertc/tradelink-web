import React from 'react';
import logo from './logo.svg';
import './App.css';
import tradelinklogo from './tradelinklogo.png';
import NameForm from './NameForm'



function App() {

  

  
  return (


    <div className="App" >

      <div className='Top-bar'>



        <img src={tradelinklogo} className="tradelink-logo" alt="tradelink logo" />

      </div>

     {/*} <div style={{height: 20, backgroundColor: '#282c34', color: '#fff', paddingTop: 10, paddingLeft: 20, fontWeight: 500}}>

        Trending Stocks
        
          
  </div>*/}

    

      

     {/* <section class="card">
       
  <div style={{ borderRadius: 30}} class="card-content"> <p style={{ textAlign: 'center'}}> STOCK </p></div>
  <div style={{ borderRadius: 30}} class="card-content"> <p style={{ textAlign: 'center'}}> STOCK </p></div>
  <div style={{ borderRadius: 30}} class="card-content"> <p style={{ textAlign: 'center'}}> STOCK </p></div>
  <div style={{ borderRadius: 30}} class="card-content"> <p style={{ textAlign: 'center'}}> STOCK </p></div>
  <div style={{ borderRadius: 30}} class="card-content"> <p style={{ textAlign: 'center'}}> STOCK </p></div>
  <div style={{ borderRadius: 30}} class="card-content"></div>
  <div style={{ borderRadius: 30}} class="card-content"></div>
  <div style={{ borderRadius: 30}} class="card-content"></div>
  <div style={{ borderRadius: 30}} class="card-content"></div>
  <div style={{ borderRadius: 30}} class="card-content"></div>
  <div style={{ borderRadius: 30}} class="card-content"></div>
  <div style={{ borderRadius: 30}} class="card-content"></div>
  <div style={{ borderRadius: 30}} class="card-content"></div>
  <div style={{ borderRadius: 30}} class="card-content"></div>
  <div style={{ borderRadius: 30}} class="card-content"></div>
  <div style={{ borderRadius: 30}} class="card-content"></div>
  
</section>

  */}

      


      <header className="App-header">

        <h1 style={{ paddingTop: 20, fontSize: 50, paddingBottom: 20, width: 500 }}>
        The simplest way to start a trading group.
        </h1>

        <p style={{ paddingBottom: 50}}>
          Find subscribers, send alerts, get paid.  
        </p>

        <NameForm/>



        {/*<a
          className="App-link"
          href="https://testflight.apple.com/join/ny1w9mFa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Beta
        </a>*/}
      </header>
    </div>


  );
}

export default App;
