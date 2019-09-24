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
          We make it easy to start a trading group.
        </h1>

        <p style={{ paddingBottom: 50 }}>
          Find subscribers, send updates, get paid.
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

      <h1 style={{ textAlign: 'center', fontSize: 50 }}>
        How it works
        </h1>


      <div style={{ display: 'flex', flex: 2, flexDirection: 'row', justifyContent: 'space-between', align: 'center', paddingLeft: 200, paddingRight: 200, height: 300, alignItems: 'center' }}>


        <h1 style={{ textAlign: 'center' }}>
          Find Subscribers
            <p style={{ fontSize: 22 }}>
            If you already have a group, it's easy to add it to Tradelink.
          </p>
        </h1>

        <h1 style={{ textAlign: 'center', paddingLeft: 30, paddingRight: 30 }}>
          Send Updates
            <p style={{ fontSize: 22 }}>
            Access live market data and send updates to your subscribers in real-time.
          </p>
        </h1>

        <h1 style={{ textAlign: 'center' }}>
          Get Paid
          <p style={{ fontSize: 22 }}>
            We make it easy to start a paid group whenever you're ready.
          </p>
        </h1>

      </div>

      <div style={{ backgroundColor: '#282c34', display: 'flex', flex: 2, flexDirection: 'row', justifyContent: 'space-between', align: 'center', paddingLeft: 100, paddingRight: 200, height: 300, alignItems: 'center' }}>




        <h1 style={{ color: '#fff', fontSize: 50, width: 500 }}>
          Ready to start a trading group?
        </h1>

        <NameForm />
      </div>

      <h1 style={{ textAlign: 'center', fontSize: 50 }}>
        About Tradelink
        </h1>


      <div style={{ display: 'flex', flex: 2, flexDirection: 'row', justifyContent: 'space-between', align: 'center', paddingLeft: 200, paddingRight: 200, height: 300, alignItems: 'center' }}>


        <h1 style={{ textAlign: 'center' }}>
          Groups
            <p style={{ fontSize: 22 }}>
            Groups are the best way to bring people together. We created a unique place for groups of traders to connect and share ideas. 
          </p>
        </h1>

        <h1 style={{ textAlign: 'center', paddingLeft: 30, paddingRight: 30 }}>
          Subscriptions
            <p style={{ fontSize: 22 }}>
            Direct subscriptions are a better business model for community. It puts the user in control, and helps you make more money.
          </p>
        </h1>

        <h1 style={{ textAlign: 'center' }}>
         Global Markets
          <p style={{ fontSize: 22 }}>
            The global financial market is a collaborative environment. We believe market updates should be shared with the world. 
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

import React from "react";
import "./App.css";
import Nav from "components/Nav";
import Header from "components/Header";
import WorkProcess from "components/Sections/WorkProcess";
import About from "components/Sections/About";
import Reminder from "components/Reminder";
import Footer from "components/Footer";
// import Cards from "components/Cards";

const App = () => (
  <div className="App">
    <Nav />
    {/* <Cards /> */}
    <Header />
    <WorkProcess />
    <Reminder text="Ready to start a trading group?" />
    <About />
    <Reminder text="Start a trading group." />
    <Footer />
  </div>
);


export default App;
