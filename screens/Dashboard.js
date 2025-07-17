import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';

const Dashboard = ({ navigation }) => {
  const [data] = useState({
    user: {
      name: '',
      address: '',
      avatar: require('../assets/user.png'),
    },
    emergencyTips: 'Show',
    publicAnnouncements: [],
    recentReports: [],
  });

  return (
    <View style={{flex: 1, backgroundColor: '#f7f8fa'}}>
      {/* CLEAN HEADER - ACCOUNT BUTTON ONLY */}
      <View style={styles.header}>
        <View style={styles.headerLeft}></View>
        <TouchableOpacity style={styles.accountButton} onPress={() => navigation.navigate('Profile')}>
          <Image source={data.user.avatar} style={styles.avatar} />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 90}}>
        {/* User Info Section */}
        <View style={styles.userInfoSection}>
          <Text style={styles.welcome}>Welcome back!</Text>
          <Text style={styles.name}>{data.user.name || 'User Name'}</Text>
          <Text style={styles.address}>{data.user.address || 'User Address'}</Text>
          <TouchableOpacity style={styles.tipsButton}>
            <Text style={styles.tipsButtonText}>Emergency Tips</Text>
            <View style={styles.tipsShowButton}><Text style={styles.tipsShowButtonText}>Show</Text></View>
          </TouchableOpacity>
        </View>

        {/* SOS Section */}
        <View style={styles.sosSection}>
          <Text style={styles.sosTitle}>Are you in an Emergency?</Text>
          <Text style={styles.sosSubtitle}>Press the button to report an emergency.</Text>
          <TouchableOpacity style={styles.sosButton}>
            <View style={styles.sosOuterCircle}>
              <View style={styles.sosInnerCircle}>
                <Text style={styles.sosText}>SOS</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        
        {/* Public Announcements */}
        <Text style={styles.sectionTitle}>Public Announcement</Text>
        {data.publicAnnouncements.length > 0 ? (
          <FlatList
            data={data.publicAnnouncements}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.announcementCard}>
                <Text style={styles.announcementText}>{item.message}</Text>
                <TouchableOpacity style={styles.announcementButton}>
                  <Text style={styles.announcementButtonText}>{item.button}</Text>
                </TouchableOpacity>
              </View>
            )}
            scrollEnabled={false}
          />
        ) : (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyText}>No announcements available</Text>
          </View>
        )}
        
        {/* Recent Reports */}
        <Text style={styles.sectionTitle}>My Recent Report</Text>
        {data.recentReports.length > 0 ? (
          <FlatList
            data={data.recentReports}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.reportCard}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.reportDate}>{item.date}</Text>
                  <Text style={styles.reportType}>Incident Type : <Text style={{ fontWeight: 'bold' }}>{item.type}</Text></Text>
                  <Text style={styles.reportLocation}>{item.location}</Text>
                </View>
                <View style={styles.reportStatusContainer}>
                  <Text style={styles.reportStatus}>{item.status}</Text>
                </View>
              </View>
            )}
            scrollEnabled={false}
          />
        ) : (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyText}>No recent reports</Text>
          </View>
        )}
      </ScrollView>
      
      {/* BOTTOM NAVIGATION WITH ASSETS ICONS */}
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
  appTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
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
  userInfoSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 8,
  },
  welcome: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
  },
  address: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  tipsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  tipsButtonText: {
    fontSize: 14,
    color: '#222',
    marginRight: 8,
  },
  tipsShowButton: {
    backgroundColor: '#e53935',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  tipsShowButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  sosSection: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e53935',
    alignItems: 'center',
    padding: 18,
    margin: 16,
    marginBottom: 18,
  },
  sosTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
    marginBottom: 2,
  },
  sosSubtitle: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  sosButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  sosOuterCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#ffb3b3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sosInnerCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#e53935',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6E120E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  sosText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 36,
    letterSpacing: 2,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 4,
    color: '#222',
    marginLeft: 16,
  },
  announcementCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#b3c6e0',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  announcementText: {
    flex: 1,
    color: '#222',
    fontSize: 14,
  },
  announcementButton: {
    backgroundColor: '#4be37a',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 6,
  },
  announcementButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  reportCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#b3c6e0',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  reportDate: {
    color: '#222',
    fontSize: 13,
    marginBottom: 2,
  },
  reportType: {
    color: '#e53935',
    fontSize: 13,
    marginBottom: 2,
  },
  reportLocation: {
    color: '#666',
    fontSize: 12,
  },
  reportStatusContainer: {
    backgroundColor: '#f7b84b',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginLeft: 10,
  },
  reportStatus: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  emptyCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#b3c6e0',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: '#888',
    fontSize: 14,
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

export default Dashboard; 