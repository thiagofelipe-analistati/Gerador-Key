import { Text, View,  StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import useStorage from '../../hooks/useStorage'
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { PasswordItem } from "../../componentes/passwordItem";

export function Passwords (){
    const { getItem,saveItem, removeItem} = useStorage();
    const [listPassword, setListPassword] = useState([])
    const focused = useIsFocused();

    useEffect(() =>{
        async function loadPasswords (){
            const Passwords = await getItem("@pass")
            setListPassword(Passwords)
        }
        loadPasswords();
    }, [focused])

    async function handleDeletePassword(item){
        try {
            const passwords =  await removeItem("@pass", item)
            setListPassword( passwords )
        } catch (error) {
            console.log("erro", error)
        }
       
    }
    return(
        <SafeAreaView style={{flex:1}}> 
            <View  style={styles.header}>
                <Text style={styles.title}> Minhas Senhas</Text>
            </View>
            <View style={styles.content} >
                <FlatList 
                    style={{flex:1, paddingTop:14}}
                    data={listPassword}
                    keyExtractor={(item) => String(item)}
                    renderItem={({item}) => <PasswordItem data={item} removePassword={()=> handleDeletePassword(item)}/>}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom:14,
        paddingLeft:14,
        paddingRight:14
    },
    title:{
        fontSize: 18,
        color: "#fff",
        fontWeight: 'bold'
    },
    content:{
        flex: 1,
        paddingLeft:14,
        paddingRight: 14
    }
})