import React, {Component} from "react"
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from "react-native"
import {AntDesign} from "@expo/vector-icons"
import colors from "../colors"
import tempData from "../tempData"

class AddListModal extends Component {
  backgroundColor = [
    "#5CD859",
    "#24A6D9",
    "#595BD9",
    "#8022D9",
    "#D159D8",
    "#D85963",
    "#D88559",
  ]
  state = {
    name: "",
    color: this.backgroundColor[0],
  }
  createTodo = () => {
    const {name, color} = this.state

    tempData.push({
      name,
      color,
      todos: [],
    })
    this.setState({name: ""})
    this.props.closeModal()
  }
  renderColors() {
    return this.backgroundColor.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          style={[styles.colorSelect, {backgroundColor: color}]}
          onPress={() => this.setState({color})}
        />
      )
    })
  }
  render() {
    const {color} = this.state
    const {closeModal} = this.props
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity style={styles.iconContainer} onPress={closeModal}>
          <AntDesign name="close" size={24} color={colors.black} />
        </TouchableOpacity>

        <View style={styles.titleConatiner}>
          <Text style={styles.title}>Create to shop list</Text>
          <TextInput
            style={styles.inputField}
            placeholder="List name"
            onChangeText={(text) => this.setState({name: text})}
          />

          <View style={styles.colorContainer}>{this.renderColors()}</View>
          <TouchableOpacity
            style={[styles.createBtn, {backgroundColor: color}]}
            onPress={this.createTodo}
          >
            <Text style={{color: colors.white, fontWeight: "600"}}>
              Create!
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    position: "absolute",
    top: 64,
    right: 32,
  },
  titleConatiner: {
    alignSelf: "stretch",
    marginHorizontal: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.black,
    alignSelf: "center",
    marginBottom: 16,
  },
  inputField: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  createBtn: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
  colorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
})

export default AddListModal
