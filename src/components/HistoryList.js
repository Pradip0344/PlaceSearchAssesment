import React from 'react';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';

const HistoryList = ({ history, onSelect }) => (
  <View>
    <FlatList
      data={history}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelect(item.place_id, item.description)}>
          <Text style={{ padding: 10 }}>{item.description}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.place_id}
    />
  </View>
);

export default HistoryList;
