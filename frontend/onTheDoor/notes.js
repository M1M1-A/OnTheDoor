import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native"
import { useRoute, useNavigation, useFocusEffect } from "@react-navigation/native";
import PieChart from 'react-native-pie-chart';
import styles from "../Styles/DashboardStyles";
import { IP } from "@env";

const Dashboard = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { eventId, userId } = route.params;
  const [ event, setEvent ] = useState({})
  const [ arrivedCount, setArrivedCount ] = useState(0)
  const [ yetToArriveCount, setYetToArriveCount] = useState(0)
  const [ prePaidSales, setPrePaidSales ] = useState(0)
  const [ salesOnDoor, setSalesOnDoor ] = useState(0)
  const [ totalSales, setTotalSales ] = useState(0)
  // const [ arrivedPercentage, setArrivedPercentage] = useState(0)
  // const [ yetToArrivePercentage, setYetToArrivePercentage ] = useState(0)
  const [ arrivedSeries, setArrivedSeries ] = useState([])
  const [ salesSeries, setSalesSeries ] = useState([])

  const getEvent = async () => {
    try {
      const response = await fetch(
        `${IP}/events/get-event?userId=${userId}&eventId=${eventId}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        console.log("Dashboard event retrieved successfully");
        const data = await response.json();
        setEvent(data.event);
      } else {
        console.log("No event retrieved");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {   
    const unsubscribe = navigation.addListener("focus", () => {
      console.log("Dashboard tab focused");
      if (userId) {
        getEvent();
      }
    });

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
    }

    const calculateTotal = prePaidSales + salesOnDoor
    setTotalSales(calculateTotal)

    setArrivedSeries([arrivedCount, yetToArriveCount])
    setSalesSeries([prePaidSales, salesOnDoor])

    // console.log("Arrived series", arrivedSeries)
    // console.log("Sales series", salesSeries)  

    return unsubscribe;
  }, [event, prePaidSales, salesOnDoor, navigation]));

  const totalGuests = arrivedCount + yetToArriveCount
  const arrivedPercentage = (arrivedCount / totalGuests) * 100
  const yetToArrivePercentage = (yetToArriveCount / totalGuests) * 100
  
  // const arrivedSeries = [arrivedCount, yetToArriveCount]
  // const salesSeries = [prePaidSales, salesOnDoor]  
  
  const widthAndHeight = 230
  const sliceColor = ['#fbd203', '#ff9100']

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>GUESTS</Text>
      { yetToArriveCount >= 0 && (
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
      { prePaidSales >= 0 && (
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