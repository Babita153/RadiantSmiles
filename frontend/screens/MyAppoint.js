import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const MyAppoint = () => {
  const navigation = useNavigation();

  const appointments = [
    {
      id: '1',
      day: '20',
      month: 'July',
      treatment: 'Root Canal',
      time: '06:00 PM',
      status: 'Upcoming',
    },
    {
      id: '2',
      day: '25',
      month: 'July',
      treatment: 'Teeth Whitening',
      time: '11:00 AM',
      status: 'Completed',
    },
    {
      id: '3',
      day: '02',
      month: 'August',
      treatment: 'Dental Cleaning',
      time: '04:00 PM',
      status: 'Upcoming',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backBtn}>←</Text>
        </TouchableOpacity>

        <Text style={styles.heading}>My Appointments</Text>

        <View style={{width: 25}} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {appointments.map(item => (
          <View key={item.id} style={styles.card}>
            {/* Date */}

            <View style={styles.dateCard}>
              <Text style={styles.day}>{item.day}</Text>
              <Text style={styles.month}>{item.month}</Text>
            </View>

            {/* Details */}

            <View style={styles.details}>
              <Text style={styles.service}>{item.treatment}</Text>

              <Text style={styles.time}>{item.time}</Text>
            </View>

            {/* Status */}

            <View
              style={[
                styles.statusCard,
                item.status === 'Completed'
                  ? styles.completed
                  : styles.upcoming,
              ]}>
              <Text
                style={[
                  styles.statusText,
                  item.status === 'Completed'
                    ? {color: '#2E7D32'}
                    : {color: '#B44DD6'},
                ]}>
                {item.status}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyAppoint;

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

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 15,
    marginBottom: 15,

    elevation: 3,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  dateCard: {
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: '#F3E4F7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  day: {
    fontSize: 24,
    fontWeight: '700',
    color: '#B44DD6',
  },

  month: {
    fontSize: 14,
    color: '#666',
  },

  details: {
    flex: 1,
    marginLeft: 18,
  },

  service: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },

  time: {
    marginTop: 6,
    fontSize: 15,
    color: '#777',
  },

  statusCard: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },

  upcoming: {
    backgroundColor: '#F3E4F7',
  },

  completed: {
    backgroundColor: '#E8F5E9',
  },

  statusText: {
    fontSize: 13,
    fontWeight: '600',
  },
});