import React from 'react';
import {Link} from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div> 

      {/* Main */}

        <div className="main-container">
          <div>
            <div className="spacer">
              &nbsp;
            </div>
            <h2 className="banner">Way better than a rental car</h2>
            <h2 className="caption">Book unforgettable cars from local hosts around the world</h2>
          </div>
        </div>

      {/* Search */}

      <form action="">

      </form>

      <Link to="/cars">
        <button>all cars</button>
      </Link>

      {/* Middle */} 

        <div className="mid-container">
          <h3 className="mid-h2">Skip The Rental Counter</h3>
          <br/>
          <h2 className="mid-h3">Discover the world’s largest car sharing marketplace</h2>
        </div>
        
          <br/>
          <br/>
          <div className="grid-container">

            <div className="item-1">
              <img alt="car-photos" src="https://github.com/fsiino/torino/blob/master/app/assets/images/ic-car-photos.png?raw=true"/>
            </div>

            <div className="item-2">
              <h3 className="mid-header">Endless options</h3>
              Choose from hundreds of models you won’t find anywhere else. Pick it up or get it delivered where you want it.</div>

            <div className="thumbs-up">
              <img alt="car-photos" src="https://github.com/fsiino/torino/blob/master/app/assets/images/ic-thumbs-up.png?raw=true" />
            </div>              

            <div className="item-4">
              <h3 className="mid-header">Free cancellation</h3>
              Cancel for free up to 24 hours before your trip starts. Because life happens and it helps to be flexible when it does.</div>

            <div className="item-5">
              <img alt="support" src="https://github.com/fsiino/torino/blob/master/app/assets/images/ic-support.png?raw=true" />
            </div>            

            <div className="item-6">
              <h3 className="mid-header">24/7 customer support</h3>
              Rest easy knowing that everyone in the Torino community is screened, and 24/7 customer support and roadside assistance are just a click away.</div>

            <div className="item-7">
              <img alt="shield" src="https://github.com/fsiino/torino/blob/master/app/assets/images/ic-shield-check.png?raw=true" />
            </div>            

            <div className="item-8">
              <h3 className="mid-header">Insurance options included</h3>
            Drive confidently with your choice of protection plans offered through Torino Insurance Agency — you’re covered up to $1 million in liability insurance provided by Liberty Mutual.</div>

          </div>

            <form align="center" action="#">
              <button className="post-grid" type="submit">Book the perfect car</button>
            </form>    

        {/* Cars Slider */}

        {/* Porsche */}

        <div className="spacer"/>

        <div className="porsche">
          <div className="porsche-container">
            <h3 className="porsche-h3">DRIVING AT ITS FINEST</h3>
            <br />            <br />
            <h2 className="porsche-h2">Discover the Porsche
              <br />Host Program</h2>
            <br />
            <p className="porsche-p">
              Torino and Porsche are proud to introduce the Porsche Host Program, a pilot program in San Francisco and Los Angeles that combines curated Porsche vehicles with top Torino hosts to give you the complete Porsche experience.
            </p>
            <br />

            <form action="">
              <button type="submit">Explore the program</button>
            </form>
          </div>
        </div>

        <div className="book-container">
          <img className="book-pic" alt="book-unlock-go" src="https://github.com/fsiino/torino/blob/master/app/assets/images/book-unlock-go.jpg?raw=true"/>

          <div className="book-separator">
            <h2 className="book-header">Book, unlock, and go!</h2>
              <br/>
            <p className="book-desc">Unlock the next level of car sharing convenience with Turo Go — find, book, and unlock cars on demand, right from the Turo app.</p>
            <form align="center" action="">
              <button className="post-grid" type="submit">Learn more</button>
            </form>    
          </div>
          
        </div>

        {/* Wires */}

          <div className="wires-container">
            <h3 className="wires-header">The car that pays for itself</h3>
            <p className="wires-text">Make a dent in your monthly car payments — on average, Torino hosts can cover their payments by sharing their cars just nine days per month.</p>
            <br/><br/>  
            <p className="wires-text">You’re covered with up to $1 million in liability insurance, and your car is contractually protected against theft and physical damage. Or bring your own commercial rental insurance and take a bigger piece of the pie.*</p>

          <form action="#">
            <button type="submit">List your car</button>
          </form>

          </div>

      {/* Footer */}

      </div>
    )
  }
}

export default Main;