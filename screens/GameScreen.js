import { Text, View, StyleSheet } from "react-native";
import { useState } from 'react';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max-min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum;
    }
}

function GameScreen({userNumber}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrrentGuess] = useState(initialGuess);

    return (
        <View style = {styles.screen}>
            <Title>Rakibin Tahmini</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Yukselt veya Azalt</Text>
                {/* + - */}
            </View>
            {/* <View>Oyun kaydi</View> */}
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
})