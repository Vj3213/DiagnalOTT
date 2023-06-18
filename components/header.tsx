import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
} from 'react-native';
import NavBarBg from '../assets/nav_bar.png';
import BackBtnImg from '../assets/Back.png';
import SearchBtnImg from '../assets/search.png';

const Header = () => {
  return (
    <ImageBackground
      source={NavBarBg}
      style={styles.navBarBg}
      resizeMode="cover">
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable style={styles.sideBtnCont}>
          <Image source={BackBtnImg} style={styles.sideBtnImg} />
        </Pressable>
        <View style={{flex: 1}}>
          <Text style={{color: 'white'}}>Romantic Comedy</Text>
        </View>
        <Pressable style={styles.sideBtnCont}>
          <Image
            source={SearchBtnImg}
            style={styles.sideBtnImg}
            resizeMode="center"
          />
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  navBarBg: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  sideBtnCont: {
    width: 54,
    height: 54,
    justifyContent: 'center',
  },
  sideBtnImg: {
    width: 54,
    height: 54,
  },
});

export default Header;
