import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native"
import { useRoute, useNavigation } from "@react-navigation/native";
import PieChart from 'react-native-pie-chart';
import styles from "../Styles/DashboardStyles";
import { IP } from "@env";

const Dashboard = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { eventId, userId } = route.params;
  const [ arrivedCount, setArrivedCount ] = useState(0)
  const [ yetToArriveCount, setYetToArriveCount] = useState(0)
  const [ prePaidSales, setPrePaidSales ] = useState(0)
  const [ salesOnDoor, setSalesOnDoor ] = useState(0)
  const [ arrivedSeries, setArrivedSeries ] = useState([1, 1])
  const [ salesSeries, setSalesSeries ] = useState([1, 1])
  const [ totalSales, setTotalSales ] = useState(0)

  const getEventData = async () => {
    try {
      const response = await fetch(`${IP}/events/get-data?userId=${userId}&eventId=${eventId}`, {
        method: "GET",
      });
      if (response.ok) {
        console.log("Dashboard data retrieved successfully");
        const data = await response.json();
        setArrivedCount(data.arrivedCount);
        setYetToArriveCount(data.yetToArriveCount);
        setPrePaidSales(data.prePaidSales);
        setSalesOnDoor(data.salesOnDoor);
        setArrivedSeries(data.arrivedSeries)
        setSalesSeries(data.salesSeries)
        setTotalSales(data.totalSales)
      } else {
        console.log("No data retrieved");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {   
    const unsubscribe = navigation.addListener("focus", async () => {
      if (userId) {
        await getEventData();
      }
    });

    return unsubscribe;
  }, [eventId, navigation]);

  const totalGuests = arrivedCount + yetToArriveCount
  const arrivedPercentage = (arrivedCount / totalGuests) * 100
  const yetToArrivePercentage = (yetToArriveCount / totalGuests) * 100
    
  const widthAndHeight = 230
  const sliceColor = ['#fbd203', '#ff9100']

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>GUESTS</Text>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={arrivedSeries}
          sliceColor={sliceColor}
          coverRadius={0.45}
          coverFill={'#FFF'}
          style={styles.pieChart}
        />
      <View style={styles.labelsContainer}>
        <View style={styles.arrived}/>
        <Text>Arrived: {arrivedCount} ({arrivedPercentage.toFixed()}%)</Text>
      </View>
      <View style={styles.labelsContainer}>
        <View style={styles.yetToArrive}/>
        <Text>Yet to arrive: {yetToArriveCount} ({yetToArrivePercentage.toFixed()}%)</Text>
      </View>
      <Text style={styles.text}>SALES</Text>
        <PieChart
            widthAndHeight={widthAndHeight}
            series={salesSeries}
            sliceColor={sliceColor}
            coverRadius={0.45}
            coverFill={'#FFF'}
            style={styles.pieChart}
        />
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