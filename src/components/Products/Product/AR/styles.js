import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    margin: 'auto'
  },
  title: {
    textAlign: 'center',
    textDecoration: 'underline'
  },
  highlight: {
    color: '#BB86FC',
    fontWeight: '900'
  },
  addToCart: {
    color: '#BB86FC',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));