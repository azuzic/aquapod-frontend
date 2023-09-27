import { defineStore } from "pinia";
import { User, AquaPodPublic } from "@/services"
import NovigradBG from "@/assets/images/Novigrad.jpg";
import PorecBG from "@/assets/images/Porec.jpg";
import ZadarBG from "@/assets/images/Zadar.jpg";
import RijekaBG from "@/assets/images/Rijeka.jpg";
import DubrovnikBG from "@/assets/images/Dubrovnik.jpg";
import SplitBG from "@/assets/images/Split.jpg";

export const useGlobalStore = defineStore("globalStore", {
    state: () => ({
        map: Object,
        counter: 33288417,
        email: "",
        password: "",
        admin: false,
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
                        trashCapacity: 99,
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [13.59019098738821, 45.22490142794946],
                    },
                },
                {
                    type: "Feature",
                    properties: {
                        image: ZadarBG,
                        city: "Zadar",
                        temp: 17,
                        wind: 42,
                        depth: 70,
                        alert: "infoIcon"
                    },
                    data: {
                        windSpeed: "42",
                        windDirection: ["SW", "(225)''"],
                        seaDepth: "70",
                        seaPH: "8.2",
                        seaTemp: "24",
                        airTemp: "17",
                        pumpRPM: "1900",
                        pumpWork: "2145",
                        solarVoltage: "12.3",
                        solarWork: "990",
                        solarUse: "3000",
                        accCharge: "80",
                        accDeplete: "72",
                        accVoltage: "12.1",
                        accCapacity: "4000",
                        accCycle: "480",
                        accInsolation: "155.3",
                        trashRemovedTotal: "520,300",
                        trashCapacity: 10
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [15.221225061205157, 44.12072855795995]
                    }
                },
                {
                    type: "Feature",
                    properties: {
                        image: RijekaBG,
                        city: "Rijeka",
                        temp: 16,
                        wind: 30,
                        depth: 65,
                        alert: "infoIcon"
                    },
                    data: {
                        windSpeed: "30",
                        windDirection: ["NW", "(315)''"],
                        seaDepth: "65",
                        seaPH: "8.1",
                        seaTemp: "23",
                        airTemp: "16",
                        pumpRPM: "1700",
                        pumpWork: "1760",
                        solarVoltage: "12.5",
                        solarWork: "1085",
                        solarUse: "2900",
                        accCharge: "85",
                        accDeplete: "78",
                        accVoltage: "12.2",
                        accCapacity: "4200",
                        accCycle: "510",
                        accInsolation: "149.6",
                        trashRemovedTotal: "465,800",
                        trashCapacity: 25
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [14.440385661252758, 45.322716116181645]
                    }
                },
                {
                    type: "Feature",
                    properties: {
                        image: DubrovnikBG,
                        city: "Dubrovnik",
                        temp: 22,
                        wind: 35,
                        depth: 60,
                        alert: "dangerIcon"
                    },
                    data: {
                        windSpeed: "35",
                        windDirection: ["S", "(180)''"],
                        seaDepth: "60",
                        seaPH: "8.0",
                        seaTemp: "25",
                        airTemp: "22",
                        pumpRPM: "1800",
                        pumpWork: "1985",
                        solarVoltage: "12.8",
                        solarWork: "1350",
                        solarUse: "3200",
                        accCharge: "88",
                        accDeplete: "81",
                        accVoltage: "12.5",
                        accCapacity: "4800",
                        accCycle: "550",
                        accInsolation: "170.2",
                        trashRemovedTotal: "430,900",
                        trashCapacity: 90
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [18.09905068360928, 42.64167875562304]
                    }
                },
                {
                    type: "Feature",
                    properties: {
                        image: SplitBG,
                        city: "Split",
                        temp: 18,
                        wind: 28,
                        depth: 55,
                        alert: "warningIcon"
                    },
                    data: {
                        windSpeed: "28",
                        windDirection: ["N", "(0)''"],
                        seaDepth: "55",
                        seaPH: "8.2",
                        seaTemp: "25",
                        airTemp: "18",
                        pumpRPM: "1800",
                        pumpWork: "1875",
                        solarVoltage: "12.6",
                        solarWork: "1215",
                        solarUse: "3100",
                        accCharge: "85",
                        accDeplete: "78",
                        accVoltage: "12.3",
                        accCapacity: "4500",
                        accCycle: "520",
                        accInsolation: "160.7",
                        trashRemovedTotal: "375,400",
                        trashCapacity: 55
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [16.451210132449436, 43.53322896478323]
                    }
                }
            ],
        },
        allAquapods: [],
        activePodUser: "empty",
        activePodAdmin: "empty",
        type: "air_temperature",
        collapse: true,
    }),
    actions: {
        async setup() {
            this.allAquapods = await AquaPodPublic.GetAquapod()
        },
        async login() {
            try {
                let formData = new FormData();
                //formData.append("username",this.email);
                //formData.append("password",this.password);
                formData.append("username","admin@maservis.hr");
                formData.append("password","123");
                let response = await User.LogIn(formData);
                localStorage.setItem("user", JSON.stringify(response.data));
                this.admin = true;
                return true;
            } catch (error) {
                console.warn("login: " + error);
                return false;
            }
        },
    },
});
