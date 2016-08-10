import { Mongo } from "meteor/mongo";

Meteor.methods({
   "bins.insert": function() {
      return Bins.insert({
         createdAt: new Date(),
         content: "",
         sharedWith: [],
         ownerId: this.userId
      });
   },
   "bins.update": function(bin, content) {
      return Bins.update(bin._id, { $set: { content }});
   },
   "bins.remove": function(bin) {
      return Bins.remove(bin);
   },
   "bins.share": function(bin, email) {
      return Bins.update(bin._id, { $push: { sharedWith: email }});
   }
});

export const Bins = new Mongo.Collection("bins");
