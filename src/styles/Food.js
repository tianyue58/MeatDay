import { makeStyles } from "@material-ui/core/styles";

export const useFoodEntry = makeStyles((theme) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
    height: '100%',
    margin: 20,
  },
  tableContainer: {
    '&:nth-child(n)': {
      borderRadius: 15,
      minWidth: 960,
      maxWidth: 960,
    },
  },
  table: {
    '&:nth-child(n)': {
      width: 960,
      tableLayout: 'fixed',
    },
  },
  tableHeadCell: {
    '&:nth-child(n)': {
      fontWeight: 'bold',
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.getContrastText(theme.palette.primary.dark),
    },
  },
}));
