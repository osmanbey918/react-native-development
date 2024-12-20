import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        if (!name || !email || !message) {
            Alert.alert('Error', 'All fields are required!');
            return;
        }

        const userMessage = firestore().collection('contacts');
        // const docRef = addDoc(collection('contacts'), data);
        try {
            console.log('Contact Data:', userMessage.user);
            await userMessage.addDoc({
                name,
                email,
                message,
                createdAt: firestore.FieldValue.serverTimestamp(),
            });
            console.log('Contact Data:', { name, email, message });
            Alert.alert('Success', 'Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            Alert.alert('Error', 'Failed to send message!');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Contact Us</Text>

            <TextInput
                style={styles.input}
                placeholder="Your Name"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Your Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.textArea}
                placeholder="Your Message"
                multiline
                numberOfLines={5}
                value={message}
                onChangeText={setMessage}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#f4f4f4',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    textArea: {
        height: 100,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ContactUs;
