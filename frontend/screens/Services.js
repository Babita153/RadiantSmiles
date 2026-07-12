import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const Services = () => {
  const navigation = useNavigation();

  const services = [
    {
      image: require('../assets/dentalhygiene.png'),
      title: 'Cosmetic Dentistry',
      subtitle: 'Enhance your smile with cosmetic treatments.',
    },
    {
      image: require('../assets/records.png'),
      title: 'Dental Implants',
      subtitle: 'Permanent solution for missing teeth.',
    },
    {
      image: require('../assets/rootcanal.png'),
      title: 'Root Canal',
      subtitle: 'Save your natural teeth with advanced care.',
    },
    {
      image: require('../assets/smile.png'),
      title: 'Smile Makeover',
      subtitle: 'Complete smile transformation.',
    },
    {
      image: require('../assets/toothbrushing.png'),
      title: 'Teeth Whitening',
      subtitle: 'Brighten your smile safely.',
    },
    {
      image: require('../assets/braces.png'),
      title: 'Orthodontics',
      subtitle: 'Braces & aligners for a perfect smile.',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backBtn}>←</Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Our Services</Text>

        <View style={{width: 25}} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 25}}>

        <View style={styles.grid}>
          {services.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={item.image} style={styles.image} />

              <Text style={styles.cardTitle}>{item.title}</Text>

              <Text style={styles.subtitle}>
                {item.subtitle}
              </Text>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7FC',
    paddingHorizontal: 18,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },

  backBtn: {
    fontSize: 28,
    color: '#B44DD6',
    fontWeight: '700',
  },

  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  image: {
    width: 65,
    height: 65,
    resizeMode: 'contain',
    tintColor: '#B44DD6',
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
});