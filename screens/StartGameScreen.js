import { View, TextInput, StyleSheet } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton.js"

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput />

            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#27063c',
        borderRadius: 8,
        // elevation: 4 Android only (shadow)
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    }
})