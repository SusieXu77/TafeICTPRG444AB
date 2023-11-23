import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    padding: 8,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    padding:5,
  },
  navigatorHeading: {
     headerStyle: {
          backgroundColor: '#941a1d',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
  },
    title: {
    fontFamily: "Trebuchet MS",
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
    header: {
    fontFamily: "Trebuchet MS",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#941a1d',
    padding: 20,
    borderRadius: 15,
  },
  buttonText: {
    fontFamily: "Trebuchet MS",
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  contactItem: {
    marginBottom: 10,
  },
  deleteButton: {
    margin: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#941a1d",     
  },
  deleteText: {
     fontFamily: "Trebuchet MS",
     color: 'white',
     fontWeight: 'bold',
  },
  fname: {
    fontFamily: "Trebuchet MS",
    fontSize: 18,
    fontWeight: 'bold',
  },
    lname: {
    fontFamily: "Trebuchet MS",
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskItem: {
    marginTop: 30,
    marginleft:20,
    marginRight:20,
  },
  description: {
    fontFamily: "Trebuchet MS",
    fontSize: 16,
  },
    errorMessage: {
    fontFamily: "Trebuchet MS",
    fontSize: 20,
    color:"red",
    marginLeft:-80,
  }
});