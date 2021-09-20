import * as React from 'react';
import { Fragment } from 'react';
import Link from '@mui/material/Link';
//배너
import bithumb from '../../img/bithumb.png'
import coinone from '../../img/coinone.png'
import upbit from '../../img/upbit.png'
import kobit from '../../img/kobit.png'


export default function MarketBanner() {
   //전체 배너 스타일
   const cc = {display:'flex',flexDirection: 'column' ,maxHeight:'350px'}
   //각각 배너 스타일
   const cx = {maxHeight:'84px',overflow:'visible',alignItems: 'center',align:"center",border: "2px solid",  marginBottom:'5px', backgroundColor:'#f5f8ff'}

   return (
      <Fragment>
    <div style={cc}
    >
    <div style={cx}>

        <Link href="https://www.bithumb.com/">
        <img src={bithumb} alt="bithumb_logo" width='100%' height="87px" />
     </Link>
     </div >
      <div  style={cx} >
        <Link href="https://coinone.co.kr/?__cf_chl_jschl_tk__=pmd_t.iLnC4a4rxnMm0avloSUs.CLoEGzDVk7yDphwbxZns-1632065524-0-gqNtZGzNAdCjcnBszQjR">
        <img src={coinone} alt="coinone_logo" width='100%' height="90px" />
     </Link>
     </div >
     <div  style={cx}>

     <Link href="https://upbit.com/home">
        <img src={upbit} alt="upbit_logo" width='100%' height="84px" />
     </Link>
     </div  >
     <div  style={cx}>
  
     <Link href="https://www.korbit.co.kr/">
        <img src={kobit} alt="kobit_logo" width='100%' height="90px" />
     </Link>
     
     </div>
     </div>
     </Fragment>

  );
}
