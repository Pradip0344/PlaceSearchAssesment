import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveHistory = async (place) => {
  const history = JSON.parse(await AsyncStorage.getItem('history') || '[]');
  const updated = [place, ...history.filter(p => p.place_id !== place.place_id)];
  await AsyncStorage.setItem('history', JSON.stringify(updated.slice(0, 10)));
};

export const getHistory = async () => {
  return JSON.parse(await AsyncStorage.getItem('history') || '[]');
};