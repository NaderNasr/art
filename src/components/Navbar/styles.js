import { makeStyles } from '@material-ui/core/styles';


// const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#202124',
    display:'flex'
  },
  titleMobile: {
    flexGrow: 1,
    color: '#BB86FC'
  },
  title: {
    color: '#BB86FC'
  },
  image: {
    marginTop: '1rem'
  },
  buttons: {
    flexGrow: 1,
    paddingLeft:'20px'
  },
  buttonColor: {
    color: '#BB86FC',
  },
  cart: {
    color: 'red'
  },
  menuButton: {
    display: "flex",
    flexGrow: "1",
    justifyContent: "start",
  },
  mobileBar: {
    display: "flex",
    alignItems: "center"
  }

}));