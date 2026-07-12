import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>

      {/* Skip Button */}

      <TouchableOpacity
        style={styles.skipBtn}
        onPress={() => navigation.navigate('BottomTabs')}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Image */}

      <Image
        source={require('../assets/dental.png')}
        style={styles.image}
      />

      {/* Title */}

      <Text style={styles.title}>
        Personalized Care{"\n"}for Every Smile
      </Text>

      {/* Subtitle */}

      <Text style={styles.subtitle}>
        Advanced dental care tailored{"\n"}
        to your unique needs with{"\n"}
        experienced professionals.
      </Text>

      {/* Dots */}

      <View style={styles.dots}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      {/* Next Button */}

      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => navigation.navigate('BottomTabs')}>
        <Text style={styles.btnText}>→</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7FC',
    paddingHorizontal: 25,
    justifyContent: 'space-evenly',
  },

  skipBtn: {
    alignSelf: 'flex-end',
  },

  skipText: {
    fontSize: 16,
    color: '#999',
    fontWeight: '600',
  },

  image: {
    width: '100%',
    height: 360,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#B347D9',
    textAlign: 'center',
    lineHeight: 45,
  },

  subtitle: {
    fontSize: 17,
    color: '#666',
    textAlign: 'center',
    lineHeight: 28,
    marginTop: 10,
  },

  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#DDD',
    marginHorizontal: 5,
  },

  activeDot: {
    width: 28,
    backgroundColor: '#B347D9',
  },

  nextBtn: {
    alignSelf: 'flex-end',
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: '#B347D9',
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 6,

    shadowColor: '#B347D9',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  btnText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
  },
});