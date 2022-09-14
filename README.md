# GET TRANSACTIONS FROM ETH ADDRESS
To get informations about the transactions of an ETH address, please enter the address in the text input or scan a QR code address containing ONLY the address. If you want more information about specific transaction, you can tap on that transaction and it will roll out more details. You can also click on a "TO" address to search transactions for that address.


### Install
Only run the comand below to install deps
```bash
yarn install
```

Once installed, head to the **app.json** file and add your API KEY in the extra section:
```JSON
{
  "expo": {
    ...
    "extra": {
      "apiKey": "INSERT YOUR API KEY HERE"
    }
  }
}
```

And launch this command to run this project in an expo environnement:
```bash
yarn start
```
### Notes
I took the liberty to add those librairies in order to deliver a better product:
- @shopify/flash-list
- @react-navigation/bottom-tabs
- expo-barcode-scanner
- expo-constants
### Possible upgrades:
- Usage of i18n to make use of language localization
- Use a form of cache for the transactions calls
- Set up and history for easier usage of the app