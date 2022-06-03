import {ScrollView, View, Button, Text} from 'react-native';
import React from 'react';
import client from '../api/client.js';

const Home = () => {
  const [data, setData] = React.useState({});

  const getData = async () => {
    try {
      const res = await client.get();
      const result = await res.data.rates;

      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  const renderData = () => {
    return Object.keys(data).map(keys => {
      const temp = data[keys];
      return (
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
          }}>
          <Text>Name : {temp.name}</Text>
          <Text> --Value : {temp.value}</Text>
        </View>
      );
    });
  };

  return (
    <View>
      <Button title="fetch" onPress={getData} />
      <ScrollView>{renderData()}</ScrollView>
    </View>
  );
};

export default Home;
