import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backBtn}>←</Text>
        </TouchableOpacity>

        <Text style={styles.heading}>My Profile</Text>

        <View style={{width: 25}} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Card */}

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Image
              source={require('../assets/user.png')}
              style={styles.profileIcon}
            />
          </View>

          <Text style={styles.name}>Priya Sharma</Text>

          <Text style={styles.mobile}>+91 98765 43210</Text>

          <Text style={styles.email}>
            priyasharma@gmail.com
          </Text>
        </View>

        {/* Menu */}

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('MyAppoint')}>
          <View style={styles.left}>
            <Image
              source={require('../assets/records.png')}
              style={styles.icon}
            />
            <Text style={styles.menuText}>My Appointments</Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Review')}>
          <View style={styles.left}>
            <Image
              source={require('../assets/star.png')}
              style={styles.icon}
            />
            <Text style={styles.menuText}>My Reviews</Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.left}>
            <Image
              source={require('../assets/notification.png')}
              style={styles.icon}
            />
            <Text style={styles.menuText}>Notifications</Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.left}>
            <Image
              source={require('../assets/exit.png')}
              style={styles.icon}
            />
            <Text style={styles.menuText}>Logout</Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

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

  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 30,
    alignItems: 'center',
    marginBottom: 25,

    elevation: 3,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F3E4F7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileIcon: {
    width: 55,
    height: 55,
    tintColor: '#B44DD6',
  },

  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    marginTop: 18,
  },

  mobile: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },

  email: {
    fontSize: 15,
    color: '#888',
    marginTop: 5,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 2,

    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    width: 24,
    height: 24,
    tintColor: '#B44DD6',
    marginRight: 15,
  },

  menuText: {
    fontSize: 17,
    color: '#333',
    fontWeight: '500',
  },

  arrow: {
    fontSize: 24,
    color: '#999',
  },
});