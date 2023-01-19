import { 
  StyleSheet, 
  View, 
  Button, 
  TextInput, 
  Modal
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
        <TextInput style={styles.textInput} 
          placeholder='Input your course goal!'
          onChangeText={goalInputHandler}
          value={enteredGoalText}  
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler}></Button>
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel}></Button>
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
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8
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
