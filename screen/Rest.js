import { Text, Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'

const Rest = () => {
  return (
    <ScrollView>
    <View style={styles.headerText} >
        <Text style={{ color: "black", fontSize: 24 }}>การนอนสำหรับผู้สูงวัย</Text>
    </View>

    <View style={styles.middle} >
        <Image source={require('../img/cover_rest.jpg')} style={styles.image390} />
        <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10 }}>
        กรมอนามัยขอแนะหลัก 10 ประการ เพื่อสุขอนามัยการนอนหลับที่ดี ดังนี้
          </Text>
        <Text style={styles.text}>
            1) เข้านอนและตื่นนอนให้ตรงเวลาทุกวัน
        </Text>
        <Text style={styles.text}>
            2) รับแสงแดดในตอนเช้าอย่างน้อย 30 นาที 
        </Text>
        <Text style={styles.text}>
            3) ไม่นอนในเวลากลางวัน ถ้าหลีกเลี่ยงไม่ได้ ก็ไม่ควรเกิน 30 นาที
        </Text>
        <Text style={styles.text}>
            4) ควรออกกำลังกายอย่างสม่ำเสมอ แต่ก่อนนอน 2 ชั่วโมงไม่ควรออกกําลังกาย
        </Text>
        <Text style={styles.text}>
            5) หลีกเลี่ยงคาเฟอีน และอาหารมื้อหนักอย่างน้อย 4 ชั่วโมงก่อนนอน
        </Text>
        <Text style={styles.text}>
            6) งดการดื่มแอลกอฮอล์ และ สูบบุหรี่ อย่างน้อย 4 ชั่วโมงก่อนนอน
        </Text>
        <Text style={styles.text}>
            7) นอนเตียงนอนที่สบาย
        </Text>
        <Text style={styles.text}>
            8) ควรผ่อนคลาย เพื่อลดความวิตกกังวล
        </Text>
        <Text style={styles.text}>
            9) ควรใช้ห้องนอนเพื่อการนอนเท่านั้น ไม่เล่นโทรศัพท์มือถือ หรือกินอาหารบนเตียงนอน
        </Text>
        <Text style={styles.text}>
            10) หากนอนไม่หลับภายใน 30 นาที ควรลุกไปทำกิจกรรมอื่นๆ แล้วกลับมานอนใหม่อีกครั้ง
        </Text>

      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>ที่มา : https://multimedia.anamai.moph.go.th/news/100366/</Text>
    </View>
      
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: '#FFFFFF',
      padding: 20,
      margin: 10,
    },
    headerText: {
    padding: 1,
    flex: 0.10,
    backgroundColor: '#FFFFFF',
    },
    middle: {
      padding: 1,
      flex: 0.40,
      backgroundColor: '#FFFFFF',
      marginTop: 0,
      },
    text: {
      fontSize: 20,
      padding: 10,
    },
  });
export default Rest