import axios from "axios";

const valueMap = new Map([
    ["bitcoin", []],
    ["tixl-new", []],
    ["ethereum", []]
]);

async function getCoinGeckoData(coinName: string) {

    const coinGeckoURL = `https://api.coingecko.com/api/v3/simple/price?ids=${coinName}&vs_currencies=EUR`
    axios.get(coinGeckoURL)
    .then((response) => {

    valueMap.get(coinName).push(response.data[coinName].eur);
    console.log(valueMap)

    });
}

export function intervalFunc() {
    getCoinGeckoData("bitcoin");
    getCoinGeckoData("tixl-new");
    getCoinGeckoData("ethereum");
}

export function getAverage(coinName: string){
    let values = valueMap.get(coinName);
    const sum = values.reduce((a, b) => a + b, 0);
    const avgSum = (sum / values.length) || 0;

    return avgSum;
}

export function getLatestValue(coinName: string){
    let values = valueMap.get(coinName);
    let latestValue = values[values.length-1];

    return latestValue;
}

export function getHistory(coinName: string, intervalTimer: number){
    let history = [];
    let values = valueMap.get(coinName);
    let historyCounter = 0;
    for (let i = values.length - 1; i > values.length-intervalTimer; i--){
        history[historyCounter] = values[i];
        historyCounter++;
    }
    return history.reverse();

}

setInterval(intervalFunc, 6000);