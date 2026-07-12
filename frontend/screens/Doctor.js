import {StyleSheet,Text,View,TouchableOpacity,Image,FlatList,} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Doctor = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backBtn}>←</Text>
        </TouchableOpacity>

        <Text
          style={styles.title}>
          Meet Our Doctor
        </Text>
      </View>

      <View style={styles.card}>
        <View style={{ flexDirection: 'row', marginTop: 20, gap:18 }}>
          <Image style={styles.image} source={require('../assets/doctor1.png')} />
          <View style={{ gap: 8 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
              Dr. Nakshita
            </Text>
            <Text style={{ fontSize: 20 }}>BDS, MDS</Text>
            <Text style={{ fontSize: 20 }}>
              (Periodontology &{'\n'} Implantology)
            </Text>
            <View
              style={{
                borderRadius: 25,
                height: 90,
                backgroundColor: '#f8eef5',
              }}>
              <Text
                style={{
                  color: 'purple',
                  fontSize: 20,
                  padding: 20,
                  fontWeight: 'bold',
                }}>
                10+ Years{'\n'}Experience
              </Text>
            </View>
          </View>
        </View>

        <Text style={{ fontSize: 24, fontWeight: 'bold', padding: 5 }}>
          About Doctor
        </Text>
        <Text style={{ fontSize: 17, padding: 8 }}>
          Dr. Nakshita is dedicated to providing quality dental care with
          advanced treatment techniques. Her focus is on patient comfort,
          preventive dentistry, and creating healthy, beautiful smiles.
        </Text>

        <FlatList
          data={[
            { key: '✓ Cosmetic & Child Dentistry' },
            { key: '✓ Dental Implants' },
            { key: '✓ Root Canal Treatment' },
            { key: '✓ Orthodontic Consultation' },
            { key: '✓ Digital X-Ray ' },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Appointment")}>
          <Text style={styles.buttonText}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#9559AA',
  },

  header: {
    flexDirection: 'row',
    padding: 10,
    gap: 30,
  },

  backBtn: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },

  card: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: 'white',
    padding: 15,
  },

  image: {
    height: 200,
    width: 150,
    borderRadius:25,
  },

  title: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },

  item: {
    fontSize: 18,
    padding: 8,
  },

  button: {
    backgroundColor: '#BC49C3',
    borderRadius: 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
