import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../Components/ResidentHeader/Header';
import BottomNav from '../Components/ResidentHeader/BottomNav';

const History = ({ navigation }) => {
  const backButtonImg = require('../../assets/backbutton.png');
  const reportIcon = require('../../assets/report.png');

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
    <View style={styles.historyContainer}>
      {/* Header */}
      <Header navigation={navigation} />
      
      <View style={styles.titleContainer}>
        <View style={styles.titleLeft}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image source={backButtonImg} style={styles.backButtonIcon} />
          </TouchableOpacity>
          <Text style={styles.title}>History</Text>
        </View>
        <TouchableOpacity style={styles.reportButton} onPress={() => navigation.navigate('Report')}>
          <Text style={styles.reportButtonText}>Report</Text>
          <Image source={reportIcon} style={styles.reportButtonIcon} />
        </TouchableOpacity>
      </View>
      
      {/* Reports Container */}
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {reports.length === 0 ? (
            <Text style={styles.emptyText}>No reports available.</Text>
          ) : (
            <View style={styles.reportsList}>
              {reports.map((item, idx) => (
                <View key={item.id} style={[styles.reportCard, idx !== reports.length - 1 && styles.reportCardBorder]}>
                  <View style={styles.reportHeader}>
                    <Text style={styles.reportDate}>{item.date}</Text>
                    <Text style={[styles.status, statusColor(item.status)]}>{item.status}</Text>
                  </View>
                  <Text style={styles.incidentType}>
                    Incident Type: <Text style={styles.incidentTypeBold}>{item.type}</Text>
                  </Text>
                  <Text style={styles.location}>{item.location}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
      
      {/* Bottom Navigation */}
      <BottomNav navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  historyContainer: {
    backgroundColor: '#f7f8fa',
    minHeight: '100%',
    position: 'relative',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 18,
    marginLeft: 12,
    marginRight: 12,
  },
  titleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
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
  reportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e53935',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
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
  scrollContainer: {
    paddingBottom: 120,
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
  reportsList: {
    // Container for reports list
  },
  reportCard: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  reportCardBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  reportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  reportDate: {
    color: '#222',
    fontSize: 15,
    marginBottom: 2,
    fontWeight: '500',
    margin: 0,
  },
  incidentType: {
    color: '#222',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
    margin: 0,
  },
  incidentTypeBold: {
    color: '#e53935',
    fontWeight: 'bold',
  },
  location: {
    color: '#222',
    fontSize: 14,
    marginBottom: 2,
    margin: 0,
  },
  status: {
    fontWeight: 'bold',
    fontSize: 15,
    margin: 0,
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
    marginVertical: 30,
  },
});

export default History; 