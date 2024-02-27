import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const HelpScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Welcome to SHARE</Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Getting Started</Text>
        <Text>Follow these steps to set up your account and start using the app:</Text>
        <Text>1. Download and install the app from the App Store or Google Play.</Text>
        <Text>2. Sign up for an account using your email address.</Text>
        <Text>3. Explore the main features of the app from the home screen.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Navigating the App</Text>
        <Text>Learn how to navigate through different sections of the app:</Text>
        <Text>1. Use the bottom navigation bar to switch between Home, Profile, and Settings.</Text>
        <Text>2. Swipe left or right to browse through item listings or notifications.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Frequently Asked Questions (FAQs)</Text>
        <Text>Find answers to common questions:</Text>
        <Text>Q: How do I edit my profile?</Text>
        <Text>A: Go to the Profile tab and click on the Edit button.</Text>
        <Text>Q: Can I change my password?</Text>
        <Text>A: Yes, visit the Settings screen and choose the Change Password option.</Text>
      </View>

      {/* Add more sections as needed for troubleshooting, contact information, etc. */}

      <Text style={styles.feedbackText}>
        We value your feedback! If you have any questions or suggestions,{' '}
        <Text style={styles.feedbackLink}>contact our support team.</Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  feedbackText: {
    marginTop: 20,
    textAlign: 'center',
  },
  feedbackLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default HelpScreen;
