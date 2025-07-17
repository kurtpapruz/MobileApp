import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Report = ({ navigation }) => {
  const userAvatar = require('../assets/user.png');
  const backButtonImg = require('../assets/backbutton.png');

  const [reporterType, setReporterType] = useState('Victim');

  const incidentTypes = [
    { label: 'Fire', color: '#ff6666' },
    { label: 'Medical Emergency', color: '#66e066' },
    { label: 'Disaster\n(Earthquake, Floods, etc)', color: '#ffe066' },
    { label: 'Vehicular Accident', color: '#66c6ff' },
    { label: 'Trauma', color: '#b3a0ff' },
    { label: 'Ambulance Services', color: '#ff99e6' },
  ];

  return (
    <View style={{flex: 1, backgroundColor: '#f7f8fa'}}>
      {/* HEADER (avatar only) */}
      <View style={styles.header}>
        <View style={styles.headerLeft}></View>
        <TouchableOpacity style={styles.accountButton} onPress={() => navigation.navigate('Profile')}>
          <Image source={userAvatar} style={styles.avatar} />
        </TouchableOpacity>
      </View>
      {/* Title row with back button and Report text */}
      <View style={styles.titleRow}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={backButtonImg} style={styles.backButtonImg} />
        </TouchableOpacity>
        <Text style={styles.title}>Report Incident</Text>
      </View>
      {/* Reporter Type Toggle */}
      <View style={styles.toggleRow}>
        <Text style={styles.toggleLabel}>Reporter Type:</Text>
        <TouchableOpacity
          style={[styles.toggleButton, reporterType === 'Victim' && styles.toggleButtonActiveVictim]}
          onPress={() => setReporterType('Victim')}
        >
          <Text style={[styles.toggleButtonText, reporterType === 'Victim' && styles.toggleButtonTextActiveVictim]}>Victim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, reporterType === 'Witness' && styles.toggleButtonActiveWitness]}
          onPress={() => setReporterType('Witness')}
        >
          <Text style={[styles.toggleButtonText, reporterType === 'Witness' && styles.toggleButtonTextActiveWitness]}>Witness</Text>
        </TouchableOpacity>
      </View>
      {/* Incident Type Container */}
      <View style={styles.incidentContainer}>
        <Text style={styles.incidentLabel}>Incident Type:</Text>
        <View style={styles.incidentGrid}>
          {incidentTypes.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={[styles.incidentButton, { backgroundColor: item.color }]}
              onPress={() => {
                if (reporterType === 'Witness') {
                  navigation.navigate('WitnessReport', { incidentType: item.label });
                } else {
                  // You can add Victim flow here if needed
                }
              }}
            >
              <Text style={styles.incidentButtonText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginBottom: 10,
  },
  toggleLabel: {
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: 10,
    color: '#222',
  },
  toggleButton: {
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 6,
    marginRight: 8,
  },
  toggleButtonActiveVictim: {
    backgroundColor: '#e53935',
  },
  toggleButtonActiveWitness: {
    backgroundColor: '#e53935',
  },
  toggleButtonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 15,
  },
  toggleButtonTextActiveVictim: {
    color: '#fff',
  },
  toggleButtonTextActiveWitness: {
    color: '#fff',
  },
  incidentContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#b3c6e0',
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 100,
    padding: 22,
    minHeight: 520,
    // Remove flex: 1 and justifyContent
  },
  incidentLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    color: '#222',
  },
  incidentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'stretch',
  },
  incidentButton: {
    flexDirection: 'row',
    flexBasis: '48%',
    flexGrow: 1,
    minHeight: 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    marginRight: '5',
    // Remove paddingVertical and paddingHorizontal
  },
  incidentButtonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
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

export default Report; 