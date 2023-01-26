import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {backgroundGray} from '../../Constants';
const LineChartHome = ({title}) => {
  const widthAndHeight = 180;
  const series = [500, 120, 80];
  const sliceColor = ['#b7d935', '#4fc9da', '#e8c445'];
  const data = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
  ];
  const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
    
  const result = average(data).toFixed(2); 

  return (
    <View
      style={{
        width: 360,
        height: 270,
        flexDirection: 'row',
        backgroundColor: backgroundGray,
        borderRadius: 20,
      }}>
      <View style={{marginLeft: 15, marginTop: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{result}₺</Text>
        <Text style={{color: 'gray', marginBottom: 10}}>
          {title}
        </Text>
        <LineChart
          data={{
            labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mauıs', 'Haziran'],
            datasets: [
              {
                data: data,
              },
            ],
          }}
          width={350} // from react-native
          height={220}
          yAxisLabel=""
          yAxisSuffix="₺"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};
export default LineChartHome;
