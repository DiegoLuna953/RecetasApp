import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RecipeDetails = ({recipe}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.ingredients}>Ingredientes:</Text>
      <Text>{recipe.ingredients.join(', ')}</Text>
      <Text style={styles.instructions}>Instrucciones:</Text>
      <Text>{recipe.instructions}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  ingredients: {
    fontSize: 18,
    marginTop: 8,
  },
  instructions: {
    fontSize: 18,
    marginTop: 16,
  },
});

export default RecipeDetails;