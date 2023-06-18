import React, {useEffect, useRef, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import PosterBoard from './PosterBoard';
import {getApiData} from '../Api/api';

interface Movie {
  name: string;
  'poster-image': string;
}

interface MovieListProps {
  item: Movie;
  index: number;
}

enum posterImages {
  'poster1.jpg' = require('../assets/poster1.jpg'),
  'poster2.jpg' = require('../assets/poster2.jpg'),
  'poster3.jpg' = require('../assets/poster3.jpg'),
  'poster4.jpg' = require('../assets/poster4.jpg'),
  'poster5.jpg' = require('../assets/poster5.jpg'),
  'poster6.jpg' = require('../assets/poster6.jpg'),
  'poster7.jpg' = require('../assets/poster7.jpg'),
  'poster8.jpg' = require('../assets/poster8.jpg'),
  'poster9.jpg' = require('../assets/poster9.jpg'),
  'posterthatismissing.jpg' = require('../assets/poster_placeholder.png'),
}

const PAGE_SIZE = 20;

const Movies = () => {
  const [movieList, setMovieList] = useState<Array<Movie>>([]);
  const pageNo = useRef<any>(1);
  const areMoreMoviesAvailable = useRef<any>(true);

  const getAndSetMovies = (page: number = 1) => {
    const {
      'content-items': {content},
    } = getApiData(page);

    const newMovieList = movieList.concat(content);
    setMovieList(newMovieList);
    if (content.length < PAGE_SIZE) {
      areMoreMoviesAvailable.current = false;
    }
  };

  useEffect(() => {
    getAndSetMovies(pageNo.current);
  }, []);

  const renderMovieList = ({item}: MovieListProps) => {
    const posterImage = posterImages[item['poster-image']];
    return <PosterBoard name={item.name} img={posterImage} />;
  };

  const onEndReached = () => {
    if (areMoreMoviesAvailable.current) {
      const newPageNo = pageNo.current + 1;
      getAndSetMovies(newPageNo);
      pageNo.current = newPageNo;
    }
  };

  const getKeys = (item: Movie, index: number) => {
    return index.toString();
  };

  return (
    <FlatList
      data={movieList}
      renderItem={renderMovieList}
      onEndReachedThreshold={0.5}
      onEndReached={onEndReached}
      keyExtractor={getKeys}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    rowGap: 44,
    marginHorizontal: 12,
    justifyContent: 'space-between',
    paddingBottom: 54,
    marginTop: 80, // height of Header (100) - 20 (rough dimension of bottom transparent part of the nav_bar.png)
  },
});

export default Movies;
