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

setInterval(intervalFunc, 6000);