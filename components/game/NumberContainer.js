import { StyleSheet, View, Text } from 'react-native';

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )

}
export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderColor: 'white',
        borderWidth: 4,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: 'white',
        fontSize: 36,
        fontFamily: 'open-sans-bold'
    }

})