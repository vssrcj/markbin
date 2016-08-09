import React, { Component } from "react";
import Accounts from "./accounts";
import { Link } from "react-router";

class Header extends Component {
   onBinClick(event) {
      event.preventDefault();

      Meteor.call("bins.insert");
   }
   render() {
      return (
         <nav class="nav navbar-default">
            <div class="navbar-header">
               <Link class="navbar-brand" to="/">Markbin</Link>
            </div>
            <ul class="nav navbar-nav">
               <li>
                  <Accounts />
               </li>
               <li>
                  <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
               </li>
            </ul>
         </nav>
      );
   }
}

export default Header;
