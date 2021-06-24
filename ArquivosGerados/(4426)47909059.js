    import React, { Component } from "react";&#xD;&#xA;    import { Link } from "react-router-dom";&#xD;&#xA;    import "./home.scss";&#xD;&#xA;    class Home extends Component {&#xD;&#xA;      // Create initial state and pass props&#xD;&#xA;      constructor(props) {&#xD;&#xA;        super(props);&#xD;&#xA;        this.state = {&#xD;&#xA;          isLoading: true,&#xD;&#xA;          coins: []&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      // Custom fetch data method&#xD;&#xA;      fetchData() {&#xD;&#xA;          // Fetch data&#xD;&#xA;          fetch('http://coincap.io/front')&#xD;&#xA;          // Turn response into JSON&#xD;&#xA;          .then(response => response.json())&#xD;&#xA;          // Take parsedJSON and log results&#xD;&#xA;          // Create individual object for each of the users&#xD;&#xA;          .then(parsedJSON => parsedJSON.map(coin => (&#xD;&#xA;              {&#xD;&#xA;                  long: `${coin.long}`,&#xD;&#xA;                  short: `${coin.short}`,&#xD;&#xA;                  price: `${coin.price}`&#xD;&#xA;              }&#xD;&#xA;          )))&#xD;&#xA;          // Overwrite empty array with new contacts&#xD;&#xA;          // Set array to contacts state and set isLoading to false&#xD;&#xA;          .then(coins => {&#xD;&#xA;            this.setState({&#xD;&#xA;                coins,&#xD;&#xA;                isLoading: false&#xD;&#xA;            })&#xD;&#xA;          })&#xD;&#xA;          // Catch the errors&#xD;&#xA;          .catch(error => console.log('parsing failed', error))&#xD;&#xA;      }&#xD;&#xA;      componentDidMount() {&#xD;&#xA;        setInterval(() => {&#xD;&#xA;          this.fetchData();&#xD;&#xA;          console.log('refreshed'); &#xD;&#xA;        }, 2000);&#xD;&#xA;      }&#xD;&#xA;      render() {&#xD;&#xA;        const { isLoading, coins } = this.state;&#xD;&#xA;        return (&#xD;&#xA;          <div className="container__wrap container__wrap--home">&#xD;&#xA;            <div className={`content ${isLoading ? "is-loading" : ""}`}>&#xD;&#xA;              <div className="panel">&#xD;&#xA;                {&#xD;&#xA;                !isLoading && coins.length > 0&#xD;&#xA;                  ? coins.map(coin => {&#xD;&#xA;                      // Destruct each of the items in let variable&#xD;&#xA;                      let { long, short, price } = coin;&#xD;&#xA;                      return (&#xD;&#xA;                        <div className="panel__item" key={short}>&#xD;&#xA;                          <p>Name: {long}</p>&#xD;&#xA;                          <p>Short: {short}</p>&#xD;&#xA;                          <p>Price: ${price}</p>&#xD;&#xA;                          <Link className="button" to={`/${short}`}>&#xD;&#xA;                            View Coin&#xD;&#xA;                          </Link>&#xD;&#xA;                        </div>&#xD;&#xA;                      );&#xD;&#xA;                    })&#xD;&#xA;                  : null}&#xD;&#xA;              </div>&#xD;&#xA;              <div className="loader">&#xD;&#xA;                <div className="loader__icon" />&#xD;&#xA;              </div>&#xD;&#xA;            </div>&#xD;&#xA;          </div>&#xD;&#xA;        );&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    export default Home;