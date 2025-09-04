import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
// Header and BottomNav intentionally omitted in this layout

const Call = ({ navigation, route }) => {
  const [incidentType, setIncidentType] = useState(route?.params?.incidentType || '');
  const [callStatus, setCallStatus] = useState('idle'); // idle, calling, connected, ended
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);
  const [isOnHold, setIsOnHold] = useState(false);
  const timerRef = useRef(null);

  // Cleanup timer on component unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Validate incident type on component mount
  useEffect(() => {
    if (!incidentType) {
      console.warn('No incident type provided, redirecting to report page');
      navigation.navigate('Report');
    }
  }, [incidentType, navigation]);

  const handleStartCall = async () => {
    try {
      // Validate that incident type is present
      if (!incidentType) {
        Alert.alert('Error', 'No incident type specified. Please go back and select an incident type.');
        navigation.navigate('Report');
        return;
      }

      setCallStatus('calling');
      
      // Simulate API call to backend
      // const response = await fetch('/api/emergency-call/start', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     incidentType,
      //     userId: 'current-user-id', // Get from auth context
      //     location: 'user-location', // Get from GPS
      //     timestamp: new Date().toISOString()
      //   })
      // });
      
      // if (response.ok) {
      //   const callData = await response.json();
      //   console.log('Call initiated:', callData);
      // }

      // Simulate call connection after 3 seconds
      setTimeout(() => {
        setCallStatus('connected');
        startCallTimer();
      }, 3000);
    } catch (error) {
      console.error('Error starting call:', error);
      setCallStatus('idle');
    }
  };

  const handleEndCallClick = () => {
    // Directly end the call without confirmation
    handleEndCall();
  };

  const handleEndCall = async () => {
    try {
      // Validate call status before ending
      if (callStatus !== 'connected' && callStatus !== 'calling') {
        console.warn('Cannot end call: Call is not active');
        return;
      }

      // Simulate API call to backend to end the call
      // await fetch('/api/emergency-call/end', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     callId: 'current-call-id',
      //     duration: callDuration,
      //     endTime: new Date().toISOString()
      //   })
      // });

      // Simulate API call to create emergency report
      // const reportResponse = await fetch('/api/emergency-reports/create', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     incidentType,
      //     userId: 'current-user-id',
      //     location: 'user-location',
      //     callDuration,
      //     timestamp: new Date().toISOString(),
      //     status: 'pending'
      //   })
      // });

      setCallStatus('ended');
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      setCallDuration(0);
      
      // Navigate to waiting screen after call ends
      setTimeout(() => {
        navigation.navigate('Waiting', {
          incidentType,
          callDuration,
          timestamp: new Date().toISOString(),
          fromWitnessReport: route?.params?.fromWitnessReport || false,
          fromSOS: route?.params?.fromSOS || false,
          fromVictim: route?.params?.fromVictim || false
        });
      }, 2000);
    } catch (error) {
      console.error('Error ending call:', error);
    }
  };

  const startCallTimer = () => {
    timerRef.current = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleMuteToggle = async () => {
    try {
      // Simulate API call to backend
      // await fetch('/api/emergency-call/mute', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     callId: 'current-call-id',
      //     muted: !isMuted
      //   })
      // });

      setIsMuted(!isMuted);
    } catch (error) {
      console.error('Error toggling mute:', error);
    }
  };

  const handleSpeakerToggle = () => {
    setIsSpeakerOn(!isSpeakerOn);
  };

  const handleVideoToggle = async () => {
    try {
      // Simulate API call to backend
      // await fetch('/api/emergency-call/video', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     callId: 'current-call-id',
      //     videoEnabled: !isVideoEnabled
      //   })
      // });

      setIsVideoEnabled(!isVideoEnabled);
    } catch (error) {
      console.error('Error toggling video:', error);
    }
  };

  const handleAddCall = () => {
    // Implement add call functionality
    console.log('Add call functionality');
  };

  const handleKeypad = () => {
    // Implement keypad functionality
    console.log('Keypad functionality');
  };

  const handleHold = async () => {
    try {
      // Simulate API call to backend
      // await fetch('/api/emergency-call/hold', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     callId: 'current-call-id',
      //     onHold: !isOnHold
      //   })
      // });

      setIsOnHold(!isOnHold);
    } catch (error) {
      console.error('Error toggling hold:', error);
    }
  };

  return (
    <View style={styles.callContainer}>
      <View style={styles.contentScroll}>
        {/* Call Interface */}
        <View style={styles.callInterface}>
          {/* Top Menu */}
          <View style={styles.callMenu}>
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuDots}>⋮</Text>
            </TouchableOpacity>
          </View>

          {/* Call Info */}
          <View style={styles.callInfo}>
            <Text style={styles.callerName}>MDRRMO</Text>
            {callStatus === 'connected' && (
              <Text style={styles.callDuration}>{formatTime(callDuration)}</Text>
            )}
            {callStatus === 'calling' && (
              <Text style={styles.callStatusText}>Connecting...</Text>
            )}
            {callStatus === 'idle' && (
              <Text style={styles.callStatusText}>Ready to call</Text>
            )}
          </View>

          {/* Call Controls - only End Call */}
          <View style={styles.callControls}>
            <View style={styles.singleControlRow}>
              <View style={styles.endCallWrapper}>
                <TouchableOpacity 
                  style={[styles.endCallButton]}
                  onPress={callStatus === 'idle' ? handleStartCall : handleEndCallClick}
                >
                  <Image 
                    source={require('../../assets/endcall.png')} 
                    style={styles.controlImage}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <Text style={styles.controlLabel}>
                  {callStatus === 'idle' ? 'Start Call' : 'End Call'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

  
    </View>
  );
};

const styles = StyleSheet.create({
  callContainer: {
    backgroundColor: '#1a237e',
    minHeight: '100%',
    position: 'relative',
  },
  contentScroll: {
    paddingTop: 40,
    paddingBottom: 60,
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  callInterface: {
    width: '100%',
    maxWidth: 350,
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  callMenu: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  menuButton: {
    padding: 10,
  },
  menuDots: {
    color: '#e53935',
    fontSize: 28,
    fontWeight: 'bold',
  },
  callInfo: {
    alignItems: 'center',
    marginBottom: 200,
  },
  callerName: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'white',
  },
  callDuration: {
    fontSize: 20,
    color: '#e3f2fd', 
    fontFamily: 'monospace',
  },
  callStatusText: {
    fontSize: 18,
    color: '#e3f2fd',
    opacity: 0.8,
  },
  callControls: { 
    width: '100%',
    gap: 30,
  },
  controlRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 25,
  },
  singleControlRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  endCallWrapper: {
    alignItems: 'center',
    marginTop: 20,
  },
  controlButton: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 40,
    width: 80,
    height: 80,
    padding: 8,
  },
  controlButtonActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  endCallButton: {
    backgroundColor: '#d6dbe6',
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlIcon: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    marginTop: 0,
  },
  controlImage: {
    width: 26,
    height: 26,
  },
  controlLabel: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white',
    lineHeight: 14,
    marginTop: 10,
  },
});

export default Call;
