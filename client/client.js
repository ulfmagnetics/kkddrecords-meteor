Template.albums.albums = function() {
  return Albums.find({}, {sort: {band: 1}});
};
