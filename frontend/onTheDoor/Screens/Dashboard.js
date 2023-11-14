import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native"
import { useRoute } from "@react-navigation/native";
import PieChart from 'react-native-pie-chart';
import styles from "../Styles/DashboardStyles";

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
  }, [event, prePaidSales, salesOnDoor]);

  const totalGuests = arrivedCount + yetToArriveCount
  const arrivedPercentage = (arrivedCount / totalGuests) * 100
  const yetToArrivePercentage = (yetToArriveCount / totalGuests) * 100

  const widthAndHeight = 230
  const arrivedSeries = [arrivedCount, yetToArriveCount]
  const salesSeries = [prePaidSales, salesOnDoor]
  const sliceColor = ['#fbd203', '#ff9100']

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>GUESTS</Text>
      { yetToArriveCount > 0 && (
        <PieChart
          widthAndHeight={widthAndHeight}
          series={arrivedSeries}
          sliceColor={sliceColor}
          coverRadius={0.45}
          coverFill={'#FFF'}
          style={styles.pieChart}
        />
      )}
      <View style={styles.labelsContainer}>
        <View style={styles.arrived}/>
        <Text>Arrived: {arrivedCount} ({arrivedPercentage.toFixed()}%)</Text>
      </View>
      <View style={styles.labelsContainer}>
        <View style={styles.yetToArrive}/>
        <Text>Yet to arrive: {yetToArriveCount} ({yetToArrivePercentage.toFixed()}%)</Text>
      </View>
      <Text style={styles.text}>SALES</Text>
      { prePaidSales > 0 && (
        <PieChart
            widthAndHeight={widthAndHeight}
            series={salesSeries}
            sliceColor={sliceColor}
            coverRadius={0.45}
            coverFill={'#FFF'}
            style={styles.pieChart}
        />
      )}
      <View style={styles.labelsContainer}>
        <View style={styles.arrived}/>
        <Text>Pre Paid Sales: {prePaidSales.toFixed(2)}</Text>
      </View>
      <View style={styles.labelsContainer}>
        <View style={styles.yetToArrive}/>
        <Text>Sales On Door: {salesOnDoor.toFixed(2)}</Text>
      </View>
      <Text>Total Sales: {totalSales.toFixed(2)}</Text>
    </SafeAreaView>
  );
};

export default Dashboard;