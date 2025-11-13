import React from 'react';
import reactLogo from './assets/react.svg';
import './Test.css'

function Test() {

    return (
        <div style ={{
            display:'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems:'center',
            height:'100vh',
            width:'100vw',
            backgroundColor:'black',
            color:'white'
        }}>

        <img src={reactLogo} alt="React Logo"width="100" height="100" className="logo react" />

        <h1>Piracy in anime</h1>

        

        </div>
        );
}
export default Test;