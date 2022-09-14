// React
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

// Deps
import { BarCodeScanner } from 'expo-barcode-scanner';

// Style
import GlobalStyle from '../styles/style'

export default function QRScanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [address, setAddress] = useState('')

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  function handleBarCodeScanned({ type, data }) {
    setScanned(true);
    setAddress(data)
  };

  function reScan() {
    setAddress('')
    setScanned(false)
  }

  function Lookup() {
    if (!address) return
    navigation.navigate('Lookup', { address })
  }

  if (hasPermission === null || hasPermission === false) {
    return <Text>You need to grant camera permission in order to use the QR code functionnality</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.cameraContainer}
      />
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>Address: {address}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => { reScan(false) }}>
          <Text style={styles.buttonText}>Re:Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={Lookup}>
          <Text style={styles.buttonText}>Lookup</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: GlobalStyle.bgColor
  },
  cameraContainer: {
    width: GlobalStyle.vw,
    flex: 3
  },
  buttonsContainer: {
    flex: 1,
    width: GlobalStyle.vw,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: GlobalStyle.vw * 0.4,
    height: 40,
    marginHorizontal: GlobalStyle.vw * 0.05,
    borderWidth: 1,
    borderColor: GlobalStyle.buttonBorder,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    color: GlobalStyle.white,
    fontWeight: 'bold'
  },
  addressContainer: {
    width: GlobalStyle.vw,
    height: 40,
    backgroundColor: GlobalStyle.black,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addressText: {
    color: GlobalStyle.white
  }
})