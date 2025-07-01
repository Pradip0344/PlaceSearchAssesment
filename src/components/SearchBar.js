import React, { useState, useEffect } from 'react';
import { TextInput, FlatList, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import axios from 'axios';

const API_KEY = 'AIzaSyBN-RS53GakQuh_uvGA_8Vx6_8V1YrclT8';

const SearchBar = ({ onSelectPlace }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length < 3) return;
    // console.log('query length and what is query',query);
    const fetch = async () => {
      const res = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json`, {
        params: { input: query, key: API_KEY }
      });
      setResults(res.data.predictions);
    console.log('query length and what is query',res.data);

    };

    fetch();
  }, [query]);

  return (
    <View>
      <TextInput style={styles.input} placeholder="Search..." value={query} onChangeText={setQuery} />
      <FlatList
        data={results}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => onSelectPlace(item.place_id, item.description)}>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.place_id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: { padding: 10, borderWidth: 1, margin: 10,  height:50 },
  item: { padding: 10 }
});

export default SearchBar;
