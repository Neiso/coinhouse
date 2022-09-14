// React
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

// Global style
import GlobalStyle from '../styles/style'

export default function Lookup() {
  return (
    <View style={styles.container}>
      <Text style={styles.helperText}>Please enter a valid ethereum address:</Text>
      <TextInput
        style={styles.addressInputContainer}
        placeholder='Ex: 0xf7eB7637DeD2696B152c7D5EDEe502902B0F1c91'
        placeholderTextColor={GlobalStyle.grey}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={() => { }}>
        <Text style={styles.buttonText}>Lookup</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.bgColor,
    alignItems: 'center',
    paddingTop: 30
  },
  helperText: {
    fontSize: 11,
    color: GlobalStyle.white
  },
  addressInputContainer: {
    width: GlobalStyle.vw * 0.85,
    height: 40,
    backgroundColor: GlobalStyle.inputBgColor,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: GlobalStyle.white
  },
  buttonContainer: {
    width: GlobalStyle.vw * 0.3,
    height: 40,
    backgroundColor: GlobalStyle.buttonColor,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    fontSize: 15,
    color: GlobalStyle.white
  }
})