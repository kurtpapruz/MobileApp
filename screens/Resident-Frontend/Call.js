import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import Header from '../Components/ResidentHeader/Header';
import BottomNav from '../Components/ResidentHeader/BottomNav';

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
            <Text style={styles.callerName}>Responder</Text>
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

          {/* Call Controls Grid */}
          <View style={styles.callControls}>
            {/* Top Row */}
            <View style={styles.controlRow}>
              <TouchableOpacity 
                style={[styles.controlButton, isMuted && styles.controlButtonActive]}
                onPress={handleMuteToggle}
                disabled={callStatus !== 'connected'}
              >
                <View style={styles.controlIcon}>
                  <Image 
                    source={require('../../assets/mute.png')} 
                    style={styles.controlImage}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.controlLabel}>Mute</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.controlButton, isVideoEnabled && styles.controlButtonActive]}
                onPress={handleVideoToggle}
                disabled={callStatus !== 'connected'}
              >
                <View style={styles.controlIcon}>
                  <Image 
                    source={require('../../assets/video.png')} 
                    style={styles.controlImage}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.controlLabel}>Video Call</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.controlButton, isSpeakerOn && styles.controlButtonActive]}
                onPress={handleSpeakerToggle}
                disabled={callStatus !== 'connected'}
              >
                <View style={styles.controlIcon}>
                  <Image 
                    source={require('../../assets/speaker.png')} 
                    style={styles.controlImage}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.controlLabel}>Speaker</Text>
              </TouchableOpacity>
            </View>

            {/* Middle Row */}
            <View style={styles.controlRow}>
              <TouchableOpacity 
                style={styles.controlButton}
                onPress={handleAddCall}
                disabled={callStatus !== 'connected'}
              >
                <View style={styles.controlIcon}>
                  <Image 
                    source={require('../../assets/add.png')} 
                    style={styles.controlImage}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.controlLabel}>Add Call</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.controlButton}
                onPress={handleKeypad}
                disabled={callStatus !== 'connected'}
              >
                <View style={styles.controlIcon}>
                  <Image 
                    source={require('../../assets/keypad.png')} 
                    style={styles.controlImage}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.controlLabel}>Keypad</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.controlButton, isOnHold && styles.controlButtonActive]}
                onPress={handleHold}
                disabled={callStatus !== 'connected'}
              >
                <View style={styles.controlIcon}>
                  <Image 
                    source={require('../../assets/hold.png')} 
                    style={styles.controlImage}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.controlLabel}>Hold</Text>
              </TouchableOpacity>
            </View>

            {/* Bottom Row - End Call */}
            <View style={styles.controlRow}>
              <TouchableOpacity 
                style={[styles.controlButton, styles.endCallButton]}
                onPress={callStatus === 'idle' ? handleStartCall : handleEndCallClick}
              >
                <View style={styles.controlIcon}>
                  <Image 
                    source={require('../../assets/endcall.png')} 
                    style={styles.controlImage}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.controlLabel}>
                  {callStatus === 'idle' ? 'Start Call' : 'End Call'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Confirmation dialog removed */}
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
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  callInfo: {
    alignItems: 'center',
    marginBottom: 30,
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
    backgroundColor: '#f44336',
    width: 90,
    height: 90,
    padding: 10,
  },
  controlIcon: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    marginTop: 4,
  },
  controlImage: {
    width: 24,
    height: 24,
  },
  controlLabel: {
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white',
    lineHeight: 12,
    marginBottom: 2,
  },
});

export default Call;
