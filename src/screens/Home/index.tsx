import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert, FlatList } from "react-native";
import { style } from './style'
import { Participants } from "../../components/Participants";
export default function Home() {

    const [participants, setParticipants] = useState<string[]>([])
    const [participantsName, setParticipantsName] = useState('')

    function handleParticipantAdd() {
        if (participants.includes(participantsName)) {
            return Alert.alert('Participante existe', 'Esse participante já existe em sua lista!')
        }

        setParticipants(prevState => [...prevState, participantsName]);
        setParticipantsName('');
    }

    function handleParticipantRemove(name: string) {
        Alert.alert('Remover', `Você deseja remover ${name}`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => (prevState.filter(participants => participants !== name)))
            },
            {
                text: 'Não',
                style: "cancel"
            }
        ])
    }

    return (
        <View style={style.container}>
            <Text style={style.eventName}>
                Nome do evento
            </Text>
            <Text style={style.eventDate}>
                Sexta, 4 de novembro de 2022
            </Text>
            <View style={style.form}>
                <TextInput
                    style={style.input}
                    placeholder="Nome do participante"
                    placeholderTextColor={'#6b6b6b'}
                    onChangeText={e => setParticipantsName(e)}

                    // A letra (e) de event, pois ele dispara um evento
                    // também pode ser usado assim
                    // onChangeText={setParticipantsName}

                    value={participantsName}
                />
                <TouchableOpacity style={style.button} onPress={handleParticipantAdd}>
                    <Text style={style.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participants
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    () => (
                        <Text style={style.emptyParticipants}>
                            Nenhum participante chegou ao seu evento? Cadastre novos participantes...
                        </Text>
                    )
                }
            />
        </View>
    )
}