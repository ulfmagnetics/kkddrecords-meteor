// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Albums.find().count() === 0) {
    var data = [
      {
        band: "Bad Scene",
        title: "Demo$",
        year: 2003,
        tracks: [
          {
            position: 1,
            title: "I Got Time to Rock and Roll",
            url: "http://s3.amazonaws.com/blarg/foo/yup"
          },
          {
            position: 2,
            title: "Another Track",
            url: "http://s3.amazonaws.com/blarg/foo/yuck"
          }
        ]
      },
      {
        band: "Cum Daemon",
        title: "The Awesome Maze",
        year: 2007,
        tracks: [
          {
            position: 1,
            title: "Eagle in the Awesome Maze",
            url: "http://s3.amazonaws.com/blarg/foo/yerk"
          }
        ]
      }
    ];

    console.log("BOOTSTRAP: Seeding database with " + data.length + " albums")

    for (var i = 0; i < data.length; i++) {
      {
        var album_id = Albums.insert({band: data[i].band, title: data[i].title, year: data[i].year, tracks: data[i].tracks});
        console.log("BOOTSTRAP: added album_id " + album_id);
      }
    }
  }
});
