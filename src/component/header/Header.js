import React, { Component } from 'react';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: []
    }
    console.log("Header run in constructor .!")
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/menu')
    .then(data => data.json())
    .then(res => {
      this.setState({
        menu: res
      });
    }).catch(err => {
      console.log("Loi request api menu:", err.message)
    });
    console.log("Header run in componentDidMount .!")
  }

  render() {
    console.log("this.state.menu", this.state.menu);
    return (
      <div className="top-menu-bottom932">
        <nav className="navbar navbar-default">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
              <a className="navbar-brand" href="#"><img src="image/logo.png" alt="Logo" /></a>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav"> </ul>
              <ul className="nav navbar-nav navbar-right">
                { this.state.menu.length > 0 &&
                  this.state.menu.map( (item,id) => {
                  return <li key={id}><a href={item.route}>{item.name}</a></li>
                  })
                }
              </ul>
            </div>
            {/* /.navbar-collapse */}
          </div>
          {/* /.container-fluid */}
        </nav>
      </div>
    );
  }
}

export default Header;