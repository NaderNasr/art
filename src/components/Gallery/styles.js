import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  title: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    background: 'rgba(32, 33, 36, 0.5)',
    color: '#BB86FC',
    zIndex: '99'
  },
  mobile: {
    display: 'flex',
    alignItems: 'center'
  },
  browser: {
    display: 'flex',
    alignItems: 'center'
  }
}));