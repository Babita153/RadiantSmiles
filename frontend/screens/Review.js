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

const Review = () => {
  const navigation = useNavigation();

  const reviews = [
    {
      name: 'Rahul Sharma',
      review:
        'Excellent treatment and very friendly doctor. The clinic is clean and the staff is very supportive.',
      rating: '⭐⭐⭐⭐⭐',
    },
    {
      name: 'Priya Verma',
      review:
        'Very professional doctor. My root canal treatment was completely painless.',
      rating: '⭐⭐⭐⭐⭐',
    },
    {
      name: 'Aman Gupta',
      review:
        'Highly recommended. Modern equipment and excellent patient care.',
      rating: '⭐⭐⭐⭐⭐',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backBtn}>←</Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Patient Reviews</Text>

        <View style={{width: 25}} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Rating */}

        <View style={styles.ratingCard}>
          <Text style={styles.rating}>4.9</Text>

          <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>

          <Text style={styles.totalReviews}>
            Based on 150+ Happy Patients
          </Text>
        </View>

        {/* Reviews */}

        {reviews.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.userRow}>
              <Image
                source={require('../assets/user.png')}
                style={styles.icon}
              />

              <View>
                <Text style={styles.name}>{item.name}</Text>

                <Text style={styles.reviewStars}>
                  {item.rating}
                </Text>
              </View>
            </View>

            <Text style={styles.reviewText}>
              {item.review}
            </Text>
          </View>
        ))}

        {/* Button */}

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Write a Review</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Review;

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

  ratingCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 25,
    alignItems: 'center',
    marginBottom: 20,

    elevation: 3,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  rating: {
    fontSize: 42,
    fontWeight: '700',
    color: '#B44DD6',
  },

  stars: {
    fontSize: 22,
    marginTop: 5,
  },

  totalReviews: {
    fontSize: 14,
    color: '#777',
    marginTop: 8,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 15,

    elevation: 2,

    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  icon: {
    width: 45,
    height: 45,
    tintColor: '#B44DD6',
    marginRight: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },

  reviewStars: {
    fontSize: 15,
    marginTop: 2,
  },

  reviewText: {
    fontSize: 15,
    color: '#666',
    lineHeight: 24,
  },

  button: {
    backgroundColor: '#B44DD6',
    height: 58,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,

    elevation: 4,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});