import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MasonryList from '@react-native-seoul/masonry-list';
import {useNavigation} from '@react-navigation/native';

const Gallery = () => {
  const navigation = useNavigation();

  const images = [
    {
      id: '1',
      image: require('../assets/clinic-chair.png'),
      height: 250,
    },
    {
      id: '2',
      image: require('../assets/gallery3.png'),
      height: 180,
    },
    {
      id: '3',
      image: require('../assets/gallery1.png'),
      height: 220,
    },
    {
      id: '4',
      image: require('../assets/gallery5.png'),
      height: 250,
    },
    {
      id: '5',
      image: require('../assets/gallery2.png'),
      height: 190,
    },
    {
      id: '6',
      image: require('../assets/gallery4.png'),
      height: 220,
    },
    {
      id: '7',
      image: require('../assets/gallery6.png'),
      height: 250,
    },
    {
      id: '8',
      image: require('../assets/gallery3.png'),
      height: 350,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backBtn}>←</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Our Gallery</Text>

        <View style={{ width: 30 }} />
      </View>

      <ScrollView>
        <MasonryList
          data={images}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 30 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.9}>
              <Image
                source={item.image}
                style={[
                  styles.image,
                  { height: item.height,},
                ]}
              />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },

  backBtn: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },

  image: {
    width: '95%',
    borderRadius: 18,
    marginBottom: 12,
    alignSelf: 'center',
  },
});
