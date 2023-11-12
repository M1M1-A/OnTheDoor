import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native"
import { useRoute } from "@react-navigation/native";

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


  return (
    <SafeAreaView>
      <Text>DASHBOARD</Text>
      <Text>Number Arrived: {arrivedCount}</Text>
      <Text>Number yet to arrive: {yetToArriveCount}</Text>
      <Text>Pre Paid Sales: {prePaidSales.toFixed(2)}</Text>
      <Text>Sales on Door: {salesOnDoor.toFixed(2)}</Text>
      <Text>Total Sales: {totalSales.toFixed(2)}</Text>
    </SafeAreaView>
  )
};

export default Dashboard;