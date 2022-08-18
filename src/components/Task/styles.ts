import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#262626",
    marginBottom: -8,
    borderWidth: 1,
    borderColor: "#333333",
    borderStyle: "solid",
    borderRadius: 8,
    
    shadowColor: "#00000099",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.06,
    marginRight: 24,
    marginLeft: 24,
  },
  notToggled: {
    backgroundColor: "#262626",
    
    padding: 14,
  
  },
  toggled: {
    backgroundColor: "#262626",
    
    padding: 14,
    
  },
  trash: {
    backgroundColor: "#262626",
    padding: 14,
    
  },
  textDiv: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 12,
    paddingRight: 12,
  },
  textA: {
    fontSize: 14,
    color: "#808080",
    textDecorationLine: "line-through"
  },
  textB: {
    fontSize: 14,
    
    color: "#FFF",
  }
})