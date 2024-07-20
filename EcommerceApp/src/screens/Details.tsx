import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackPramList } from "../App";
import { useTheme } from '../ThemeContext';

type DetailsProps = NativeStackScreenProps<RootStackPramList, "Details">;

const Details = ({ route }: DetailsProps) => {
  const { product } = route.params;
  const theme = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View>
        <Image style={styles.image} source={{ uri: product.imageUrl }} />
        <View>
          <Text style={[styles.name, { color: theme.text }]}>{product.name}</Text>

          <View style={[styles.rowContainer, styles.ratingContainer]}>
            <View style={styles.rating}>
              <Text style={[styles.ratingText, { color: theme.text }]}>{product.rating} ★</Text>
            </View>
            <Text style={[styles.ratingCount, { color: theme.text }]}>
              ({product.ratingCount.toLocaleString()})
            </Text>
          </View>
          
          <View style={[styles.rowContainer, styles.priceContainer]}>
            <Text style={[styles.originalPrice, theme.lineThroughText ]}>
              Rs:{product.originalPrice.toLocaleString()}
            </Text>
            <Text style={[styles.discountPrice, { color: theme.text }]}>
              Rs:{product.discountPrice.toLocaleString()}
            </Text>
            <Text style={styles.offerPercentage}>
              %{product.offerPercentage} off
            </Text>
          </View>

          {product.tags.map((tag, index) => (
            <View key={index} style={styles.badge}>
              <Text style={styles.tagBadge}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
  },
  image: {
    width: 350,
    height: 500,
    resizeMode: 'contain',
    borderRadius:29,
    justifyContent:'center',
    alignContent:'center'
  },
  rowContainer: {
    flexDirection: 'row',
  },
  name: {
    marginBottom: 4,
    fontSize: 20,
    fontWeight: '500',
  },
  ratingContainer: {
    marginVertical: 12,
  },
  priceContainer: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
    borderRadius: 6,
    backgroundColor:"red"
  },
  rating: {
    marginRight: 4,
    borderRadius: 4,
    paddingHorizontal: 8,
    justifyContent: 'center',
    backgroundColor: '#008c00',
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    
  },
  ratingCount: {
    fontSize: 14,
  },
  originalPrice: {
    fontSize: 13,
    fontWeight: '800',
    marginRight: 8,
  },
  discountPrice: {
    fontSize: 18,
    fontWeight: '600',
  },
  offerPercentage: {
    fontSize: 17,
    fontWeight: '600',
    marginRight: 8,
  },
  badge: {
    margin: 2,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  tagBadge: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default Details;
