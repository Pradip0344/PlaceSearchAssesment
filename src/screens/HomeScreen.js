import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import MapViewComponent from '../components/MapViewComponent';
import HistoryList from '../components/HistoryList';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation, setHistory } from '../redux/actions';
import { saveHistory, getHistory } from '../utils/storage';

const API_KEY = 'AIzaSyBN-RS53GakQuh_uvGA_8Vx6_8V1YrclT8';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { location, history } = useSelector(state => state);

  useEffect(() => {
    getHistory().then(data => dispatch(setHistory(data)));
  }, []);

  const onSelectPlace = async (place_id, description) => {
    const res = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json`, {
      params: { place_id, key: API_KEY }
    });

    const loc = res.data.result.geometry.location;
    const region = {
      latitude: loc.lat,
      longitude: loc.lng,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };

    dispatch(setLocation(region));
    const newPlace = { place_id, description };
    await saveHistory(newPlace);
    dispatch(setHistory([newPlace, ...history.filter(h => h.place_id !== place_id)]));
  };

  return (
    <View style={styles.container}>
      <SearchBar onSelectPlace={onSelectPlace} />
      <MapViewComponent location={location} />
      <HistoryList history={history} onSelect={onSelectPlace} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 }
});

export default HomeScreen;
