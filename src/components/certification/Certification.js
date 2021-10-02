import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";
import dayjs from "dayjs";

//임시데이터
// let rows = [{ id: 0, date: "16 Mar, 2019", user_id: "Elvis Presley", exchange_name: "Bithumb", order_currency: "BTC", unitsvv: 0.25(개수), rateOfReturn: 15, profit(수익금): 312044, avarage_cost:평단가 }];

const columns = [
  { field: "date", headerName: "date", width: 130 },
  { field: "user_id", headerName: "user_id", width: 130 },
  { field: "exchange_name", headerName: "exchange_name", width: 130 },
  { field: "order_currency", headerName: "order_currency", width: 130 },
  { field: "units", headerName: "units", width: 130 },
  { field: "rateOfReturn", headerName: "rateOfReturn", width: 130 },
  { field: "profit", headerName: "profit", width: 130 },
  { field: "avarage_cost", headerName: "avarage_cost", width: 130 },
].map((item) => {
  return {
    ...item,
    sortable: false,
  };
});
export default function Certification() {
  //data grid
  const [rows, setRows] = React.useState([]);

  //calendars
  const [value, setValue] = React.useState([null, null]);
  //날짜 포맷
  const start_date = dayjs(value[0]);
  console.log(start_date.format("YYYY-MM-DD"));
  const end_date = dayjs(value[1]);
  console.log(end_date.format("YYYY-MM-DD"));

  function handleSearch() {
    //axios 조회

    const res = [
      {
        id: 0,
        date: "17 Mar, 2019",
        user_id: "Elvis Presley",
        exchange_name: "Bithumb",
        order_currency: "BTC",
        units: 0.25,
        rateOfReturn: 15,
        profit: 312044,
        avarage_cost: 14999,
      },
      {
        id: 1,
        date: "18 Mar, 2019",
        user_id: "Elvis Presley",
        exchange_name: "Bithumb",
        order_currency: "BTC",
        units: 0.25,
        rateOfReturn: 15,
        profit: 312044,
        avarage_cost: 90888,
      },
      {
        id: 2,
        date: "19 Mar, 2019",
        user_id: "Elvis Presley",
        exchange_name: "Bithumb",
        order_currency: "BTC",
        units: 0.25,
        rateOfReturn: 15,
        profit: 312044,
        avarage_cost: 456000,
      },
      {
        id: 3,
        date: "20 Mar, 2019",
        user_id: "Elvis Presley",
        exchange_name: "Bithumb",
        order_currency: "BTC",
        units: 0.25,
        rateOfReturn: 15,
        profit: 312044,
        avarage_cost: 343669,
      },
    ]; //가져온 데이터
    setRows(res);
    //setPage(0);
  }
  const handleAlert = () => {
    alert("발행되었습니다.");
  };
  return (
    //Container 시작
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2, pl: 5, pr: 5, pt: 3 }}>
          <h4>인증서 발급하기</h4>
          {/* 
      /**input 시작 */}
          <Box>
            <Container maxWidth="lg" sx={{ mt: 3, mb: 2, ml: -4 }}>
              <Grid item xs={12}>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField sx={{ color: "text.primary", fontSize: 15, fontWeight: "medium" }} id="outlined-password-input" label="주문 코인 ex) BTC" size="small" />
                    <TextField sx={{ color: "text.primary", fontSize: 15, fontWeight: "medium" }} id="outlined-password-input" label="주문 통화 ex) KRW" size="small" />
                  </div>
                  <TextField sx={{ color: "text.primary", fontSize: 28, fontWeight: "medium" }} id="outlined-password-input" label="Public Key" size="small" />
                  <div>
                    <TextField sx={{ color: "text.primary", fontSize: 28, fontWeight: "medium" }} id="outlined-password-input" label="Private Key" size="small" />
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
              <div style={{ marginBottom: 5 }}>
                <Typography variant="h6">날짜 조회</Typography>

                <DateRangePicker
                  calendars={1}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} size="small" />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} size="small" />
                    </React.Fragment>
                  )}
                />
              </div>
            </LocalizationProvider>
            <button variant="outlined" size="medium" onClick={handleSearch}>
              {" "}
              조회
            </button>
            <button variant="outlined" size="medium" onClick={handleAlert}>
              발행
            </button>
          </Box>
          {/* 테이블 시작 */}
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} disableColumnMenu />
          </div>
        </Paper>
      </Box>
    </Container>
  );
}
