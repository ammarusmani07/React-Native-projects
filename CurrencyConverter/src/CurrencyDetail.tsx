// CurrencyDetail.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const CurrencyDetail = ({ route, navigation }: { route: any, navigation: any }): React.JSX.Element => {
  const { currency, inputAmount } = route.params;
  const [amount, setAmount] = useState(inputAmount.toString());
  const [result, setResult] = useState('');

  const convertCurrency = () => {
    const amountValue = parseFloat(amount);
    if (!isNaN(amountValue)) {
      const convertedValue = amountValue * currency.value;
      const resultString = `${currency.symbol} ${convertedValue.toFixed(2)}`;
      setResult(resultString);

      // Pass the result back to the HomeScreen
      navigation.navigate('Home', { result: resultString, currencyName: currency.name });
    } else {
      setResult('Invalid amount');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{currency.name}</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        keyboardType='number-pad'
        placeholder='Enter amount'
      />
      <Button title="Convert" onPress={convertCurrency} />
      {result && <Text style={styles.result}>{result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 24,
  },
});

export default CurrencyDetail;
