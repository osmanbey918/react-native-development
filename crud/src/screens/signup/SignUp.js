import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';

const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        // email: '',
        // number: '',
        gender: '',
        // city: '',
        // country: '',
        // address: '',
        password: '',
    });

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };
    const navigation = useNavigation();
    const handleSignup = () => {
        console.log('Signup Data:', formData);
        navigation.navigate('Login');
        // Add your signup logic here
    };

    return (

        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Signup</Text>

            {Object.keys(formData).map((field) => (
                field !== 'gender' ? (
                    <View key={field} style={styles.inputContainer}>
                        <Text style={styles.label}>{field.charAt(0).toUpperCase() + field.slice(1)}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={`Enter ${field}`}
                            value={formData[field]}
                            onChangeText={(value) => handleInputChange(field, value)}
                            secureTextEntry={field === 'password'}
                        />
                    </View>
                ) : (
                    <View key={field} style={styles.inputContainer}>
                        <Text style={styles.label}>Gender</Text>
                        <View style={styles.radioContainer}>
                            {['Male', 'Female'].map((option) => (
                                <TouchableOpacity
                                    key={option}
                                    style={styles.radioButton}
                                    onPress={() => handleInputChange('gender', option)}
                                >
                                    <View style={styles.radioCircle(formData.gender === option)} />
                                    <Text style={styles.radioLabel}>{option}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                )
            ))}
            <Button title="Sign Up" onPress={handleSignup} />
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
    },
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flexGrow: 1,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioCircle: (selected) => ({
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        marginRight: 8,
        backgroundColor: selected ? '#000' : '#fff',
    }),
    radioLabel: {
        fontSize: 16,
    },
});

export default SignUp;
