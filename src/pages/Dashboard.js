import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import PieChart from 'react-native-pie-chart';
import {backgroundGray} from '../Constants';
import LineChartHome from '../components/LineChart/LineChartHome';
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
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


// ...


  return (
    <GestureHandlerRootView>
    <NativeViewGestureHandler>
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',paddingTop:5,paddingBottom:40
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
              <View
                style={{flexDirection: 'row', paddingRight: 15}}
                key={index}>
                <View
                  style={{
                    justifyContent: 'center',
                    marginLeft: 10,
                    padding: 10,
                  }}>
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
        <View  style={{marginBottom: 40}}>
          <LineChartHome title={'Ortalama Doğal Gaz Faturası'}/>
        </View>
        <View  style={{marginBottom: 40}}>
          <LineChartHome title={'Ortalama Elektrik Faturası'} />
        </View>
        <View  style={{marginBottom: 40}}>
          <LineChartHome title={'Ortalama Su Faturası'} />
        </View>
      </View>
    </ScrollView>
    </NativeViewGestureHandler>
    </GestureHandlerRootView>
  );
};
export default Dashboard;
