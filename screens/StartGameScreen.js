import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton"
import { useState } from "react";
import Colors from "../constants/colors";

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('')
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0
            || chosenNumber > 99) {

            Alert.alert('Invalid number!',
                "Number must be between 1 and 99",
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }

        //emit to app screen
        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput}
                maxLength={2}
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber} />

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        // elevation: 4 Android only (shadow)
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: "center"
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: "center",
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    //ensure buttons are same size
    //gave them there own views so align items stretch would apply by default due to flex column 
    buttonContainer: {
        flex: 1
    }
})