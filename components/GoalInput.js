import { 
  StyleSheet, 
  View, 
  Button, 
  TextInput, 
  Modal,
  Image
} from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
  
  const [enteredGoalText, setEnteredGoalText] = useState('');
  
  function goalInputHandler(enteredText) {
    //console.log(enteredText);
    setEnteredGoalText(enteredText);
  };  
  
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput 
          style={styles.textInput} 
          placeholder='Input your course goal!'
          onChangeText={goalInputHandler}
          value={enteredGoalText}  
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color='#5e0acc' />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;


const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
//    justifyContent: 'space-between',
    alignItems: 'center',
    //paddingBottom: 24,
//    marginBottom: 24,
    padding: 16,
//    borderBottomWidth: 1,
//    borderBottomColor: '#cccccc',
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 8,
    width: '100%',
    padding: 16
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8
  },
});
