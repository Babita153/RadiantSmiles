import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.heading}>Welcome to</Text>
        <Text style={styles.heading2}>Radiant Smiles</Text>
      </View>

      <Image
        source={require('../assets/welcome.png')}
        style={styles.image}
      />

      <View style={styles.bottom}>

        <TouchableOpacity
          onPress={() => navigation.navigate('BottomTabs')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <View style={styles.dots}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Onboarding')}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E6FA',
    padding: 25,
  },

  header: {
    alignItems: 'center',
    marginTop: 55,
  },

  heading: {
    fontSize: 20,
    color: '#6D5BD0',
    fontWeight: '600',
  },

  heading2: {
    marginTop: 5,
    fontSize: 35,
    fontWeight: '800',
    color: '#6B2FB3',
  },

  image: {
    width: "100%",
    height: "80%",

  },

  bottom: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 80,
  },

  skipText: {
    color: '#9E9E9E',
    fontSize: 22,
  },

  nextText: {
    color: '#9E9E9E',
    fontSize: 20,
    fontWeight: '500',
  },

  dots: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D7D7D7',
    marginHorizontal: 4,
  },

  activeDot: {
    width: 24,
    backgroundColor: '#B347D9',
  },
});
