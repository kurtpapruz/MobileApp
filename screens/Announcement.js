import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const Announcement = ({ navigation }) => {
  const userAvatar = require('../assets/user.png');
  const backButtonImg = require('../assets/backbutton.png');

  // Backend-ready: announcements should be fetched from backend or passed as props
  const announcements = [];

  return (
    <View style={{flex: 1, backgroundColor: '#f7f8fa'}}>
      <View style={styles.header}>
        <View style={styles.headerLeft}></View>
        <TouchableOpacity style={styles.accountButton} onPress={() => navigation.navigate('Profile')}>
          <Image source={userAvatar} style={styles.avatar} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.titleRow}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={backButtonImg} style={styles.backButtonImg} />
        </TouchableOpacity>
        <Text style={styles.title}>Announcement</Text>
      </View>
      {/* Announcements Container */}
      <ScrollView contentContainerStyle={{paddingBottom: 120}} showsVerticalScrollIndicator={false}>
        {announcements.length === 0 ? (
          <>
            <View style={styles.announcementCard}>
              <Text style={styles.emptyText}>No announcements available.</Text>
            </View>
            <View style={styles.announcementCard}>
              <Text style={styles.emptyText}>No announcements available.</Text>
            </View>
            <View style={styles.announcementCard}>
              <Text style={styles.emptyText}>No announcements available.</Text>
            </View>
          </>
        ) : (
          announcements.map((item, idx) => (
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
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navIcon} onPress={() => navigation.navigate('History')}>
          <Image source={require('../assets/history.png')} style={styles.navImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIcon} onPress={() => navigation.navigate('Announcement')}>
          <Image source={require('../assets/announcement.png')} style={styles.navImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIcon} onPress={() => navigation.navigate('Dashboard')}>
          <Image source={require('../assets/home.png')} style={styles.navImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIcon} onPress={() => navigation.navigate('Report')}>
          <Image source={require('../assets/report.png')} style={styles.navImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIcon} onPress={() => navigation.navigate('Notification')}>
          <Image source={require('../assets/notification.png')} style={styles.navImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1041BC',
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerLeft: {
    flex: 1,
  },
  accountButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#eee',
  },
  titleRow: {
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
  backButtonImg: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
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
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
    width: '100%',
    marginVertical: 30,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1041BC',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 16,
    zIndex: 10,
  },
  navIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navImg: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default Announcement; 