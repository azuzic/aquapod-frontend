import { defineStore } from "pinia";
import NovigradBG from "@/assets/images/Novigrad.jpg";
import PorecBG from "@/assets/images/Porec.jpg";

export const useGlobalStore = defineStore("globalStore", {
    state: () => ({
        map: Object,
        counter: 33288417,
        email: "",
        password: "",
        admin: true,
        geojson: {
            type: "FeatureCollection",
            features: [
                {
                    type: "Feature",
                    properties: {
                        image: NovigradBG,
                        city: "Novigrad",
                        temp: 20,
                        wind: 49,
                        depth: 75,
                        alert: "warningIcon",
                    },
                    data: {
                        windSpeed: "49",
                        windDirection: ["SEE", "(153)''"],
                        seaDepth: "75",
                        seaPH: "8.1",
                        seaTemp: "26",
                        airTemp: "20",
                        pumpRPM: "2000",
                        pumpWork: "2485",
                        solarVoltage: "12.4",
                        solarWork: "1242",
                        solarUse: "3600",
                        accCharge: "85",
                        accDeplete: "76",
                        accVoltage: "12.4",
                        accCapacity: "5210",
                        accCycle: "630",
                        accInsolation: "179.8",
                        trashRemovedTotal: "560,220",
                        trashCapacity: 75,
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [13.556810535332298, 45.31988787320131],
                    },
                },
                {
                    type: "Feature",
                    properties: {
                        image: PorecBG,
                        city: "Poreč",
                        temp: 19,
                        wind: 62,
                        depth: 86,
                        alert: "dangerIcon",
                    },
                    data: {
                        windSpeed: "46",
                        windDirection: ["SEE", "(156)''"],
                        seaDepth: "70",
                        seaPH: "8.1",
                        seaTemp: "26",
                        airTemp: "21",
                        pumpRPM: "2000",
                        pumpWork: "2374",
                        solarVoltage: "12",
                        solarWork: "1131",
                        solarUse: "3550",
                        accCharge: "82",
                        accDeplete: "73",
                        accVoltage: "12.2",
                        accCapacity: "5210",
                        accCycle: "624",
                        accInsolation: "179.4",
                        trashRemovedTotal: "548,100",
                        trashCapacity: 50,
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [13.59019098738821, 45.22490142794946],
                    },
                },
            ],
        },
        activePod: {
            properties: {
                image: NovigradBG,
                city: "Novigrad",
                temp: 20,
                wind: 49,
                depth: 75,
                alert: "warningIcon",
            },
            data: {
                windSpeed: "49",
                windDirection: ["SEE", "(153)''"],
                seaDepth: "75",
                seaPH: "8.1",
                seaTemp: "26",
                airTemp: "20",
                pumpRPM: "2000",
                pumpWork: "2485",
                solarVoltage: "12.4",
                solarWork: "1242",
                solarUse: "3600",
                accCharge: "85",
                accDeplete: "76",
                accVoltage: "12.4",
                accCapacity: "5210",
                accCycle: "630",
                accInsolation: "179.8",
                trashRemovedTotal: "560,220",
                trashCapacity: 75,
            },
            geometry: {
                type: "Point",
                coordinates: [13.556810535332298, 45.31988787320131],
            },
        },
    }),
    actions: {
        login() {
            if (
                this.email == "admin@gmail.com" &&
                this.password == "aquapod123"
            ) {
                this.admin = true;
                console.log("LOGGED IN!");
                return true;
            }
            return false;
        },
    },
});
