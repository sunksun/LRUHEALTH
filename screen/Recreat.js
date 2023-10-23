import { Text, Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'

const Recreat = () => {
  return (
    <ScrollView>
    <View style={styles.headerText} >
        <Text style={{ color: "black", fontSize: 24 }}>กิจกรรมผู้สูงอายุที่น่าสนใจ</Text>
    </View>

    <View style={styles.middle} >
        <Image source={require('../img/cover_food.jpg')} style={styles.image390} />
        <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10 }}>
        เดินทางท่องเที่ยว
          </Text>
        <Text style={styles.text}>
        ถ้าผู้สูงอายุชอบการเดินทาง ชอบท่องเที่ยวให้จัดกิจกรรมผู้สูงอายุพาท่านออจากบ้านบ้าง หาที่เที่ยวใกล้ๆบ้านไม่จำเป็นต้องไปต่างจังหวัดไกล สถานที่ท่องเที่ยวในกทม.สำหรับผู้สูงอายุก็มีเหมือนกัน หรือพาผู้สูงอายุออกมาทานข้าวนอกบ้านช่วยให้สุขภาพจิตของผู้สูงอายุดีขึ้น
        </Text>

        <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10 }}>
        กิจกรรมนันทนาการ
        </Text>
        <Text style={styles.text}>
        กิจกรรมนันทนาการ งานอดิเรกที่ตนเองชอบหรือที่น่าสนใจ เช่น ร้องเพลง เต้นรำ เล่นดนตรี วาดภาพ ถ่ายรูป เขียนบล็อก เขียนกระทู้เล่าเรื่องราวคนตนเองให้คนรุ่นหลังได้อ่าน แถมยังได้ย้อนรำลึกความหลังอีกด้วย นอกจากจะช่วยให้ผู้สูงอายุสนุกๆ ใช้เวลาว่างให้เป็นประโยชน์และผู้สูงอายุรู้สึกภูมิใจด้วย
        </Text>

        <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10 }}>
        อ่านหนังสือ
        </Text>
        <Text style={styles.text}>
        เลือกอ่านเรื่องที่ตนเองสนใจ เช่น ข่าวประจำวัน หนังสือทำอาหาร สารคดี เป็นต้น ยิ่งอ่านเรื่องที่ตนเองชอบจะช่วยให้อ่านได้เพลินมากขึ้น การอ่านหนังสือจะช่วยให้ผู้สูงอายุมีสุขภาพจิตที่ดี เพราะได้ใช้สมอง กระตุ้นความคิด การทำงานของสมองและยังช่วยป้องกันอาการสมองเสื่อม จึงทำให้คนที่อ่านหนังสือมีแนวโน้มอายุยืนกว่าคนไม่อ่าน
        </Text>

        <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10 }}>
        ปลูกต้นไม้ ทำสวน
        </Text>
        <Text style={styles.text}>
        สำหรับบ้านที่มีพื้นที่แนะนำให้ปลูกและดูแลต้นไม้ เพียงแค่รดน้ำเช้า-เย็น ใส่ปุ๋ย ตัดแต่งกิ่ง ใบ กวาดใบไม้ หรือจะหาดอกไม้มาประดับตกแต่งเพิ่ม เพิ่มความสวยงาม ความบริสุทธิ์เย็นสบายรอบบ้านด้วย
        </Text>

      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>ที่มา : บริษัท อาเชอร์ พลัส จำกัด</Text>
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

export default Recreat