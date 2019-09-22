import React from 'react';
import logo from './logo.svg';
import './App.css';
import tradelinklogo from './tradelinklogo.png';
import NameForm from './NameForm'



function App() {




  return (


    <div className="App" >

      <div style={{ display: 'flex', flex: 2, flexDirection: 'row', justifyContent: 'space-between'}} className='Top-bar' >



        <img src={tradelinklogo} className="tradelink-logo" alt="tradelink logo" />

        <input style={{ color: '#fff', fontWeight: '500', borderRadius: 20, height: 40, width: 150, marginLeft: '20px', fontSize: 16,
         backgroundColor: '#147efb', borderWidth: 0, marginRight: 100, textAlign: 'center',
          alignItems: 'center', marginTop: 30, }} type="submit" value="Get Started"/>


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

        <p style={{ paddingBottom: 50 }}>
          Find subscribers, send alerts, get paid.
        </p>

        <NameForm />

        <div style={{ height: 50 }}>

        </div>



        {/*<a
          className="App-link"
          href="https://testflight.apple.com/join/ny1w9mFa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Beta
        </a>*/}
      </header>




      <div style={{ display: 'flex', flex: 2, flexDirection: 'row', justifyContent: 'space-between', align: 'center', paddingLeft: 200, paddingRight: 200, height: 300, alignItems: 'center' }}>




        <h1 style={{ textAlign: 'center' }}>
          Find Subscribers
            <p style={{ fontSize: 22 }}>
            Growing your group is easy. If you already have a group, it's easy to import.
          </p>
        </h1>

        <h1 style={{ textAlign: 'center', paddinfLeft: 30, paddingRight: 30 }}>
          Send Alerts
            <p style={{ fontSize: 22 }}>
            Growing your group is easy. If you already have a group, it's easy to import.
          </p>
        </h1>

        <h1 style={{ textAlign: 'center' }}>
          Get Paid
          <p style={{ fontSize: 22 }}>
            Growing your group is easy. If you already have a group, it's easy to import.
          </p>
        </h1>

      </div>

      <div style={{ backgroundColor: '#282c34', display: 'flex', flex: 2, flexDirection: 'row', justifyContent: 'space-between', align: 'center', paddingLeft: 100, paddingRight: 200, height: 300, alignItems: 'center' }}>




        <h1 style={{ color: '#fff', fontSize: 50, width: 500 }}>
          Start a trading group.
        </h1>

        <NameForm />
      </div>

        <div style={{ backgroundColor: '#282c34', color: '#fff', textAlign: 'center', height: 30 }}>
          Copyright 2019. Trade Link Capital, Inc.
        </div>

        <div style={{ backgroundColor: '#282c34', color: '#fff', textAlign: 'center', height: 30 }}>
          follow us @tradelinkapp
        </div>
      



    </div>




  );

}

export default App;
