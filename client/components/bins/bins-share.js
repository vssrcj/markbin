import React, { Component } from "react";

class BinsShare extends Component {
   onShareClick() {
      const email = this.refs.email.value;
      Meteor.call("bins.share", this.props.bin, email);
   }
   renderShareList() {
      return this.props.bin.sharedWith.map(email => {
         return <button key={email} class="btn btn-default">{email}</button>
      })
   }
   render() {
      return (
         <footer class="bins-share">
            <div class="input-group">
               <input class="form-control" ref="email" />
               <div class="input-group-btn">
                  <button
                     class="btn btn-default"
                     onClick={this.onShareClick.bind(this)}
                  >
                     Share Bin
                  </button>
               </div>
            </div>
            <div>
               Shared With:
            </div>
            <div class="btn-group">
               {this.renderShareList()}
            </div>
         </footer>
      );
   }
}

export default BinsShare;
