import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../Components/ResidentHeader/Header';
import BottomNav from '../Components/ResidentHeader/BottomNav';

const Announcement = ({ navigation }) => {
  const backButtonImg = require('../../assets/backbutton.png');

  // Backend-ready: announcements should be fetched from backend or passed as props
  const announcements = [];

  return (
    <View style={styles.announcementContainer}>
      {/* Header */}
      <Header navigation={navigation} />
      
      <View style={styles.titleContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={backButtonImg} style={styles.backButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Announcement</Text>
      </View>

      {/* Announcements Container */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {announcements.length === 0 ? (
          <View style={styles.cardContainer}>
            <View style={styles.announcementCard}>
              <Text style={styles.emptyText}>No announcements available.</Text>
            </View>
            <View style={styles.announcementCard}>
              <Text style={styles.emptyText}>No announcements available.</Text>
            </View>
            <View style={styles.announcementCard}>
              <Text style={styles.emptyText}>No announcements available.</Text>
            </View>
          </View>
        ) : (
          announcements.map((item) => (
            <View key={item.id} style={styles.announcementCard}>
              <Text style={styles.announcementTitle}>{item.title}</Text>
              <View style={styles.announcementImgBox}>
                <Image source={{ uri: item.image }} style={styles.announcementImg} />
              </View>
              <Text style={styles.announcementDate}>{item.date}</Text>
            </View>
          ))
        )}
      </ScrollView>

      {/* BOTTOM NAVIGATION */}
      <BottomNav navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  announcementContainer: {
    flex: 1,
    backgroundColor: '#f7f8fa',
    minHeight: '100%',
    position: 'relative',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 18,
    marginLeft: 12,
  },
  backButton: {
    marginRight: 8,
    padding: 4,
  },
  backButtonIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
  scrollView: {
    flex: 1,
    paddingBottom: 120,
    paddingTop: 0,
  },
  cardContainer: {
    paddingHorizontal: 16,
  },
  announcementCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#b3c6e0',
    marginHorizontal: 16,
    marginBottom: 18,
    padding: 16,
    alignItems: 'flex-start',
  },
  announcementTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    color: '#222',
    margin: 0,
  },
  announcementImgBox: {
    width: '100%',
    height: 140,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 10,
  },
  announcementImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  announcementDate: {
    color: '#222',
    fontSize: 14,
    marginTop: 2,
    margin: 0,
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
    width: '100%',
    marginVertical: 30,
  },
});

export default Announcement; 