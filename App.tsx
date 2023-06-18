import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Header from './components/header';
import Colors from './themes/colors';
import Movies from './components/Movies';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.APP_BACKGROUND} />
      <Header />
      <Movies />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.APP_BACKGROUND,
  },
});

export default App;
