import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image style={styles.banner} source={require("./assets/banner.jpg")} />
      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.email}
            keyboardType="default"
            placeholder="Số điện thoại hoặc email"
            textAlign="left"
          ></TextInput>
          <TextInput style={styles.password} secureTextEntry={true} placeholder="Mật Khẩu" textAlign="left"></TextInput>
          <TouchableOpacity style={styles.loginbutton}>
            <Text style={styles.logintext}>Đăng Nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotpassword}>Quên mật khẩu?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.back}>Quay lại</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <View style={styles.lineor}>
            <View style={styles.line}></View>
            <Text style={styles.or}>Hoặc</Text>
            <View style={styles.line}></View>
          </View>
          <TouchableOpacity style={styles.signupbutton}>
            <Text style={styles.signuptext}>Tạo Tài Khoản Mới</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  banner: {
    width: "100%",
    height: "32%",
  },
  form: {
    marginTop: 23,
    flex: 1,
  },
  password: {
    width: 350,
    height: 60,
    borderColor: "#3333",
    borderWidth: 1,
    fontSize: 17,
    paddingLeft: 20,
  },
  email: {
    width: 350,
    height: 60,
    borderColor: "#3333",
    borderWidth: 1,
    fontSize: 17,
    paddingLeft: 20,
    borderBottomWidth: 0,
  },
  loginbutton: {
    width: 350,
    backgroundColor: "dodgerblue",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 15,
  },
  logintext: {
    color: "white",
    fontSize: 17,
  },
  forgotpassword: {
    textAlign: "center",
    color: "blue",
    marginTop: 15,
  },
  back: {
    textAlign: "center",
    color: "blue",
    marginTop: 10,
  },
  signupbutton: {
    width: 350,
    backgroundColor: "aliceblue",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  signuptext: {
    color: "dodgerblue",
    fontSize: 17,
  },
  lineor: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  line: {
    width: "30%",
    height: 2,
    borderTopColor: "#333",
    borderTopWidth: 1,
  },
  or: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: -2,
  },
  footer: {
    marginBottom: 20,
  },
})
