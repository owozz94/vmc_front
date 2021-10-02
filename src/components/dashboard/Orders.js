import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

//volume : 거래랑, rateOfReturn : 수익률, amount : 수익금
function createData(id, date, name, market, coin,volume, rateOfReturn, amount) {
  //반올림
  volume = volume.toFixed(2); 
  //1000번째자리 소숫점
  const option = {
    maximumFractionDigits : 4
  };
  amount = amount.toLocaleString('ko-KR',option);

  return { id, date, name, market, coin, volume,rateOfReturn,amount };
}
//샘플 인증서 발급
const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Bithumb',
    'BTC',
    0.25,
    15,
    312044,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'Bithumb',
    'UMA',
    3,
    12,
    8660099,
  ),
  createData(
    2, 
    '16 Mar, 2019', 
    'Tom Scholz', 
    'Bithumb', 
    'ETH', 
    4.25,
    13,
    100081
    ),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Bithumb',
    'BTC',
    2.0,
    5,
    654039,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Bithumb',
    'LUNA',
    5.9,
    4,
    2120079,
  ),
];

export default function Orders() {
  
  

  return (
    <React.Fragment>
      <Title>실시간 인증서 발급</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>날짜</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>거래소</TableCell>
            <TableCell>코인</TableCell>
            <TableCell>거래량</TableCell>
            <TableCell>수익률</TableCell>
            <TableCell align="right">수익금</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.market}</TableCell>
              <TableCell>{row.coin}</TableCell>
              <TableCell>{row.volume}</TableCell>
              <TableCell>{row.rateOfReturn}%</TableCell>
              <TableCell align="right">{row.amount} kwr</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </React.Fragment>
  );
} //Orders end
