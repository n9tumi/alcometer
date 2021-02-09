import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import {Picker} from '@react-native-picker/picker';

export default function App() {
const [weight, setWeight] = useState(0);
const [bottle, setBottle] = useState(1);
const [hour, setHour] = useState(1);
const [gender, setGender] = useState('male');
const [promilles, setPromilles] = useState(0);

const bottles= Array();
bottles.push({label: '1 bottle',value: 1});
bottles.push({label: '2 bottles',value: 2});
bottles.push({label: '3 bottles',value: 3});
bottles.push({label: '4 bottles',value: 4});
bottles.push({label: '5 bottles',value: 5});
bottles.push({label: '6 bottles',value: 6});
bottles.push({label: '7 bottles',value: 7});
bottles.push({label: '8 bottles',value: 8});
bottles.push({label: '9 bottles',value: 9});

const hours= Array();
hours.push({label: '1 hour',value: 1});
hours.push({label: '2 hours',value: 2});
hours.push({label: '3 hours',value: 3});
hours.push({label: '4 hours',value: 4});
hours.push({label: '5 hours',value: 5});
hours.push({label: '6 hours',value: 6});
hours.push({label: '7 hours',value: 7});
hours.push({label: '8 hours',value: 8});
hours.push({label: '9 hours',value: 9});
hours.push({label: '10 hours',value: 10});

const genders = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'}
];

function calculate(){
  
  let result = 0;
  let liters = bottle * 0.33;
  let grams = liters * 8 * 4.5;
  let burning = weight / 10
  let gramsL = grams-burning * hour

  if (gender === 'male'){
    result = gramsL / (weight * 0.7)
  }
  else{
    result = gramsL / (weight * 0.6)
  }
  if (result > 0){
  setPromilles(result)
  }
  else{
    result = 0;
  }

}

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>Weight</Text>
        <TextInput
        style={styles.input}
        onChangeText={text => setWeight(text)}
        placeholder="in kilograms"
        keyboardType='numeric'></TextInput>
      </View>
      <View style={styles.field}>
        <Text>Bottles</Text>
        <Picker onValueChange={(itemValue) => setBottle(itemValue)}
        selectedValue={bottle}>
          {bottles.map((bottle,index) => (
            <Picker.Item key={index} label={bottle.label} value={bottle.value}/>
          ))}
        </Picker>
      </View>
      <View style={styles.field}>
        <Text>Time</Text>
        <Picker onValueChange={(itemValue) => setHour(itemValue)}
        selectedValue={hour}>
          {hours.map((hour,index) => (
            <Picker.Item key={index} label={hour.label} value={hour.value}/>
          ))}
        </Picker>
      </View>
      <View style={styles.field}>
        <Text>Gender</Text>
        <RadioForm
          style={styles.radio}
          buttonSize = {10}
          radio_props={genders}
          initial={0}
          onPress={(value) => {setGender(value)}}/>
      </View>
      <View style={styles.field}>
        <Text>Promilles</Text>
        <Text>{promilles.toFixed(2)}</Text>
      </View>
      <Button onPress={calculate} title="Calculate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  field: {
    margin: 10,
  },
  input: {
    marginLeft: 10,
  },
  radio: {
    marginTop: 10,
    marginBottom: 10,
  },

});
