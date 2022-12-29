import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-navigation';
import PieChart from 'react-native-pie-chart';
import { LineChart } from 'react-native-chart-kit';
import total_invoice_chart from './../total_invoice_chart.json';
import {backgroundGray} from '../Constants';
const Dashboard = props => {
  const widthAndHeight = 180;
  // const [series, setSeries] = useState([])
  // const [sliceColor, setSliceColor] = useState([])

  const series = [500, 120, 80];
  const sliceColor = ['#b7d935', '#4fc9da', '#e8c445'];
  const invoices = [
    {
      id: 0,
      name: 'Doğal Gaz',
      color: '#b7d935',
    },
    {
      id: 1,
      name: 'Elektrik',
      color: '#4fc9da',
    },
    {
      id: 2,
      name: 'Su',
      color: '#e8c445',
    },
  ];
  // useEffect(()=>{
  //   let testSeries = []
  //   let testSliceColor = []
  //   total_invoice_chart.map((data)=>{
  //     testSeries.push(data.invoice_amount)
  //     testSliceColor.push(data.color)
  //   })
  //   setSeries(testSeries)
  //   setSliceColor(testSliceColor)
  // },[])
  return (
    <SafeAreaView
      style={{
        paddingTop: 80,
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: 360,
          height: 270,
          flexDirection: 'row',
          backgroundColor: backgroundGray,
          borderRadius: 20,
        }}>
        <View style={{marginLeft: 15, marginTop: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>700₺</Text>
          <Text style={{color: 'gray', marginBottom: 10}}>
            Bu Ayın Toplam Faturası
          </Text>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverFill={'white'}
            coverRadius={0.65}
          />
        </View>
        <View style={{marginLeft: 40, marginTop: 50, margin: 40}}>
          {invoices.map((item, index) => (
            <View style={{flexDirection: 'row', paddingRight: 15}} key={index}>
              <View
                style={{justifyContent: 'center', marginLeft: 10, padding: 10}}>
                <Text
                  style={{
                    backgroundColor: item.color,
                    borderRadius: 100,
                    width: 15,
                    height: 10,
                  }}></Text>
              </View>
              <View style={{paddingTop: 5}}>
                <Text style={{color: '#000', fontSize: 15}}>{item.name}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View>
      <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={350} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
      </View>
    </SafeAreaView>
  );
};
export default Dashboard;
