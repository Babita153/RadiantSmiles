
import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />

      {/* Top Star */}
      <Image
        source={require('../assets/star.png')}
        style={styles.topStar}
      />

      {/* Logo */}
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Tagline */}
      <Text style={styles.title}>
        Creating Beautiful &{'\n'}Healthy Smiles
      </Text>

      {/* Bottom Decoration */}
      <Text style={styles.bottom}>♡﹏✦</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  topStar: {
    position: 'absolute',
    top: 80,
    right: 45,
    width: 28,
    height: 28,
    tintColor: '#E6B8F7',
  },

  logo: {
    width: 240,
    height: 150,
    marginBottom: 35,
  },

  title: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    lineHeight: 28,
  },

  bottom: {
    fontSize: 30,
    color: '#D98AE9',
  },

});