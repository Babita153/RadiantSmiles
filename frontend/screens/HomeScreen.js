import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={{ fontSize: 23 }}>Radiant Smiles</Text>
        <Image
          style={styles.bell}
          source={require('../assets/notification.png')}
        />
      </View>

      <View style={styles.banner}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Healthy Smile{'\n'}Confident You</Text>

          <Text style={styles.subtitle}>
            Advanced care with a{'\n'}personal touch.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Appointment')}>
            <Text style={styles.buttonText}>Book Appointment</Text>
          </TouchableOpacity>
        </View>

        <Image style={styles.image} source={require('../assets/doctor1.png')} />
      </View>

      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Services')}>
          <Image style={styles.bell} source={require('../assets/tooth.png')} />
          <Text style={styles.cardText}>Services</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Doctor')}>
          <Image style={styles.bell} source={require('../assets/dr.png')} />
          <Text style={styles.cardText}>Doctor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Gallery')}>
          <Image style={styles.bell} source={require('../assets/image.png')} />
          <Text style={styles.cardText}>Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Review')}>
          <Image style={styles.bell} source={require('../assets/star.png')} />
          <Text style={styles.cardText}>Reviews</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 15, marginBottom:15 }}>
        Why choose us?
      </Text>

      <View style={styles.menu}>
        <View style={styles.lCard}>
          <Image style={styles.bell} source={require('../assets/scan.png')} />
          <Text style={styles.lcardText}>Modern Technology</Text>
        </View>

        <View style={styles.lCard}>
          <Image style={styles.bell} source={require('../assets/dr.png')} />
          <Text style={styles.lcardText}>Experienced Doctor</Text>
        </View>
      </View>

      <View style={styles.menu}>
        <View style={styles.lCard}>
          <Image
            style={styles.bell}
            source={require('../assets/dentalhygiene.png')}
          />
          <Text style={styles.lcardText}>Personalized Care</Text>
        </View>

        <View style={styles.lCard}>
          <Image style={styles.bell} source={require('../assets/tooth1.png')} />
          <Text style={styles.lcardText}>Painless Treatment</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7FC',
    gap:10,
    padding:20,
  },

  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  bell: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },

  banner: {
    backgroundColor: '#F3E4F7',
    borderRadius: 18,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    height:280,
  },

  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#222',
    lineHeight: 32,
  },

  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
    lineHeight: 20,
  },

  button: {
    backgroundColor: '#B44DD6',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginTop: 18,
    height:50,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },

  image: {
    width: 150,
    height: 250,
    borderRadius:20,
  },

  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  card: {
    width: '23%',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 18,
    alignItems: 'center',
    elevation: 2,
  },

  cardText: {
    marginTop: 8,
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 18,
    color: '#222',
  },

  lCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    elevation: 2,
  },

  lcardText: {
    marginLeft: 10,
    fontSize: 13,
    color: '#555',
    fontWeight: '500',
    flex: 1,
  },
});
