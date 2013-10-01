Albums = new Meteor.Collection("albums");

if (Meteor.isClient) {
  Template.albums = function() {
    return Albums.find();
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
