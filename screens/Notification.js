import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

const Notification = ({ navigation, notifications = [] }) => {
  const userAvatar = require('../assets/user.png');
  const backButtonImg = require('../assets/backbutton.png');

  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationText}>{item.message}</Text>
      <Text style={styles.notificationTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#f7f8fa'}}>
      {/* HEADER (avatar only) */}
      <View style={styles.header}>
        <View style={styles.headerLeft}></View>
        <TouchableOpacity style={styles.accountButton} onPress={() => navigation.navigate('Profile')}>
          <Image source={userAvatar} style={styles.avatar} />
        </TouchableOpacity>
      </View>
      {/* Title row with back button and Notification text */}
      <View style={styles.titleRow}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={backButtonImg} style={styles.backButtonImg} />
        </TouchableOpacity>
        <Text style={styles.title}>Notification</Text>
      </View>
      {/* Notification container */}
      <View style={styles.container}>
        <FlatList
          data={notifications}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: 16, paddingTop: 8}}
          ListEmptyComponent={<Text style={styles.emptyText}>No notifications available</Text>}
        />
      </View>
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
    marginBottom: 8,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#b3c6e0',
    marginHorizontal: 16,
    marginBottom: 8,
    flex: 1,
    minHeight: 300,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  notificationItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 10,
  },
  notificationText: {
    fontSize: 15,
    color: '#222',
    marginBottom: 2,
  },
  notificationTime: {
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 40,
    fontSize: 16,
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

export default Notification; 