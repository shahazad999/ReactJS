import React, { Component } from 'react';
class Home extends React.Component {
    render() {
        return (
            <div >
      
                <li>
                    <h1 >
                        Welcome To Block-Chain API
                    </h1>
                </li>

            <li>   
            <a href="/#invoke"><h2>Click to add medical Reocord</h2></a>
            </li>
            <li>
            <a href="/#query"><h2>Click to Query medical Reocord</h2></a>
            </li>
            <li>
            <a href="/#update"> <h2>Click to Update medical Reocord</h2></a>
            </li>


        

            </div>
        );
    }
}

export default Home;