var movieDB = [
   {
      movie: "In Bruges",
      rating: 5,
      isWatched: true
   },
   {
      movie: "Frozen",
      rating: 4.5,
      isWatched: false
   },
   {
      movie: "Mad Max Fury Road",
      rating: 5,
      isWatched: true
   },
   {
      movie: "Les Miserables",
      rating: 3.5,
      isWatched: false
   }
];

movieDB.forEach(
   function(mov)
   {
      var watched = mov.isWatched ? "You have watched " : "You have not watched ";
      var stars = mov.rating === 1 ? mov.rating + " star" : mov.rating + " stars"
      console.log(watched + "\"" + mov.movie + "\" - " + stars);
   }
);