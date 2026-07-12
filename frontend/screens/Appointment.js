import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, Modal, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

const Appointment = () => {

  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [service, setService] = useState('');

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const [showDate, setShowDate] = useState(false);
  const [selectedTime, setSelectedTime] = useState('04:00 PM');

  const [serviceModal, setServiceModal] = useState(false);


  const timeSlots = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
  ];

  const services = [
    'Scaling',
    'Filling/Restoration',
    'Extraction',
    'Whitening',
    'Crown & Bridge',
    'Veneers',
    'Child Dentistry',
    'Digital X-ray',
    'Wisdom Tooth Extraction',
    'Orthodontic Dentistry',
    'Implants',
  ];

  const handleBooking = () => {
    if (!name || !email || !contact || !service) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    Alert.alert(
      'Appointment Booked',
      `Name: ${name}
      Service: ${service}
      Date: ${date.toLocaleDateString()}
      Time: ${time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })}`,
    );
  };

  return (
    <>
      {/* Service Modal */}
      <Modal visible={serviceModal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <ScrollView style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Service</Text>

            <FlatList
              data={services}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setService(item);
                    setServiceModal(false);
                  }}>
                  <Text style={styles.modalText}>{item}</Text>
                </TouchableOpacity>
              )}
            />

            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setServiceModal(false)}>
              <Text style={{ color: '#fff' }}>Close</Text>
            </TouchableOpacity>

          </ScrollView>
        </View>
      </Modal>

      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.top}>
          <TouchableOpacity>
            <Text style={styles.backBtn}>←</Text>
          </TouchableOpacity>

          <Text style={styles.heading}>Book Appointment</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          {/* Name */}
          <View style={styles.inputContainer}>
            <Image
              style={styles.icon}
              source={require('../assets/user.png')}
            />

            <TextInput
              placeholder="Full Name"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
          </View>

          {/* Email */}
          <View style={styles.inputContainer}>
            <Image
              style={styles.icon}
              source={require('../assets/mail.png')}
            />

            <TextInput
              placeholder="example@gmail.com"
              style={styles.input}
              value={email}
              keyboardType="email-address"
              onChangeText={setEmail}
            />
          </View>

          {/* Contact */}
          <View style={styles.inputContainer}>
            <Image
              style={styles.icon}
              source={require('../assets/telephone.png')}
            />

            <TextInput
              placeholder="Contact Number"
              style={styles.input}
              value={contact}
              keyboardType="number-pad"
              onChangeText={setContact}
            />
          </View>

          {/* Service */}

          <TouchableOpacity
            style={styles.inputContainer}
            onPress={() => setServiceModal(true)}>

            <Text style={styles.placeholder}>
              {service || 'Select Service'}
            </Text>

            <Text style={styles.dropdown}>▼</Text>
          </TouchableOpacity>

          {/* Date */}
          <TouchableOpacity
            style={styles.inputContainer}
            onPress={() => setShowDate(true)}>
            <Image
              style={styles.icon}
              source={require('../assets/calendar.png')}
            />

            <Text style={styles.placeholder}>
              {date.toLocaleDateString()}
            </Text>
          </TouchableOpacity>

          {/* Date Picker */}
          {showDate && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowDate(false);
                if (selectedDate) {
                  setDate(selectedDate);
                }
              }}
            />
          )}


          {/* Time */}
          <Text style={styles.timeHeading}>Select Time</Text>

          <FlatList
            data={timeSlots}
            numColumns={3}
            scrollEnabled={false}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.timeButton,
                  selectedTime === item && styles.selectedTimeButton,
                ]}
                onPress={() => setSelectedTime(item)}>
                <Text
                  style={[
                    styles.timeText,
                    selectedTime === item && styles.selectedTimeText,
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />

          <Text style={styles.placeholder}>
            Time: ${selectedTime}
          </Text>

          {/* Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleBooking}>
            <Text style={styles.buttonText}>
              Confirm Booking
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView >
    </>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },

  top: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 20,
  },

  backBtn: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  heading: {
    fontSize: 27,
    fontWeight: 'bold',
  },

  form: {
    flex: 1,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ECECEC',
    borderRadius: 18,
    paddingHorizontal: 15,
    height: 65,
    marginBottom: 18,
    backgroundColor: '#fff',
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#000',
  },

  placeholder: {
    marginLeft: 12,
    fontSize: 16,
    color: '#666',
  },

  icon: {
    width: 22,
    height: 22,
    tintColor: '#B96AC9',
  },

  button: {
    backgroundColor: '#BC49C3',
    borderRadius: 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  dropdown: {
    marginLeft: 'auto',
    fontSize: 18,
    color: '#666',
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    maxHeight: 400,
    elevation: 5,
  },

  modalItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },

  modalText: {
    fontSize: 18,
    color: '#000',
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  closeBtn: {
    backgroundColor: '#BC49C3',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  timeHeading: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },

  timeButton: {
    width: '30%',
    height: 42,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
    backgroundColor: '#fff',
  },

  selectedTimeButton: {
    backgroundColor: '#0A7A8C',
    borderColor: '#0A7A8C',
  },

  timeText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
  },

  selectedTimeText: {
    color: '#fff',
  },

});








// import React, { useState } from 'react';
// import {StyleSheet,Text,View,TextInput,TouchableOpacity,Image,Alert,Modal,FlatList,ScrollView,} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const App = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [contact, setContact] = useState('');
//   const [service, setService] = useState('');

//   const [date, setDate] = useState(new Date());

//   const [showDate, setShowDate] = useState(false);
//   const [selectedTime, setSelectedTime] = useState('04:00 PM');

//   const [serviceModal, setServiceModal] = useState(false);

//   const timeSlots = [
//     '10:00 AM',
//     '11:00 AM',
//     '12:00 PM',
//     '04:00 PM',
//     '05:00 PM',
//     '06:00 PM',
//   ];

//   const services = [
//     'Scaling',
//     'Filling/Restoration',
//     'Extraction',
//     'Whitening',
//     'Crown & Bridge',
//     'Veneers',
//     'Child Dentistry',
//     'Digital X-ray',
//     'Wisdom Tooth Extraction',
//     'Orthodontic Dentistry',
//     'Implants',
//   ];

//   const handleBooking = () => {
//     if (!name || !email || !contact || !service) {
//       Alert.alert('Error', 'Please fill all fields');
//       return;
//     }

//     Alert.alert(
//       'Appointment Booked',
//       `Name: ${name}
//       Service: ${service}
//       Date: ${date.toLocaleDateString()}
//       Time: ${selectedTime}`
//     );
//   };

//   return (
//     <>
//       {/* Service Modal */}
//       <Modal visible={serviceModal} transparent animationType="slide">
//         <View style={styles.modalContainer}>
//           <ScrollView style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Select Service</Text>

//             <FlatList
//               data={services}
//               keyExtractor={(item) => item}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   style={styles.modalItem}
//                   onPress={() => {
//                     setService(item);
//                     setServiceModal(false);
//                   }}>
//                   <Text style={styles.modalText}>{item}</Text>
//                 </TouchableOpacity>
//               )}
//             />

//             <TouchableOpacity
//               style={styles.closeBtn}
//               onPress={() => setServiceModal(false)}>
//               <Text style={{ color: '#fff' }}>Close</Text>
//             </TouchableOpacity>
//           </ScrollView>
//         </View>
//       </Modal>

//       <SafeAreaView style={styles.container}>
//         {/* Header */}
//         <View style={styles.top}>
//           <TouchableOpacity>
//             <Text style={styles.backBtn}>←</Text>
//           </TouchableOpacity>

//           <Text style={styles.heading}>Book Appointment</Text>
//         </View>

//         {/* Form */}
//         <View style={styles.form}>
//           {/* Name */}
//           <View style={styles.inputContainer}>
//             <Image style={styles.icon} source={require('./assets/user.png')} />

//             <TextInput
//               placeholder="Full Name"
//               style={styles.input}
//               value={name}
//               onChangeText={setName}
//             />
//           </View>

//           {/* Email */}
//           <View style={styles.inputContainer}>
//             <Image style={styles.icon} source={require('./assets/mail.png')} />

//             <TextInput
//               placeholder="example@gmail.com"
//               style={styles.input}
//               value={email}
//               keyboardType="email-address"
//               onChangeText={setEmail}
//             />
//           </View>

//           {/* Contact */}
//           <View style={styles.inputContainer}>
//             <Image
//               style={styles.icon}
//               source={require('./assets/telephone.png')}
//             />

//             <TextInput
//               placeholder="Contact Number"
//               style={styles.input}
//               value={contact}
//               keyboardType="number-pad"
//               onChangeText={setContact}
//             />
//           </View>

//           {/* Service */}

//           <TouchableOpacity
//             style={styles.inputContainer}
//             onPress={() => setServiceModal(true)}>
//             <Text style={styles.placeholder}>
//               {service || 'Select Service'}
//             </Text>

//             <Text style={styles.dropdown}>▼</Text>
//           </TouchableOpacity>

//           {/* Date */}
//           <TouchableOpacity
//             style={styles.inputContainer}
//             onPress={() => setShowDate(true)}>
//             <Image
//               style={styles.icon}
//               source={require('./assets/calendar.png')}
//             />

//             <Text style={styles.placeholder}>{date.toLocaleDateString()}</Text>
//           </TouchableOpacity>
          
//           {/* Date Picker */}
//           {showDate && (
//             <DateTimePicker
//               value={date}
//               mode="date"
//               display="default"
//               onChange={(event, selectedDate) => {
//                 setShowDate(false);
//                 if (selectedDate) {
//                   setDate(selectedDate);
//                 }
//               }}
//             />
//           )}

//           {/* Time */}
//           <Text style={styles.timeHeading}>Select Time</Text>

//           <FlatList
//             data={timeSlots}
//             numColumns={3}
//             scrollEnabled={false}
//             keyExtractor={(item) => item}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={[
//                   styles.timeButton,
//                   selectedTime === item && styles.selectedTimeButton,
//                 ]}
//                 onPress={() => setSelectedTime(item)}>
//                 <Text
//                   style={[
//                     styles.timeText,
//                     selectedTime === item && styles.selectedTimeText,
//                   ]}>
//                   {item}
//                 </Text>
//               </TouchableOpacity>
//             )}
//           />



//           {/* Button */}
//           <TouchableOpacity style={styles.button} onPress={handleBooking}>
//             <Text style={styles.buttonText}>Confirm Booking</Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     </>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 15,
//   },

//   top: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 20,
//     marginBottom: 20,
//   },

//   backBtn: {
//     fontSize: 28,
//     fontWeight: 'bold',
//   },

//   heading: {
//     fontSize: 27,
//     fontWeight: 'bold',
//   },

//   form: {
//     flex: 1,
//   },

//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ECECEC',
//     borderRadius: 18,
//     paddingHorizontal: 15,
//     height: 65,
//     marginBottom: 18,
//     backgroundColor: '#fff',
//   },

//   input: {
//     flex: 1,
//     marginLeft: 12,
//     fontSize: 16,
//     color: '#000',
//   },

//   placeholder: {
//     marginLeft: 12,
//     fontSize: 16,
//     color: '#666',
//   },

//   icon: {
//     width: 22,
//     height: 22,
//     tintColor: '#B96AC9',
//   },

//   button: {
//     backgroundColor: '#BC49C3',
//     borderRadius: 20,
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },

//   buttonText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },

//   dropdown: {
//     marginLeft: 'auto',
//     fontSize: 18,
//     color: '#666',
//   },

//   modalContainer: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.2)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   modalContent: {
//     width: '80%',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     paddingVertical: 10,
//     maxHeight: 400,
//     elevation: 5,
//   },

//   modalItem: {
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//   },

//   modalText: {
//     fontSize: 18,
//     color: '#000',
//   },

//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//   },

//   closeBtn: {
//     backgroundColor: '#BC49C3',
//     margin: 15,
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },

//   timeHeading: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 15,
//     color: '#333',
//   },

//   timeButton: {
//     width: '30%',
//     height: 42,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 6,
//     backgroundColor: '#fff',
//   },

//   selectedTimeButton: {
//     backgroundColor: '#BC49C3',
//   },

//   timeText: {
//     fontSize: 13,
//     fontWeight: '500',
//     color: '#333',
//   },

//   selectedTimeText: {
//     color: '#fff',
//   },
// });
