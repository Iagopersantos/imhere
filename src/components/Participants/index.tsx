import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./style";

type Props = {
    name: string
    onRemove: () => void;
}

export function Participants({name, onRemove}: Props) {
    return (
        <View style={style.container}>
            <Text style={style.name}>
                {name}
            </Text>
            <TouchableOpacity style={style.button} onPress={onRemove}>
                    <Text style={style.buttonText}>
                        -
                    </Text>
                </TouchableOpacity>
        </View>
    )
} 