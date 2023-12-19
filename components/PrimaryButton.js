import { Pressable, Text, View, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
    function pressHandler() {

    }
    return (
        <View style={styles.butttonOuterContainer}>
            <Pressable onPress={pressHandler}
                style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    butttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden' //can hide ripple efffect feedback should it go outside the container
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonText: {
        color: 'white',
        textAlign: "center"
    },
    pressed:{
        opacity: 0.75,
    }
})