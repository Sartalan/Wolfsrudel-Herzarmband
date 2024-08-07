import { Text, TouchableOpacity, View, StyleSheet, Image, Modal } from 'react-native'
import { WSConnection } from './ConnectionComponents/WSConnection';
import { BLEConnection } from './ConnectionComponents/BLEConnection';
import { Dimensions } from 'react-native';
const Icon = '../../../assets/bluetooth.png'

import { useState } from 'react'

export function ConnectionButton() {

    //  const [connection, setConnection ] = useState('Disconnected ●︿●')
    const [modal, setModal] = useState(false)

    function press() {
        // setConnection(connection === 'Disconnected ●︿●' ? 'Connected ( ͡° ͜ʖ ͡°)' : 'Disconnected ●︿●')
        setModal(modal == true ? false : true)
        console.log(modal == true ? 'Cerre el modal' : 'Abrí el modal')
    }

    return (
        <>
            {
                //?---Modal Zone------
            }
            <Modal
                animationType='fade'
                transparent={true}
                visible={modal == true}>
                <View style={ModalStyle.modalContent}>
                    <TouchableOpacity
                        onPress={press}
                        style={ModalStyle.modalExitButton}
                    />
                    <View style={ModalStyle.modalWifiContent}>
                        <View style={ModalStyle.modalHr} />
                        <WSConnection />
                        <BLEConnection />
                    </View>
                </View>
            </Modal>
            {
                //?---------------
            }
            <View style={ConnectionStyle.connectionContainer}>
                <Text style={ConnectionStyle.connectionText}>Connected</Text>
            </View>

            <TouchableOpacity style={ConnectionStyle.connectionButton} onPress={press} >
                <Image style={ConnectionStyle.bleImage} source={require(Icon)} />
            </TouchableOpacity>
        </>
    )
}

//TODO: ALL THE DESIGN
//TODO: ---------------------------

const deviceWidth = Dimensions.get('window').width;
const connectionButtonRadius = 30;
const ConnectionStyle = StyleSheet.create({

    connectionContainer: {
        backgroundColor: '#74F2CE',
        width: 350,
        height: 150,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    connectionText: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    connectionButton: {
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: connectionButtonRadius,
        borderTopLeftRadius: connectionButtonRadius,
        width: deviceWidth
    },
    bleImage: {
        width: 75,
        height: 75,
    },

})
const ModalStyle = StyleSheet.create({

    //? ---------- MODAL --------------


    modalContent: {
        margin: 25,
        padding: 10,
        flex: 1,
        backgroundColor: '#293241',
        borderRadius: 10,
    },

    modalExitButton: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'white'
    },

    modalWifiContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalHr: {
        width: 150,
        margin: 10,
        height: 2,
        backgroundColor: '#fff',
        opacity: .25,
    },
})


