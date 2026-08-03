import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Onboarding1 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/dental1.png')} style={styles.image} />

      <Text style={styles.title}>Personalized Care{'\n'}for Every Smile</Text>

      <Text style={styles.subtitle}>
        Advanced dental care tailored{'\n'}
        to your unique needs with{'\n'}
        experienced professionals.
      </Text>

      <View style={styles.dots}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
      </View>

      <View style = {{alignItems:"flex-end"}}>
        <TouchableOpacity onPress={() => navigation.navigate('BottomTabs')}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7FC',
    paddingHorizontal: 25,
    justifyContent: 'space-evenly',
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

  nextText: {
    color: '#9E9E9E',
    fontSize: 22,
  },
});
