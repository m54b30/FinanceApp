import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    StatusBar,
    TextInput,
    SafeAreaView,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'

import fire from '../config/Fire';

import { Actions } from 'react-native-router-flux'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).then((u) => { })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content' />
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logo} source={require('../../assets/logo.jpg')} />
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                    onChangeText={email =>
                                        this.setState({ email })
                                    }
                                    onChange={this.handleChange}
                                    placeholder="Enter email"
                                    placeholderTextColor="white"
                                    keyboardType="email-address"
                                    returnKeyType="next"
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                                />
                                <TextInput style={styles.input}
                                    onChangeText={password =>
                                        this.setState({ password })
                                    }
                                    onChange={this.handleChange}
                                    placeholder="Enter password"
                                    placeholderTextColor="white"
                                    returnKeyType="go"
                                    secureTextEntry={true}
                                    autoCorrect={false}
                                    ref={"txtPassword"}
                                />
                                <TouchableOpacity style={styles.buttonContainer} onPress={this.signup}>
                                    <Text style={styles.buttonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'rgb(143,143,145)',
        paddingBottom: 100
    },
    logo: {
        width: 300,
        height: 200
    },
    infoContainer: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        padding: 20,
        height: 250,
        backgroundColor: 'rgb(143,143,145)'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255 ,255, 0.2)',
        color: '#fff',
        marginBottom: 20,
        borderRadius: 5,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#f4c744',
        borderRadius: 5,
        paddingVertical: 15,
        marginHorizontal: 100,
        marginBottom: 10,
        height: 20
    },
    buttonText: {
        textAlign: 'center',
        color: 'rgb(32,53,70)',
        fontWeight: 'bold',
        fontSize: 11,
        marginTop: -9
    },
    buttonContainerText: {
        paddingTop: 15
    }
})