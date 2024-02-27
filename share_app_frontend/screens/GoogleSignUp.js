import { useEffect } from 'react';
import { Linking, StyleSheet } from 'react-native';

const GoogleSignUp = ({ navigation }) => {

   useEffect(() =>{
    Linking.openURL("http://10.145.83.42:3000/user-service/auth/google")
   }, [])
}

const styles = StyleSheet.create({
    container: {
        height: 1000,
        width:450
    }
})

export default GoogleSignUp;