import React from "react";
import Nav from "components/Nav";
import Footer from "components/Footer";
//import Cards from "components/Cards";
//import Reminder from "components/Reminder";
//import GroupForm from "components/GroupForm";


/*const handleChange = event => setValue(event.target.value);

const handleSubmit = event => {
  event.preventDefault();
  alert(`An invite link will be sent shortly: ${value}`);
};*/

const Home = () => (
  <div>
    <Nav />
    {/*<Cards />*/}

    <div style={{ height: 800, justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
      <div style={{ backgroundColor: '#282c34', height: 600, borderRadius: 50, alignSelf: 'center' /*alignSelf: 'flex-end', marginRight: 200*/ }}>

        <div style={{ margin: 50 }}>

          <h1 style={{ textAlign: 'left', color: '#fff' }}>
            Create a trading group
        </h1>
          <p style={{ textAlign: 'left', color: '#fff' }}>
            Group Name
        </p>

          <form style={{ textAlign: 'left', color: '#fff' }}>
            <input style={{
              textAlign: 'left',
              border: 0,
              borderRadius: 20,
              height: 40,
              width: 300,
              fontSize: 16,
              paddingRight: 20,
              paddingLeft: 20
            }}
              placeholder=" Enter a group name"
              type="text"

            />
          </form>




          <p style={{ textAlign: 'left', color: '#fff' }}>
            Group Description
        </p>

          <form style={{ textAlign: 'center', color: '#fff' }}>
            <input style={{
              textAlignVertical: 'top',
              border: 0,
              borderRadius: 20,
              height: 80,
              width: 300,
              fontSize: 16,
              paddingRight: 20,
              paddingLeft: 20
            }}
              placeholder=" Enter a description"
              type="text"

            />
          </form>

          <p style={{ textAlign: 'left', color: '#fff' }}>
            Phone Number
        </p>

          <form style={{ textAlign: 'center', color: '#fff' }}>
            <input style={{
              textAlign: 'left',
              border: 0,
              borderRadius: 20,
              height: 40,
              width: 300,
              fontSize: 16,
              paddingRight: 20,
              paddingLeft: 20
            }}
              placeholder=" Enter a phone number"
              type="text"

            />
          </form>

          <p style={{ textAlign: 'left', color: '#fff' }}>
            Membership Price
        </p>

          <form style={{ textAlign: 'center', color: '#fff' }}>
            <input style={{
              textAlign: 'left',
              border: 0,
              borderRadius: 20,
              height: 40,
              width: 300,
              fontSize: 16,
              paddingRight: 20,
              paddingLeft: 20
            }}
              placeholder=" $7.00"
              type="text"

            />

            <br></br>

            <button style={{
              color: '#fff',
              fontWeight: 500,
            borderRadius: 20,
            height: 40,
            width: 200,
            fontSize: 16,
            backgroundColor: '#147efb',
            background: '#147efb',
            border: 0,
            marginLeft: 20,
            marginRight: 5,
            marginTop: 20,
    textAlign: "center"}} type="submit">Create Group</button>



        </form>

      </div>



    </div>
  </div>
  <Footer />
  </div >
);

export default Home;
