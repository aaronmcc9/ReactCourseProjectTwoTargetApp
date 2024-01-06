import { Text, Image, StyleSheet, View, useWindowDimensions, ScrollView } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {

    const { width, height } = useWindowDimensions();

    let imgSize = 300;

    if (width < 380)
        imgSize = 150;

    if (height < 400)
        imgSize = 150;

    const imageStyle = {
        width: imgSize,
        height: imgSize,
        borderRadius: imgSize / 2
    }
    let content = <>
        <View style={[styles.imageContainer, imageStyle]}>
            <Image style={styles.image}
                source={require('../assets/images/success.png')} />
        </View>

        <Text style={styles.summaryText}>Your phone needed
            <Text style={styles.highlight}> {roundsNumber}</Text> rounds to guess number
            <Text style={styles.highlight}> {userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>

    </>

    if (width > 500) {
        imgSize = 150;
        imgBorderRadius = 150;

        content = <>
            <View style={styles.contentContainerWide}>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image style={styles.image}
                        source={require('../assets/images/success.png')} />
                </View>

                <View style={styles.rightContentWide}>
                    <Text style={styles.summaryText}>Your phone needed
                        <Text style={styles.highlight}> {roundsNumber}</Text> rounds to guess number
                        <Text style={styles.highlight}> {userNumber}</Text>
                    </Text>
                    <PrimaryButton onPress={onStartNewGame}
                    >Start New Game</PrimaryButton>
                </View>

            </View>
        </>
    }
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>GAME OVER!</Title>
                {content}
            </View>
        </ScrollView>
    )
}
export default GameOverScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainerWide: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    rightContentWide: {
        width: "50%"
    },
    imageContainer: {
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
})