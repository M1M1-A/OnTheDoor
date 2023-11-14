import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, ScrollView, View } from "react-native"
import { useRoute } from "@react-navigation/native";
import PieChart from 'react-native-pie-chart';

const Dashboard = () => {
  const [ arrivedCount, setArrivedCount ] = useState(0)
  const [ yetToArriveCount, setYetToArriveCount] = useState(0)
  const [ prePaidSales, setPrePaidSales ] = useState(0)
  const [ salesOnDoor, setSalesOnDoor ] = useState(0)
  const [ totalSales, setTotalSales ] = useState(0)
  const route = useRoute();
  const { event } = route.params;

  useEffect(() => {
    if (event && event.guests) {
      const arrivedGuestsCount = event.guests.reduce(
        (count, guest) => count + (guest.arrived === true ? 1 : 0),
        0
      );
      setArrivedCount(arrivedGuestsCount);

      const yetToArriveGuests = event.guests.reduce(
        (count, guest) => count + (guest.arrived !== true ? 1 : 0),
        0
      );
      setYetToArriveCount(yetToArriveGuests)

      const prePaidGuests = event.guests.reduce(
        (count, guest) => count + (guest.paidStatus === "Pre-Paid" ? parseFloat(guest.pricePaid) : 0),
        0
      )
      setPrePaidSales(prePaidGuests)

      const paidOnDoorGuests = event.guests.reduce(
        (count, guest) => count + (guest.paidStatus === "Paid on door" ? parseFloat(guest.pricePaid) : 0),
        0
      )
      setSalesOnDoor(paidOnDoorGuests)

      const calculateTotal = prePaidSales + salesOnDoor
        setTotalSales(calculateTotal)
    }
  }, [event]);

  const widthAndHeight = 250
  const series = [arrivedCount, yetToArriveCount]
  const sliceColor = ['#fbd203', '#ff9100']

  return (
    <SafeAreaView>
      <Text>DASHBOARD</Text>
      { yetToArriveCount > 0 && (
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.45}
          coverFill={'#FFF'}
        />
      )}
      <View style={styles.labelsContainer}>
        <View style={styles.arrived}/>
        <Text>Number Arrived: {arrivedCount}</Text>
      </View>
      <View style={styles.labelsContainer}>
        <View style={styles.yetToArrive}/>
        <Text>Number yet to arrive: {yetToArriveCount}</Text>
      </View>
      <Text>Pre Paid Sales: {prePaidSales.toFixed(2)}</Text>
      <Text>Sales On Door: {salesOnDoor.toFixed(2)}</Text>
      <Text>Total Sales: {totalSales.toFixed(2)}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  labelsContainer: {
    flexDirection: 'row',
  },
  arrived: {
    width: 20,
    height: 20,
    backgroundColor: '#fbd203',
    marginRight: 10,
  },
  yetToArrive: {
    width: 20,
    height: 20,
    backgroundColor: '#ff9100',
    marginRight: 10,
  }
})

export default Dashboard;