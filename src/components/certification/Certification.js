import React, { Component, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { visuallyHidden } from "@mui/utils";
import { format as dateFormat } from "date-fns";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";
import Button from "@restart/ui/esm/Button";
import { BootstrapButton } from "../layout/Styles";

function createData(id, date, name, market, coin, volume, rateOfReturn, amount) {
  return {
    id,
    date,
    name,
    market,
    coin,
    volume,
    rateOfReturn,
    amount,
  };
}
//임시데이터
let rows = [
  // createData(0, "16 Mar, 2019", "Elvis Presley", "Bithumb", "BTC", 0.25, 15, 312044),
  // createData(1, "16 Mar, 2019", "Paul McCartney", "Bithumb", "UMA", 3, 12, 8660099),
  // createData(2, "16 Mar, 2019", "Tom Scholz", "Bithumb", "ETH", 4.25, 13, 100081),
  // createData(3, "16 Mar, 2019", "Michael Jackson", "Bithumb", "BTC", 2.0, 5, 654039),
  // createData(4, "15 Mar, 2019", "Bruce Springsteen", "Bithumb", "LUNA", 5.9, 4, 2120079),
  // createData(5, "15 Mar, 2019", "Bruce Springsteen", "Bithumb", "LUNA", 5.9, 4, 2120079),
  // createData(6, "15 Mar, 2019", "Bruce Springsteen", "Bithumb", "LUNA", 5.9, 4, 2120079),
  // createData(7, "15 Mar, 2019", "Bruce Springsteen", "Bithumb", "LUNA", 5.9, 4, 2120079),
  { id: 0, date: "16 Mar, 2019", name: "Elvis Presley", market: "Bithumb", coin: "BTC", volume: 0.25, rateOfReturn: 15, amount: 312044 },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "date",
    numeric: false,
    disablePadding: true,
    label: "date",
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "name",
  },
  {
    id: "market",
    numeric: true,
    disablePadding: false,
    label: "market",
  },
  {
    id: "coin",
    numeric: true,
    disablePadding: false,
    label: "coin",
  },
  {
    id: "volume",
    numeric: true,
    disablePadding: false,
    label: "volume",
  },
  {
    id: "rateOfReturn",
    numeric: true,
    disablePadding: false,
    label: "rateOfReturn",
  },
  {
    id: "amount",
    numeric: true,
    disablePadding: false,
    label: "amount",
  },
];
function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align={"center"} padding={headCell.disablePadding ? "none" : "normal"} sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel active={orderBy === headCell.id} direction={orderBy === headCell.id ? order : "asc"} onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: "1 1 100%" }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
          조회목록
        </Typography>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function Certification() {
  //calendars
  const [value, setValue] = React.useState([null, null]);
  console.log(value);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // const init = () => {
  //   setValue(["2021-08-31T15:00:00.000Z", null]);
  // };
  // init();
  useEffect(() => {
    setValue([new Date() - 300000, new Date()]);
  }, []);

  function handleSearch() {
    //axios 조회 todo

    rows = [
      { id: 0, date: "17 Mar, 2019", name: "Elvis Presley", market: "Bithumb", coin: "BTC", volume: 0.25, rateOfReturn: 15, amount: 312044 },
      { id: 1, date: "18 Mar, 2019", name: "Elvis Presley", market: "Bithumb", coin: "BTC", volume: 0.25, rateOfReturn: 15, amount: 312044 },
      { id: 2, date: "19 Mar, 2019", name: "Elvis Presley", market: "Bithumb", coin: "BTC", volume: 0.25, rateOfReturn: 15, amount: 312044 },
      { id: 3, date: "20 Mar, 2019", name: "Elvis Presley", market: "Bithumb", coin: "BTC", volume: 0.25, rateOfReturn: 15, amount: 312044 },
    ]; //가져온 데이터
    //setPage(0);
    setRowsPerPage(10);
  }
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    //Container 시작
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2, pl: 5, pr: 5, pt: 3 }}>
          <h3>인증서 발급하기</h3>
          {/* 
      /**input 시작 */}
          <Container maxWidth="lg" sx={{ mt: 3, mb: 4, ml: -4 }}>
            <Grid item xs={12}>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  sx={{ color: "text.primary", fontSize: 28, fontWeight: "medium" }}
                  id="outlined-password-input"
                  label="Public Key"
                  type="Public Key"
                  autoComplete="current-password"
                />
                <div>
                  <TextField
                    sx={{ color: "text.primary", fontSize: 28, fontWeight: "medium" }}
                    id="outlined-password-input"
                    label="Private Key"
                    type="Private Key"
                    autoComplete="current-password"
                  />
                </div>
              </Box>
            </Grid>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            ></Box>
          </Container>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div>
              <Typography sx={{ mt: 2, mb: 2 }}>조회하기</Typography>

              <DateRangePicker
                calendars={1}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} />
                  </React.Fragment>
                )}
                //inputFormat="yyyyMMdd"
              />
            </div>
          </LocalizationProvider>
          <BootstrapButton variant="contained" onClick={handleSearch}>
            조회
          </BootstrapButton>
          <Button variant="contained">발행</Button>
          {/* 테이블 시작 */}
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" aria-label="sticky table" size={dense ? "small" : "medium"}>
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                      >
                        <TableCell component="th" id={labelId} scope="row" padding="none">
                          {row.date}
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.market}</TableCell>
                        <TableCell align="right">{row.coin}</TableCell>
                        <TableCell align="right">{row.volume}</TableCell>
                        <TableCell align="right">{row.rateOfReturn}</TableCell>
                        <TableCell align="right">{row.amount}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Container>
  );
}
