/*
Index is calculated by :
  - Get current US Big Mac price
  - Get current Big Mac price from country we're comparing
  - Divide US Big Mac price by country's Big Mac price
    (this is called the implied purchasing power)
  - Get country's currency rate to USD value
  - Substract currency rate with the implied purchasing power
  - Divide the previous result by the implied purchasing power
  - This will give you the Big Mac Index
  - Make sure you search for updated values!

For example, using figures in July 2008:
  - the price of a Big Mac was $3.57 in the United States 
  - the price of a Big Mac was £2.29 in the United Kingdom 
  - the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
  - this compares with an actual exchange rate of $2.00 to £1 at the time
  - (2.00 – 1.56) / 1.56 = 28%
  - the pound was thus overvalued against the dollar by 28%
*/

const usBigMac = 3.99;
const ukBigMac = 3.19;
const baseCurrencyVsGbpRate = 1.39;
const usUkPpp = usBigMac/ukBigMac;
const tradingPercentageUk = (baseCurrencyVsGbpRate-usUkPpp)/usUkPpp*100;

if (tradingPercentageUk >= 0){
  console.log("Overvalued by "+tradingPercentageUk.toFixed(1) + "%")
} else {
  console.log("Undervalued by "+tradingPercentageUk.toFixed(1) + "%")
}


const brazilBigMac = 19.10;
const baseCurrencyVsBrazilianRealRate = 0.19;
const usBrPpp = usBigMac/brazilBigMac;
const tradingPercentageBr = (baseCurrencyVsBrazilianRealRate-usBrPpp)/usBrPpp*100;

if (tradingPercentageBr >= 0){
  console.log("Overvalued by "+tradingPercentageBr.toFixed(1) + "%")
} else {
  console.log("Undervalued by "+tradingPercentageBr.toFixed(1) + "%")
}

const italyBigMac = 4.89;
const baseCurrencyVsEuroRate = 1.19;
const usItalyPpp = usBigMac/italyBigMac;
const tradingPercentageEuro = (baseCurrencyVsEuroRate-usItalyPpp)/usItalyPpp*100;

if (tradingPercentageEuro >= 0){
  console.log("Overvalued by "+tradingPercentageEuro.toFixed(1) + "%")
} else {
  console.log("Undervalued by "+tradingPercentageEuro.toFixed(1) + "%")
}


const kosovoBigMac = 3.49;
const usKosovoPpp = usBigMac/kosovoBigMac;
const tradingPercentageEuroKosovoRate = (baseCurrencyVsEuroRate-usKosovoPpp)/usKosovoPpp*100;

if (tradingPercentageEuroKosovoRate >= 0){
  console.log("Overvalued by "+tradingPercentageEuroKosovoRate.toFixed(1) + "%")
} else {
  console.log("Undervalued by "+tradingPercentageEuroKosovoRate.toFixed(1) + "%")
}

const hongKongBigMac = 2.64;
const baseCurrencyVsHongKongDollarRate = 0.13;
const usHongKongPpp = usBigMac/hongKongBigMac;
const tradingPercentageHongKongDollarRate = (baseCurrencyVsHongKongDollarRate-usHongKongPpp)/usHongKongPpp*100;

if (tradingPercentageHongKongDollarRate >= 0){
  console.log("Overvalued by "+tradingPercentageHongKongDollarRate.toFixed(1) + "%")
} else {
  console.log("Undervalued by "+tradingPercentageHongKongDollarRate.toFixed(1) + "%")
}