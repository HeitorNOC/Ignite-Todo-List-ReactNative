import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  upper: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: -31,
    zIndex: 99

  },
  button: {
    backgroundColor: "#1E6F9F",
    padding: 18,
    borderRadius: 6,
  },
  input: {
    width: 327,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 6,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    marginRight: 4,
  },
  inputFocus: {
    width: 327,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 6,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    marginRight: 4,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#5E60CE",
  },
  wrapper: {
    backgroundColor: "#191919",
    minWidth: "100%",
    marginTop: -23
  },
  main: {
    marginTop: 55
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 24,
    paddingLeft: 24,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  textLeft: {
    fontSize: 14,
    color: "#4EA8DE",
  },
  spanLeftDiv: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRIght: 8,
    gap: 10,
    width: 25,
    height: 19,
    backgroundColor: "#333333",
    borderRadius: 999,
    marginLeft: 8,
  },
  spanLeft: {
    color: "#FFF",
    fontSize: 12,
  },
  textRight: {
    fontSize: 14,
    color: "#8284FA",
  },
  spanRightDiv: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRIght: 8,
    gap: 10,
    width: 25,
    height: 19,
    backgroundColor: "#333333",
    borderRadius: 999,
    marginLeft: 8,
  },
  spanRight: {
    color: "#FFF",
    fontSize: 12,
  },
  list: {

  },

  emptyList: {
    paddingTop: 68,
    alignItems: "center",
    justifyContent: "center"
  },
  emptyImg: {
    marginBottom: 16,
  },
  textUp: {
    fontSize: 14,
    color: "#808080",
    fontWeight: "700",
    marginBottom: 6
  },
  textDown: {
    fontSize: 14,
    color: "#808080",
  }
})