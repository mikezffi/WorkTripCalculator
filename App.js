import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {
  const [arrive, setArrive] = useState(new Date(new Date().setHours(0,0,0,0)));
  const [leave, setLeave] = useState(new Date());
  const [tripDuration, setTripDuration] = useState(new Date(new Date().setHours(0,0,0,0)));
  const [arriveResult, setArriveResult] = useState(new Date(new Date().setHours(0,0,0,0)));
  const [leaveResult, setLeaveResult] = useState(new Date(new Date().setHours(0,0,0,0)));

  const onChangeArrive = (event, selectedDate) => {
    setArrive(selectedDate);
  };
  const onChangeLeave = (event, selectedDate) => {
    setLeave(selectedDate);
  };
  const onChangeTrip = (event, selectedDate) => {
    setTripDuration(selectedDate);
  };

  const Calculate = () => {
    var arriveTime = arrive.getTime();
    var leaveTime = leave.getTime();
    var tripH = tripDuration.getHours();
    var tripM = tripDuration.getMinutes();
    var tripTotal = (tripM + (tripH * 60)) * 60000
    
    setArriveResult(new Date(arriveTime - tripTotal / 2))
    setLeaveResult(new Date(leaveTime + tripTotal / 2))
  };

  return (
    <View className={styles.container}>
      <Text>Horário de chegada no cliente:</Text>
      <DateTimePicker
        testID="dateTimePicker"
        value={arrive}
        mode={'time'}
        is24Hour={true}
        display="default"
        onChange={onChangeArrive}
        />
      <Text>Horário de saída:</Text>
      <DateTimePicker
        testID="dateTimePicker"
        value={leave}
        mode={'time'}
        is24Hour={true}
        display="default"
        onChange={onChangeLeave}
      />
      <Text>Tempo total de viagem:</Text>
      <DateTimePicker
        testID="dateTimePicker"
        value={tripDuration}
        mode={'time'}
        is24Hour={true}
        display="default"
        onChange={onChangeTrip}
      />

      <Button title='Calculate' onPress={Calculate}></Button>
      <Text>Horário de chegada:</Text>
      <Text>{arriveResult.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'})}</Text>
      <Text>Horário de saída:</Text>
      <Text>{leaveResult.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'})}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
});
