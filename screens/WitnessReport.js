import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';

const WitnessReport = ({ navigation }) => {
  const userAvatar = require('../assets/user.png');
  const backButtonImg = require('../assets/backbutton.png');
  

  return (
    <View style={{flex: 1, backgroundColor: '#f7f8fa'}}>
      {/* HEADER (avatar only) */}
      <View style={styles.header}>
        <View style={styles.headerLeft}></View>
        <TouchableOpacity style={styles.accountButton} onPress={() => navigation.navigate('Profile')}>
          <Image source={userAvatar} style={styles.avatar} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{paddingBottom: 120}} showsVerticalScrollIndicator={false}>
        {/* Title row with back button and Report text */}
        <View style={styles.titleRow}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image source={backButtonImg} style={styles.backButtonImg} />
          </TouchableOpacity>
          <Text style={styles.title}>Report Incident</Text>
        </View>
        {/* Incident Type */}
        <Text style={styles.label}>Incident Type:</Text>
        <View style={styles.inputBox}>
          <Text style={styles.inputText}></Text>
        </View>
        {/* Location */}
        <Text style={styles.label}>Location:</Text>
        <View style={styles.inputBox}>
          <Text style={styles.inputText}></Text>
        </View>
        {/* Pin Location */}
        <Text style={styles.label}>Pin Location:</Text>
        <View style={styles.mapBox}></View>
        {/* Button under map */}
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Submit Report</Text>
        </TouchableOpacity>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 18,
    marginBottom: 6,
    color: '#222',
  },
  inputBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d1d5db',
    marginHorizontal: 16,
    marginBottom: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  inputText: {
    fontSize: 16,
    color: '#222',
  },
  mapBox: {
    marginHorizontal: 16,
    marginBottom: 18,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#b3c6e0',
    height: 220,
  },
  mapImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  actionButton: {
    backgroundColor: '#e53935',
    marginHorizontal: 16,
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
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

export default WitnessReport; 