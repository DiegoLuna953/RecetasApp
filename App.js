import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import RecipeDetails from './components/RecipeDetails';

export default App = () => {
  const [recipes, setRecipes] = useState('');
  const [ingredient, setIngredient] = useState ('');
  const [error, setError] = useState(null);

  const API_KEY = '7908c68a7a4b4539a9c8571736295b51';
  
  const getRecipe = async () => {
    try{
      const res = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredient}`);
      const data = await res.json();
      setRecipes(data);
    } catch (err) {
      setError('Error al obtener las recetas')
    }
  };

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la app de recetas</Text>
      <View style={styles.container2}>
      <TextInput
      style={styles.textInput}
      placeholder='Ingrese el ingrediente'
      value={ingredient}
      onChangeText={(text) => setIngredient(text)}
      />
      </View>
      <View style={styles.container3}>
      <TouchableOpacity style={styles.button} onPress={getRecipe}>
        <Text style={styles.textButton}>Obtener recetas</Text>
      </TouchableOpacity>
      </View>
      {error && <Text>{error}</Text>}
      {recipes.length > 0 && (
        <View style={styles.container4}>
          {recipes.map((recipe, index) => (
            <Text key={index} style={styles.textSalida} onPress={RecipeDetails}>
              {recipe.title}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B5C0D0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2: {
    alignItems: 'center',
    padding: 10
  },
  container3: {
    alignItems: 'center',
    padding: 10
  },
  title: {
    textAlign: 'center',
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#F5E8DD',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#F5E8DD',
    width: 180,
    height: 50,
    padding: 5,
  },
  button: {
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#F5E8DD',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 40
  },
  textSalida:{
    textAlign: 'center',
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
});