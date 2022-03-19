import { makeStyles } from '@material-ui/core/styles';


const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'white'
  },
  title: {
    flexGrow: 1,
    color: 'black'
  },
  image: {
    marginRight: '1rem',
  },
  buttons: {
    flexGrow: 1,
    color: 'black'
  },
  cart: {

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