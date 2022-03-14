import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {
  const [arrive, setArrive] = useState(new Date(1598051730000));
  const [leave, setLeave] = useState(new Date(1598051730000));
  const [tripDuration, setTripDuration] = useState(new Date(1598051730000));
  const [arriveResult, setArriveResult] = useState(new Date(1598051730000));
  const [leaveResult, setLeaveResult] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    setArrive(selectedDate);
  };
  const onChange2 = (event, selectedDate) => {
    setLeave(selectedDate);
  };
  const onChange3 = (event, selectedDate) => {
    setTripDuration(selectedDate);
  };

  const Calculate = () => {
    var arriveTime = arrive.getTime();
    var arriveH = arrive.getHours();
    var arriveM = arrive.getMinutes();
    var leaveTime = leave.getTime();
    var leaveH = leave.getHours();
    var leaveM = leave.getMinutes();
    var tripTime = tripDuration.getTime();
    var tripH = tripDuration.getHours();
    var tripM = tripDuration.getMinutes();
    var tripTotal = (tripM + (tripH * 60)) * 60000

    var resultH = new Date(arrive.getTime() - tripTotal).getHours()
    var resultM = new Date(arrive.getTime() - tripTotal).getMinutes()
    
    setArriveResult(new Date(arrive.getTime() - tripTotal / 2))
    setLeaveResult(new Date(leave.getTime() + tripTotal / 2))

    console.log(resultH)
    console.log(resultM)
  };

  return (
    <View className={styles.container}>
      <Text>Horário de chegada no cliente:</Text>
      <DateTimePicker
        testID="dateTimePicker"
        value={arrive}
        mode={'time'}
        //timeZoneOffsetInMinutes={''}
        is24Hour={true}
        display="default"
        onChange={onChange}
        />
      <Text>Horário de saída:</Text>
      <DateTimePicker
        testID="dateTimePicker"
        value={leave}
        mode={'time'}
        //timeZoneOffsetInMinutes={''}
        is24Hour={true}
        display="default"
        onChange={onChange2}
      />
      <Text>Tempo total de viagem:</Text>
      <DateTimePicker
        testID="dateTimePicker"
        value={tripDuration}
        mode={'time'}
        //timeZoneOffsetInMinutes={''}
        is24Hour={true}
        display="default"
        onChange={onChange3}
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
