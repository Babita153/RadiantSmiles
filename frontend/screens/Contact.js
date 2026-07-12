import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Linking,Image,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';

const Contact = () => {
  const openInsta = () => {
    Linking.openURL('https://www.instagram.com/_.radiantsmiles?igsh=Mjd5cnUxZXl0YnJ3');
  };

  const callClinic = () => {
    Linking.openURL('tel:+917015240995');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={{ fontSize: 27, fontWeight: 'bold', marginBottom: 20 }}>
          Contact Us
        </Text>
      </View>

      <View style={styles.mapCard}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 30.129, // Jagadhri
            longitude: 77.2923,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}>
          <Marker
            coordinate={{
              latitude: 30.129,
              longitude: 77.2923,
            }}
            title="Radiant Smiles"
            description="By Dr. Nakshita"
          />
        </MapView>
      </View>

      <TouchableOpacity style={styles.card}>
        <Image style={styles.icon} source={require('../assets/pin.png')} />
        <Text style={styles.text}>
          Booth No. 1, Indira Colony, Jagadhri, {'\n'}Yamunanagar, Haryana -
          135003
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={callClinic}>
        <Image style={styles.icon} source={require('../assets/telephone.png')} />
        <Text style={styles.text}>+91 70152 40995</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={openInsta}>
        <Image style={styles.icon} source={require('../assets/instagram.png')} />
        <Text style={styles.text}> @radiantsmiles</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 13,
    backgroundColor: 'white',
  },

  top: {
    flexDirection: 'row',
    padding: 10,
    gap: 30,
  },

  mapCard:{
    height: 250,
    padding:10,
    marginBottom:20,
  },

  map: {
    width: '100%',
    height: '100%',
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    gap: 10,
    height: 90,
  },

  icon: {
    width: 30,
    height: 30,
    tintColor: '#B96AC9',
  },
  text: { fontSize: 17 },
});
