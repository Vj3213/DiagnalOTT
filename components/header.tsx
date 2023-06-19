import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  Pressable,
  TextInput,
  Platform,
} from 'react-native';
import NavBarBg from '../assets/nav_bar.png';
import BackBtnImg from '../assets/Back.png';
import SearchBtnImg from '../assets/search.png';
import colors from '../themes/colors';

interface Props {
  searchInput: string;
  onChangeText: (textString: string) => void;
}

const Header = (props: Props) => {
  const {searchInput, onChangeText} = props;
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);

  const renderMiddleSection = (showSearchField: boolean) => {
    if (showSearchField) {
      return (
        <TextInput
          placeholder="The Birds"
          placeholderTextColor={colors.TRANSPARENT_WHITE}
          underlineColorAndroid={colors.TRANSPARENT_WHITE}
          style={styles.searchInput}
          value={searchInput}
          onChangeText={onChangeText}
          autoFocus
        />
      );
    }
    return <Text style={styles.headerTxt}>Romantic Comedy</Text>;
  };

  const onPressSearchBtn = () => {
    onChangeText('');
    setShowSearchBar(true);
  };

  const onPressBackBtn = () => {
    setShowSearchBar(false);
    onChangeText('');
  };

  return (
    <ImageBackground
      source={NavBarBg}
      style={styles.navBarBg}
      resizeMode="cover">
      <Pressable
        disabled={!showSearchBar}
        style={styles.sideBtnCont}
        onPress={onPressBackBtn}>
        <Image source={BackBtnImg} style={styles.sideBtnImg} />
      </Pressable>
      {renderMiddleSection(showSearchBar)}
      <Pressable style={styles.sideBtnCont} onPress={onPressSearchBtn}>
        <Image
          source={SearchBtnImg}
          style={styles.sideBtnImg}
          resizeMode="cover"
        />
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  navBarBg: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    marginTop: Platform.OS === 'ios' ? 44 : 0,
  },
  sideBtnCont: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideBtnImg: {
    width: 20,
    height: 20,
  },
  searchInput: {
    flex: 1,
    color: colors.WHITE,
    fontSize: 16,
  },
  headerTxt: {
    flex: 1,
    color: colors.WHITE,
    fontSize: 20,
    fontWeight: '300',
  },
});

export default Header;
