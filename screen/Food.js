import { Text, Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'

const Food = () => {
  return (
    <ScrollView>
    <View style={styles.headerText} >
        <Text style={{ color: "black", fontSize: 24 }}>โภชนาการสำหรับผู้สูงอายุ</Text>
    </View>

    <View style={styles.middle} >
        <Image source={require('../img/cover_food.jpg')} style={styles.image390} />
        <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10 }}>
          กินเพลิน
          </Text>
        <Text style={styles.text}>
        สร้างบรรยากาศการรับประทานอาหารให้อร่อย ด้วยการรับประทานอาหารพร้อมหน้าพร้อมตาทั้งครอบครัว มีกิจกรรมทำร่วมกัน เช่น ร่วมกันปรุงประกอบอาหาร เปลี่ยนบรรยากาศรับประทานอาหารนอกบ้าน หรือไปเที่ยวทั้งครอบครัวเป็นบางโอกาส
        </Text>

        <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10 }}>
          เจริญตา
        </Text>
        <Text style={styles.text}>
        เลือกรับประทานอาหารที่อุดมด้วยวิตามิน เอ บี1 บี12 ซี อี ลูทีน ซีแซนทีน ซิลิเนียม และสังกะสี ซึ่งช่วยในการทำงานของจอประสาทตา ชะลอการเกิดต้อกระจกและจอประสาทตาเสื่อม ซึ่งพบใน ตำลึง ฟักทอง กะหล่ำดอก ผักบุ้ง บร็อคโคลี แครอท ข้าวโพด ฝรั่ง ส้ม มะละกอ ผลไม้ตระกูลเบอร์รี่ ตับ ไข่ หอยนางรม ปลา นม และน้ำมันพืช เป็นต้น
        </Text>

        <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10 }}>
        พาจำดี
        </Text>
        <Text style={styles.text}>
        บำรุงสมองและระบบประสาท ป้องกันการชาตามปลายมือปลายเท้า ด้วยการรับประทานอาหารที่มีกรดไขมันโอเมก้า3 สารสื่อประสาทโคลิน เลซิตินและวิตามินบีต่างๆ ได้แก่ บี1 บี6 และบี12 เป็นต้น ซึ่งพบใน ปลาทะเลน้ำลึก ใบแปะก๊วย ไข่แดง กล้วย ถั่วเหลืองและข้าวกล้อง เป็นต้น
        </Text>

      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>ที่มา : https://www.gj.mahidol.ac.th/main/knowledge-2/nutrition/</Text>
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
export default Food