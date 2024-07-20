import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackPramList } from "../App";
import ProductItem from '../components/ProductItem';
import Separator from '../components/Separator';
import { PRODUCTS_LIST } from '../data/constants';
import { useTheme } from '../ThemeContext'
type HomeProps = NativeStackScreenProps<RootStackPramList, "Home">;

const Home = ({ navigation }: HomeProps) => {
  console.log('PRODUCTS_LIST:', PRODUCTS_LIST); // Log products list
  const theme = useTheme()
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => {
          console.log('Rendering item:', item); // Log each item being rendered
          return (
            <Pressable
              onPress={() => {
                console.log('Navigating to Details with item:', item); // Log item being navigated
                navigation.navigate('Details', {
                  product: item
                });
              }}
            >
              <ProductItem product={item} />
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});

export default Home;
