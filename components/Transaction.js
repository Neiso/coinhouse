// React
import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native"

// Deps
import { Octicons } from '@expo/vector-icons';

// Global Style
import GlobalStyle from '../styles/style'

export default function Transaction({ transaction, callback }) {
  const [expand, setExpand] = useState(false)

  return (
    <View style={{ flex: 1 }}>
      <Pressable style={styles.container} onPress={() => { setExpand(!expand) }}>
        <Octicons name="arrow-switch" size={30} color={GlobalStyle.white} />
        <View style={styles.textsContainer}>
          <Text style={styles.valueText}>{transaction.value} ETH</Text>
          <Pressable onPress={() => callback(transaction.to)}>
            <Text style={styles.destinationText}>To:{transaction.to}</Text>
          </Pressable>

          {expand ?
            <View>
              <Text style={styles.destinationText}>Block Hash: {transaction.blockHash}</Text>
              <Text style={styles.destinationText}>Block Number: {transaction.blockNumber}</Text>
              <Text style={styles.destinationText}>Confirmations: {transaction.confirmations}</Text>
              <Text style={styles.destinationText}>Cumulative Gas Used: {transaction.cumulativeGasUsed}</Text>
            </View>
            : null
          }
        </View>
      </Pressable>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyle.black
  },
  valueText: {
    color: GlobalStyle.white,
  },
  destinationText: {
    color: GlobalStyle.grey,
    maxWidth: GlobalStyle.vw * 0.85,
  },
  textsContainer: {
    marginLeft: 10,
  }
})