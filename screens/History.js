import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const History = ({ navigation }) => {
  const userAvatar = require('../assets/user.png');
  const backButtonImg = require('../assets/backbutton.png');
  const notifIcon = require('../assets/notification.png');
  const reportIcon = require('../assets/report.png');

  // Backend-ready: reports should be fetched from backend or passed as props
  const reports = [];

  const statusColor = (status) => {
    switch (status) {
      case 'En Route': return { color: '#1041BC' };
      case 'Resolved': return { color: '#2ecc40' };
      case 'Cancelled': return { color: '#e53935' };
      case 'Pending': return { color: '#f7b84b' };
      default: return { color: '#888' };
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#f7f8fa'}}>
      {/* HEADER (avatar only) */}
      <View style={styles.header}>
        <View style={styles.headerLeft}></View>
        <TouchableOpacity style={styles.accountButton} onPress={() => navigation.navigate('Profile')}>
          <Image source={userAvatar} style={styles.avatar} />
        </TouchableOpacity>
      </View>
      {/* Title row with back button and Recent Reports text */}
      <View style={styles.titleRow}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={backButtonImg} style={styles.backButtonImg} />
        </TouchableOpacity>
        <Text style={styles.title}>Recent Reports</Text>
        <TouchableOpacity style={styles.reportButton} onPress={() => navigation.navigate('Report')}>
          <Text style={styles.reportButtonText}>Report</Text>
          <Image source={reportIcon} style={styles.reportButtonIcon} />
        </TouchableOpacity>
      </View>
      {/* Reports Container */}
      <ScrollView contentContainerStyle={{paddingBottom: 120}} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {reports.length === 0 ? (
            <Text style={{textAlign: 'center', color: '#888', fontSize: 16, marginVertical: 30}}>
              No reports available.
            </Text>
          ) : (
            reports.map((item, idx) => (
              <View key={item.id} style={[styles.reportCard, idx !== reports.length - 1 && styles.reportCardBorder]}> 
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                  <Text style={styles.reportDate}>{item.date}</Text>
                  <Text style={[styles.status, statusColor(item.status)]}>{item.status}</Text>
                </View>
                <Text style={styles.incidentType}>Incident Type: <Text style={{color: '#e53935', fontWeight: 'bold'}}>{item.type}</Text></Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>
            ))
          )}
        </View>
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
    flex: 1,
  },
  reportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e53935',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginLeft: 10,
    marginRight: 12,
  },
  reportButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: 6,
  },
  reportButtonIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#b3c6e0',
    marginHorizontal: 16,
    marginBottom: 8,
    padding: 10,
  },
  reportCard: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  reportCardBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  reportDate: {
    color: '#222',
    fontSize: 15,
    marginBottom: 2,
    fontWeight: '500',
  },
  incidentType: {
    color: '#222',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  location: {
    color: '#222',
    fontSize: 14,
    marginBottom: 2,
  },
  status: {
    fontWeight: 'bold',
    fontSize: 15,
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

export default History; 