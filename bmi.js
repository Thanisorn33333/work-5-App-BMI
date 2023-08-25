import react from "react";
import { View,Text,StyleSheet, Alert, Button, TextInput, Image} from "react-native";

export default function BMI(){

    let [inputNum1, setInputNum1] = react.useState(0)
    let [inputNum2, setInputNum2] = react.useState(0)
    let [result, setResult] = react.useState(0)
    let [display, setdisplay] = react.useState(0)
    let [picture, setPicture] = react.useState('')
  
    const onPressButton1 = () =>{
        let imageName=''
        let num1 =parseInt(inputNum1)
        let num2 =parseInt(inputNum2)
        let num3 = num2/100
        let num4 = num3*num3
        let consult = num1 / num4
        
        if (consult >= 35){
            msg = 'Extreme Obesity'
            imageName = require('./5.jpg')
          }
          else if (consult <= 29.90 && b >= 25)
          {
             msg = 'Obesity'
            imageName = require('./4.jpg')
          }
          else if (consult <= 24.90 && b >= 23)
          {
             msg = 'Overweight'
            imageName = require('./3.jpg')
          }
          else if (consult <= 22.90 && b >= 18.5)
          {
            msg = 'Normal weight'
            imageName = require('./2.jpg')
          }
          else if (consult <= 18.5)
          {
            msg = 'Underweight'
            imageName = require('./1.jpg')
          }
          else
          {
            msg = 'กรุณากรอกน้ำหนัก-ส่วนสูง'
          }

        setdisplay(msg)
        setResult(consult.toFixed(2))
        setPicture(imageName)

    }

    return(
    
        <View style={styles.container}>
            <View><Text>BMI App</Text></View>
            <View style={styles.item}>
                <Text>ส่วนสูง</Text>
                <TextInput style={styles.textInput} defaultValue={inputNum1}
                onChange={event => setInputNum1(event.nativeEvent.text)}
                keyboardType='numeric'               
                />    
            </View>
            <View style={styles.item}>
                <Text>น้ำหนัก</Text>
                <TextInput style={styles.textInput} defaultValue={inputNum2} 
                onChange={event => setInputNum2(event.nativeEvent.text)}
                keyboardType='numeric'
                />    
            </View>
            <View>
                <Text> BMI : {result}</Text>
                <Text> ผลลัพธ์ : {display}</Text>
                <Image source={picture} styles={styles.img}/>
               
                
            </View>  

           <View style={styles.item}>
                <Button title="คำนวณ" color="#A52A2A" onPress={ onPressButton1 }/>   
            </View> 
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column', 
        marginTop: 100,
        alignItems: 'center'
    },
    item:{
        marginBottom:20,
        marginBotton:15
    },
    textInput:{ 
        hight:200,
        width:120,
        borderWidth:1,
        borderColor:'#2F4F4F',
        color:'Black',
        backgroundColor:'#FFFAFA',
        marginTop:5,
        paddingTop:3,
        paddingButtom:3

    },
    img:{
        width: 200,
        height: 200,
        borderWidth: 1,
        borderColor: '#0000FF',
        marginBottom: 5
    
    }
})







