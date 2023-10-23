import React from 'react'
import { Text, Image, Pressable, StyleSheet, View } from 'react-native'

const Splash = ({navigation}) => {
  const onPressFood = () => {
    navigation.navigate('Food')
}
const onPressRest = () => {
  navigation.navigate('Rest')
}
const onPressSport = () => {
  navigation.navigate('Sport')
}
const onPressRecreat = () => {
  navigation.navigate('Recreat')
}
  return (
        <View style={{ height: "100%", alignItems: "center", backgroundColor: "#0CA7FF" }}>
        <View style={styles.top} >
          <Image source={require('../img/lru.png')} style={{ width: 120, height: 158 }} />
        </View>
            <View style={styles.headerText} >
              <Text style={{ color: "white", fontSize: 24 }}>คู่มือสุขภาพผู้สูงอายุ</Text>
            </View>

            <View style={styles.middle} >
                <Image source={require('../img/cover_01.jpg')} style={styles.image390} />
            </View>

            <View style={styles.grid} >
              <Pressable onPress={onPressFood}>
                <Image source={require('../img/food.jpg')} style={[styles.image120, { marginRight: 10 }]} />
              </Pressable>
              <Pressable onPress={onPressRest}>
                <Image source={require('../img/rest.jpg')} style={[styles.image120, { marginRight: 10 }]} />
              </Pressable>
              <Pressable onPress={onPressSport}>
                <Image source={require('../img/sport.jpg')} style={[styles.image120, { marginRight: 10 }]} />
              </Pressable>
            </View>

            <View style={styles.grid} >
              <Pressable onPress={onPressRecreat}>
                <Image source={require('../img/selfie.jpg')} style={[styles.image120, { marginRight: 10 }]} />
              </Pressable>
                <Image source={require('../img/medicine.jpg')} style={[styles.image120, { marginRight: 10 }]} />
                <Image source={require('../img/doctor.jpg')} style={[styles.image120, { marginRight: 10 }]} />
            </View>
            <View style={styles.bottom} >
                <Text style={{ color: "white", fontSize: 18 }}>คณะวิทยาศาสตร์และเทคโนโลยี</Text>
                <Text style={{ color: "white", fontSize: 16 }}>มหาวิทยาลัยราชภัฏเลย</Text>
            </View>
      </View>
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      padding: 20,
      margin: 10,
    },
    top: {
      padding: 5,
      flex: 0.30,
      backgroundColor: '#0CA7FF',
    },
    headerText: {
    //padding: 1,
    flex: 0.10,
    backgroundColor: '#0CA7FF',
    },
    middle: {
      padding: 1,
        flex: 0.40,
        backgroundColor: '#0CA7FF',
      },
    grid: {
      flexDirection: 'row', // เรียงรูปแนวนอน
      flex: 0.20,
      backgroundColor: '#0CA7FF',
    },
    bottom: {
        width: "100%",
        flex: 0.15,
        backgroundColor: 'hotpink',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image390: {
      width: 390, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
      height: 200, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
      borderRadius: 10,
    },
    image120: {
      width: 120, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
      height: 100, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
      borderRadius: 10,
    },
  });
export default Splash
