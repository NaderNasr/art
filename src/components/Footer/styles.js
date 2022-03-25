import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  siteFooter: {
    backgroundColor: '#202124',
    width: "100%",
    position: "relative",
    overflow: "hidden",
    marginTop: "3em",
    paddingBottom: "1em",
    color: '#BB86FC'
  },
  header: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "2em",
    paddingTop: "3em",
    color: '#BB86FC'
  },
  icon: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    color: '#BB86FC'
  },
  disclaimer: {
    paddingTop: "3em",
    color: 'white'
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "1em",
    color: 'white'
  },
  svg_icons: {
    transform: 'scale(1.5)'
  },
  links: {
    color:'#71c0a1',
    textDecoration: 'none'
  }
}));