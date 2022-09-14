// React
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";

// Deps
import { FlashList } from '@shopify/flash-list'

// Custom components
import Transaction from "./Transaction";

// Global style
import GlobalStyle from '../styles/style'

// API Helper
import { LookupAddress } from './Helper/Api'

export default function Lookup() {
  const [address, setAddress] = useState('0x7a250d5630b4cf539739df2c5dacb4c659f2488d')
  const [isLookinUp, setIsLookingUp] = useState(false)
  const [error, setError] = useState('')
  const [transactions, setTransactions] = useState([])

  async function lookUpAddress(addressToLookUp) {
    setIsLookingUp(true)
    try {
      if (!addressToLookUp.length) return setError('Please enter an address before looking it up!')
      if (addressToLookUp !== address) setAddress(addressToLookUp)
      const result = await LookupAddress(addressToLookUp)
      if (result.data.status === '0') {
        setError(result.data.result)
        return setTransactions([])
      }
      setTransactions(result.data.result)
      setError('')
    } catch (err) {
      setError('Request failed! Please try again later.')
      console.error(err.message)
    } finally {
      setIsLookingUp(false)
    }
  }

  useEffect(() => {
    if (error.length) setError('')
  }, [address])

  return (
    <View style={styles.container}>
      <Text style={styles.helperText}>Please enter a valid ethereum address:</Text>
      <TextInput
        style={styles.addressInputContainer}
        placeholder='Ex: 0xf7eB7637DeD2696B152c7D5EDEe502902B0F1c91'
        placeholderTextColor={GlobalStyle.grey}
        onChangeText={setAddress}
        value={address}
      />
      <Text style={styles.errorText}>{error}</Text>

      {isLookinUp ?
        <View style={styles.isLoadingContainer}>
          <ActivityIndicator />
        </View>
        :
        <TouchableOpacity style={styles.buttonContainer} onPress={() => { lookUpAddress(address) }}>
          <Text style={styles.buttonText}>Lookup</Text>
        </TouchableOpacity>

      }

      {transactions.length ?
        <View style={styles.transactionsContainer}>
          <Text style={styles.transactionsTitle}>{transactions.length} MOST RECENT TRANSACTIONS</Text>
          <FlashList
            renderItem={({ item }) => {
              return <Transaction transaction={item} callback={lookUpAddress} />
            }}
            estimatedItemSize={100}
            data={transactions}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>
        : null
      }

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
    marginTop: 10
  },
  isLoadingContainer: {
    width: GlobalStyle.vw * 0.3,
    height: 40,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: GlobalStyle.white
  },
  transactionsContainer: {
    height: GlobalStyle.vh * 0.6,
    width: GlobalStyle.vw,
    marginTop: 20,
  },
  transactionsTitle: {
    fontSize: 16,
    color: GlobalStyle.white,
    marginBottom: 10,
    alignSelf: 'center'
  },
  errorText: {
    color: GlobalStyle.error
  }
})