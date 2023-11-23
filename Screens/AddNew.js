import React, { useState, useEffect } from 'react';
import {
  Alert,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import alert from '../alert';

export default function ProfileManager() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    // Load profiles from AsyncStorage when the component mounts
    loadProfiles();
  }, []);

  const saveProfiles = async (newProfiles) => {
    try {
      await AsyncStorage.setItem('profiles', JSON.stringify(newProfiles));
    } catch (error) {
      console.error('Error saving new staff record:', error);
    }
  };

  const loadProfiles = async () => {
    try {
      const savedProfiles = await AsyncStorage.getItem('profiles');
      if (savedProfiles !== null) {
        setProfiles(JSON.parse(savedProfiles));
      }
    } catch (error) {
      console.error('Error loading page:', error);
    }
  };

  const handleAddNew = () => {
    if (firstName.trim() === '' || lastName.trim() === '') {
    // Show an error message or perform any desired action
      Alert.alert('First name and last name are mandatory');
    return;
    }

    const newProfile = { fname: firstName, lname: lastName, nDepartment:department,nHomeAddress: homeAddress, nPhone: phone, nEmailAddress: email};
    const newProfiles = profiles.concat(newProfile);
    
    setProfiles(newProfiles);
    saveProfiles(newProfiles);
    setFirstName('');
    setLastName('');    
    setDepartment('');
    setHomeAddress('');
    setPhone('');    
    setEmail('');
  };

  const deleteProfile = (index) => {
    return alert(
      'Remove record',
      'Are you sure you want to remove this staff profile record?',
      [
        // The "No" button
        {
          text: 'No',
        },
        // The "Yes" button
        {
          text: 'Yes',
          onPress: () => {
            let profileList = profiles.concat();
            profileList.splice(index, 1);
            setProfiles(profileList);
            saveProfiles(profileList);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container1}>
      <Text style={styles.header}>Add New Staff Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter first name here"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter last name here"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter department here"
        value={department}
        onChangeText={(text) => setDepartment(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter home address here"
        value={homeAddress}
        onChangeText={(text) => setHomeAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter phone number here"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter email address here"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddNew}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <View style={styles.body}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={profiles}
          renderItem={({item, index}) => (
            <View style={styles.taskItem}>
              <Text style={styles.fname}>{item.fname} {item.lname} {item.nDepartment}</Text>
              <TouchableOpacity
                style={styles.deleteButton}        
                onPress={() => deleteProfile(index)}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
    </View>
    </View>
  );
}

const styles = require('../Styles');
