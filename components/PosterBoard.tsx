import React from 'react';
import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';
import colors from '../themes/colors';

interface Props {
  name: string;
  img: number;
}

const SCREEN_WIDTH = Dimensions.get('window').width;

const PosterBoard = ({name, img}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} resizeMode="contain" />
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (SCREEN_WIDTH - 24 - 30) / 3, //24 -> 12 + 12 horizontal margin of Flatlist, 28 -> 14 + 14 gaps in between posters
    height: 200,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 15,
    fontWeight: '200',
    color: colors.WHITE,
    marginTop: -4,
  },
});

export default PosterBoard;
