import axios from "axios";

const API_ENDPOINT = "https://api.sampleapis.com/coffee";

export async function getHotCoffee() {
    const {data} = await axios.get(`${API_ENDPOINT}/hot`)
    return data;
}

export async function getHotCoffeByNumber(number) {
    const coffees = await getHotCoffee()
    return coffees.slice(0, number);
}