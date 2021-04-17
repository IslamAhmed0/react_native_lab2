import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Profile = ()=> {
    return(
        <View style={styles.container}>
            <Text style={{ fontSize: 10,color: 'white'}}>
                my Profile :)
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default Profile;
