import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';

const Profile = ({ navigation }) => {
  const userAvatar = require('../assets/user.png');
  const backButtonImg = require('../assets/backbutton.png');

  const handleLogout = () => {
    Alert.alert(
      'Log out',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Log out', style: 'destructive', onPress: () => navigation.navigate('Login') }
      ]
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#f7f8fa'}}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}></View>
        <TouchableOpacity style={styles.accountButton}>
          <Image source={userAvatar} style={styles.avatar} />
        </TouchableOpacity>
      </View>
      {/* Back Button and Profile Title under header */}
      <View style={styles.profileTitleRow}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={backButtonImg} style={styles.backButtonImg} />
        </TouchableOpacity>
        <Text style={styles.profileTitle}>Profile</Text>
      </View>
      <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 90}}>
        {/* First Container: Avatar, Name, Edit Profile */}
        <View style={styles.topContainer}>
          <Image source={userAvatar} style={styles.profileAvatar} />
          <Text style={styles.profileName}>User Name</Text>
          <TouchableOpacity>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        {/* Second Container: Basic Information (design only) */}
        <View style={styles.infoContainer}>
          <View style={styles.infoHeader}>
            <Text style={styles.infoHeaderIcon}>i</Text>
            <Text style={styles.infoHeaderText}> Basic Information</Text>
          </View>
          <View style={styles.infoRow}><Text style={styles.infoLabel}>Full Name:</Text></View>
          <View style={styles.infoRow}><Text style={styles.infoLabel}>Address:</Text></View>
          <View style={styles.infoRow}><Text style={styles.infoLabel}>User ID:</Text></View>
          <View style={styles.infoRow}><Text style={styles.infoLabel}>Email:</Text></View>
          <View style={styles.infoRow}><Text style={styles.infoLabel}>Phone:</Text></View>
          <View style={styles.infoRow}><Text style={styles.infoLabel}>Age:</Text></View>
        </View>
        {/* Buttons */}
        <TouchableOpacity style={styles.changePasswordBtn}>
          <Text style={styles.changePasswordText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>
      {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navIcon}>
          <Image source={require('../assets/history.png')} style={styles.navImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIcon}>
          <Image source={require('../assets/announcement.png')} style={styles.navImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIcon}>
          <Image source={require('../assets/home.png')} style={styles.navImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIcon}>
          <Image source={require('../assets/report.png')} style={styles.navImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIcon}>
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
  profileTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 12,
    marginLeft: 16,
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
  profileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
  },
  topContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#b3c6e0',
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
  },
  editProfileText: {
    color: '#1041BC',
    fontSize: 13,
    textDecorationLine: 'underline',
    marginTop: 2,
  },
  infoContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 18,
    borderRadius: 10,
    padding: 18,
    borderWidth: 1,
    borderColor: '#b3c6e0',
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1041BC',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginHorizontal: -18,
    marginTop: -18,
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  infoHeaderIcon: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 6,
  },
  infoHeaderText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#222',
    width: 90,
  },
  infoValue: {
    color: '#222',
    flex: 1,
    flexWrap: 'wrap',
  },
  changePasswordBtn: {
    backgroundColor: '#2ecc40',
    marginHorizontal: 16,
    marginTop: 24,
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 12,
  },
  changePasswordText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutBtn: {
    backgroundColor: '#e53935',
    marginHorizontal: 16,
    marginTop: 14,
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 24,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
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

export default Profile; 