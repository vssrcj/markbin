import React, { Component } from "react";
import { createContainer } from "meteor/react-meteor-data";
import { Bins } from "../../../imports/collections/bins";
import { Link } from "react-router";

class BinsList extends Component {
   onBinRemove(bin) {
      Meteor.call("bins.remove", bin);
   }
   renderList() {
      return this.props.bins.map(bin => {
         const url = `/bins/${bin._id}`;
         return (
            <li class="list-group-item" key={bin._id}>
               <Link to={url}>Bin {bin._id}</Link>
               <span class="pull-right">
                  <button
                     class="btn btn-danger"
                     onClick={() => this.onBinRemove(bin)}
                  >
                     Remove
                  </button>
               </span>
            </li>
         );
      });
   }
   render() {
      return (
         <ul class="list-group">
            {this.renderList()}
         </ul>
      );
   }
}

export default createContainer(() => {
   Meteor.subscribe("bins");
   return { bins: Bins.find({}).fetch() };
}, BinsList);
