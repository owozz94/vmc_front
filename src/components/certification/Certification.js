import { DataGrid } from "@mui/x-data-grid";
import { useState, React, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import dayjs from "dayjs";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ComAxios from "./../../util/ComAxios";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      display: "flex",
    },
  },
};

const payment_currency_symbol = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

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
  useEffect(() => {
    console.log("useEffect 마운트될때");
    initCoin();
  }, []);
  const state = useSelector((state) => state);
  const [exchange_id, setExchange_id] = useState();
  const [paymentCurrency, setPaymentCurrency] = useState([]);
  const [coinSymbol, setCoinSymbol] = useState([]);
  const [coinSymbolList, setCoinSymbolList] = useState([]);

  const initCoin = () => {
    ComAxios({
      method: "get",
      url: "http://3.37.123.157:8000/transactions/exchange/1/coin",
    })
      .then((coin) => {
        console.log(coin.data);
        const dd = coin.data.data.map((data) => {
          return data.coin_symbol;
        });
        setCoinSymbolList(dd);
      })
      .catch((coin) => {
        console.log(coin);
      });
  };
  //보유 코인종류 갖고오기
  const handleGetCoin = (coin) => {
    const {
      target: { value },
    } = coin;
    setCoinSymbol(typeof value === "string" ? value.split(",") : value);
  };
  //결제 통화 갖고오기
  const handleGetPayment = (payment) => {
    const {
      target: { value },
    } = payment;
    setPaymentCurrency(typeof value === "string" ? value.split(",") : value);
  };

  const [inputs, setInput] = useState({
    api_key: "",
    secret_key: "",
    order_currency: "",
    payment_currency: "",
  });
  const { api_key, secret_key, order_currency, payment_currency } = inputs;
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  //data grid
  const [rows, setRows] = useState([]);

  //calendars
  const [day, setDay] = useState([null, null]);
  let end_date = dayjs(day[0]);
  end_date = end_date.format("YYYY-MM-DD");

  function handleSearch(response) {
    const data = {
      ...inputs,
      end_date,
    };
    console.log(data);
    // console.log(end_date);
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
                    <FormControl sx={{ m: 1, width: 200 }}>
                      <InputLabel id="demo-multiple-checkbox-label">주문 코인 (ex. ADA)</InputLabel>

                      <Select value={coinSymbol} onChange={handleGetCoin} input={<OutlinedInput label="Tag" />} renderValue={(selected) => selected.join(", ")}>
                        {coinSymbolList.map((data) => (
                          <MenuItem style={{ display: "flex", marginLeft: 10, justifyContent: "left" }} key={data} value={data}>
                            <ListItemText primary={data} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: 200 }}>
                      <InputLabel id="demo-multiple-checkbox-label">결제 통화 (ex. KRW)</InputLabel>
                      <Select
                        value={paymentCurrency}
                        onChange={handleGetPayment}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                      >
                        {payment_currency_symbol.map((payment_currency_symbol) => (
                          <MenuItem style={{ display: "flex", marginLeft: 10, justifyContent: "left" }} key={payment_currency_symbol} value={payment_currency_symbol}>
                            <Checkbox checked={paymentCurrency.indexOf(payment_currency_symbol) > -1} />
                            <ListItemText primary={payment_currency_symbol} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <TextField
                    name="api_key"
                    sx={{ color: "text.primary", fontSize: 28, fontWeight: "medium" }}
                    id="outlined-password-input"
                    label="Public Key"
                    size="small"
                    value={api_key}
                    onChange={handleOnChange}
                  />
                  <div>
                    <TextField
                      name="secret_key"
                      sx={{ color: "text.primary", fontSize: 28, fontWeight: "medium" }}
                      id="outlined-password-input"
                      label="Private Key"
                      size="small"
                      value={secret_key}
                      onChange={handleOnChange}
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
              <div style={{ marginBottom: 5 }}>
                <Typography variant="h6">날짜 조회</Typography>

                <DesktopDatePicker
                  calendars={1}
                  value={day}
                  mask={"____/__/__"}
                  inputFormat="yyyy/MM/dd"
                  onChange={(newValue) => {
                    setDay(newValue);
                  }}
                  renderInput={(endProps) => (
                    <Fragment>
                      <TextField {...endProps} size="small" />
                    </Fragment>
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
