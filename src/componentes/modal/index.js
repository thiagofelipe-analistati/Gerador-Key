import { View, StyleSheet, Text, TouchableOpacity, Pressable} from "react-native"

export default function ModalPassword( {password, handleClose}){
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}> Senha Gerada </Text>
                <Pressable style={styles.innerPassword}>
                    <Text style={styles.innerText}> {password}</Text>
                </Pressable>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text  style={styles.buttonText}> Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}> salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container :{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content:{
        backgroundColor: "#fff",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000",
        marginBottom: 24
    },
    innerPassword:{
        backgroundColor: "#0e0e0e",
        width: '90%',
        padding: 14,
        borderRadius: 8
    },
    innerText:{
        color: "#FFF",
        textAlign:'center'
    }, 
    buttonArea:{
        flexDirection: 'row',
        width: '90%',
        marginTop: 8,
        alignItems:'center',
        justifyContent: 'space-between'
    },
    button:{
        flex: 1,
        alignItems: 'center',
        marginTop:14,
        marginBottom: 14,
        padding:8
    },
    buttonText:{

   },
   buttonSave:{
    backgroundColor: "#392de9",
    borderRadius: 8
   },
   buttonSaveText:{
    color: "#FFF",
    fontWeight: 'bold'
   }
})