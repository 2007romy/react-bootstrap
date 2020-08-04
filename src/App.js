import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
        <div className="sidebar nav-side-menu" data-color="purple" data-image="./assets/img/sidebar-5.jpg">


<div className="sidebar-wrapper">
      <div className="logo">
          <a href="http://www.creative-tim.com" className="simple-text">
              <span>Rons</span> Enterprises
          </a>
      </div>

      <ul className="nav">
          <li className="active">
              <a href="dashboard.html">
                  <i className="pe-7s-graph"></i>
                  <p>Dashboard</p>
              </a>
          </li>
          <li>
              <a href="checkout.html">
                  <i className="pe-7s-user"></i>
                  <p>Checkout</p>
              </a>
          </li>
          <li>
              <a href="#">
                  <i className="pe-7s-note2"></i>
                  <p>Table List</p>
              </a>
          </li>
          <li data-toggle="collapse" data-target="#service" className="collapsed" aria-expanded="false">
              <a href="#"><i className="pe-7s-note2"></i><p>Services <span className="arrow"></span></p></a>
          </li>
                 <ul className="sub-menu collapse" id="service">
            <li>New Service 1</li>
            <li>New Service 2</li>
            <li>New Service 3</li>
          </ul>
          
         

          <li>
              <a href="#">
                  <i className="pe-7s-science"></i>
                  <p>Icons</p>
              </a>
          </li>
          <li>
              <a href="#">
                  <i className="pe-7s-map-marker"></i>
                  <p>Maps</p>
              </a>
          </li>
          
  
          <li>
              <a href="#">
                  <i className="pe-7s-science"></i>
                  <p>Icons</p>
              </a>
          </li>
          <li>
              <a href="#">
                  <i className="pe-7s-map-marker"></i>
                  <p>Maps</p>
              </a>
          </li>
          
          <li className="#">
              <a href="upgrade.html">
                  <i className="pe-7s-rocket"></i>
                  <p>Upgrade to PRO</p>
              </a>
          </li>
      </ul>
</div>
</div>
        <div className="main-panel">
        <nav className="navbar navbar-default navbar-fixed">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Dashboard</a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-left">
                        
                        
                        <li>
                           <form className="App-search d-none d-lg-block">
                           <div className="Position-relative">
                           <input type="text" className="form-control" placeholder="Search..."/>
                           <span className="Bx Bx-search-alt pe-7s-search"></span>
                </div>
            </form>
                        </li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                    
                      


                        <li>
                           <a href="">
                               <p>Account</p>
                            </a>
                        </li>

                         <li className="dropdown">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="pe-7s-bell"></i>
                                    <b className="caret hidden-lg hidden-md"></b>
                                    <p className="hidden-lg hidden-md">
                                        5 Notifications
                                        <b className="caret"></b>
                                    </p>
                              </a>
                              <ul className="dropdown-menu">
                                <li><a href="#">Notification 1</a></li>
                                <li><a href="#">Notification 2</a></li>
                                <li><a href="#">Notification 3</a></li>
                                <li><a href="#">Notification 4</a></li>
                                <li><a href="#">Another notification</a></li>
                              </ul>
                        </li> 
                        
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="pe-7s-settings"></i>
                                    <b className="caret hidden-lg hidden-md"></b>
                                    <p className="hidden-lg hidden-md">
                                        Settings
                                        <b className="caret"></b>
                                    </p>
                              </a>
                              <ul className="dropdown-menu">
                                <li><a href="#">Logout</a></li>
                                <li><a href="#">Notification 2</a></li>
                                <li><a href="#">Notification 3</a></li>
                                <li><a href="#">Notification 4</a></li>
                                <li><a href="#">Another notification</a></li>
                              </ul>
                        </li>
						<li className="separator hidden-lg"></li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    </div>
  );
}

export default App;
