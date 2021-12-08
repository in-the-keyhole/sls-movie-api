const movies = [
  {
    id: 70,
    title: "Million Dollar Baby",
    overview: "Despondent over a painful estrangement from his daughter, trainer Frankie Dunn isn't prepared for boxer Maggie Fitzgerald to enter his life. But Maggie's determined to go pro and to convince Dunn and his cohort to help her.",
    posterPath: "https://www.themoviedb.org/t/p/original/jcfEqKdWF1zeyvECPqp3mkWLct2.jpg",
  },
  {
    id: 44264,
    title: "True Grit",
    overview: "Following the murder of her father by a hired hand, a 14-year-old farm girl sets out to capture the killer. To aid her, she hires the toughest U.S. Marshal she can find—a man with 'true grit'—Reuben J. 'Rooster' Cogburn.",
    posterPath: "https://www.themoviedb.org/t/p/original/jcfEqKdWF1zeyvECPqp3mkWLct2.jpg",
  }
];

export default {
  Query: {
    nowPlaying() {
      return movies;
    },
    movie({ id }: any) {
      return movies.find(movie => movie.id == id);
    },
  },
};
