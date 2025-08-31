import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, Alert } from 'react-native';
import { LOGIN_FORM_FIELDS, ACTION_BUTTONS, validateField } from '../../utils/formConfig';

export default function Login({ navigation }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Handle form input changes
  const handleInputChange = (key, value) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
    
    // Clear error when user starts typing
    if (errors[key]) {
      setErrors(prev => ({
        ...prev,
        [key]: null
      }));
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    const newErrors = {};
    
    // Validate all fields
    LOGIN_FORM_FIELDS.forEach(field => {
      const error = validateField(formData[field.key], field.validation);
      if (error) {
        newErrors[field.key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      
      // Simple frontend-only login logic
      if (formData.email && formData.password) {
        Alert.alert(
          'Login Successful',
          'Welcome! You have successfully logged in.',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Dashboard')
            }
          ]
        );
      } else {
        Alert.alert(
          'Login Failed',
          'Please enter valid email and password.',
          [{ text: 'OK' }]
        );
      }
    }, 1000);
  };

  // Placeholder background image (use your own if available)
  const backgroundImage = require('../../assets/background.jpg');
  const logoImage = require('../../assets/logo.jpg');

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <Image source={logoImage} style={styles.logo} />
        <View style={styles.formContainer}>
          <Text style={styles.title}>LOGIN</Text>
          
          {LOGIN_FORM_FIELDS.map((field) => (
            <View key={field.key} style={styles.fieldContainer}>
              <TextInput
                style={[styles.input, errors[field.key] && styles.inputError]}
                placeholder={field.placeholder}
                placeholderTextColor="#888"
                value={formData[field.key]}
                onChangeText={(value) => handleInputChange(field.key, value)}
                keyboardType={field.keyboardType}
                autoCapitalize={field.autoCapitalize}
                secureTextEntry={field.secureTextEntry}
                editable={!isLoading}
              />
              {errors[field.key] && (
                <Text style={styles.errorText}>{errors[field.key]}</Text>
              )}
            </View>
          ))}

          {ACTION_BUTTONS.login.map((button) => (
            <TouchableOpacity
              key={button.key}
              style={[
                styles.button,
                button.style === 'primary' ? styles.primaryButton : styles.textButton,
                isLoading && styles.disabledButton
              ]}
              onPress={button.key === 'login' ? handleSubmit : button.onPress}
              disabled={isLoading}
            >
              <Text style={[
                styles.buttonText,
                button.style === 'primary' ? styles.primaryButtonText : styles.textButtonText,
                isLoading && styles.disabledButtonText
              ]}>
                {isLoading ? 'Logging in...' : button.text}
              </Text>
            </TouchableOpacity>
          ))}

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account yet?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Registration')} disabled={isLoading}>
              <Text style={styles.signupLink}> Sign Up</Text>
            </TouchableOpacity>
          </View>

          {/* Frontend Only Notice */}
          <View style={styles.frontendNoticeContainer}>
            <Text style={styles.frontendNoticeTitle}>Frontend Only</Text>
            <Text style={styles.frontendNoticeText}>
              This is a frontend-only login form. No backend integration required.
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 30,
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  formContainer: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 20,
    padding: 25,
    marginTop: 40,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#222',
  },
  fieldContainer: {
    width: '100%',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 5,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#eee',
  },
  inputError: {
    borderColor: '#ff4444',
  },
  errorText: {
    color: '#ff4444',
    fontSize: 12,
    marginLeft: 5,
  },
  button: {
    width: '100%',
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  primaryButton: {
    backgroundColor: '#0a2c6b',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  textButton: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
    width: 'auto',
    height: 'auto',
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  primaryButtonText: {
    color: '#fff',
  },
  disabledButtonText: {
    color: '#666',
  },
  textButtonText: {
    color: '#222',
    fontSize: 13,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  signupText: {
    color: '#222',
    fontSize: 14,
  },
  signupLink: {
    color: '#0a2c6b',
    fontWeight: 'bold',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  frontendNoticeContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    borderRadius: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(76, 175, 80, 0.3)',
  },
  frontendNoticeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 8,
    textAlign: 'center',
  },
  frontendNoticeText: {
    fontSize: 12,
    color: '#2e7d32',
    textAlign: 'center',
    lineHeight: 16,
  },
});

