<template>
  <div class="about">
    <div>
      <h1>บันทึกข้อมูล Covid</h1> 
    </div>
    <p>Date : <input type="text" v-model="date" /></p>
    <p>Name : <input type="text" v-model="name" /></p>
    <p>ATK : test results <input type="text" v-model="atk" /></p>
    <p>Tel : <input type="text" v-model="tel" /></p>
    <p>Email : <input type="text" v-model="email" /></p>
    <button @click="addData()">เพิ่มข้อมูล</button>
    <button @click="readData()">อ่านข้อมูล</button>

    <div>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">วันที่</th>
            <th scope="col">ชื่อ - นามสกุล</th>
            <th scope="col">ผลตรวจ ATK</th>
            <th scope="col">เบอร์โทร</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in csDoc" :key="index" align="center">
            <td>{{ item.ddate }}</td>
            <td>{{ item.nname }}</td>
            <td>{{ item.aatk }}</td>
            <td>{{ item.ttel }}</td>
            <td>{{ item.eemail }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { collection, addDoc, getDocs } from "firebase/firestore";
import  db  from "../plugins/firebaseinit";

export default {
  data() {
    return {
      csDoc: [],
      name: "",
      email: "",
      atk: "",
      tel: "",
      date: "",
    };
  },
  methods: {
    async addData() {
      try {
        const docRef = await addDoc(collection(db, "covid"), {
          nname: this.name,
          eemail: this.email,
          aatk: this.atk,
          ttel: this.tel,
          ddate: this.date,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      this.readData();
    },
    async readData() {
      const querySnapshot = await getDocs(collection(db, "covid"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.csDoc.push(doc.data());
      });
    },
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}
h1 {
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 8px;
  margin-bottom: 20px;
  position: relative;
  animation: text 3s 1;
}

@keyframes text {
  0% {
    color: rgb(140, 0, 233);
    margin-bottom: -40px;
  }
  30% {
    letter-spacing: 25px;
    margin-bottom: -40px;
  }
  85% {
    letter-spacing: 8px;
    margin-bottom: -40px;
  }
}
</style>

