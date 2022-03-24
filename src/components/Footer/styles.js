import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  siteFooter: {
    backgroundColor: '#d3d3d3',
    width: "device-width",
    position: "relative",
    overflow: "visible",
    marginTop: "3em",
    padding: "1em",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "1em",
  },
  icon: {
    color: "black"
  },
  disclaimer: {
    paddingTop: "1em"
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "1em"
  }
}));