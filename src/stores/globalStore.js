import { defineStore } from "pinia";
import NovigradBG from "@/assets/images/Novigrad.jpg";
import PorecBG from "@/assets/images/Porec.jpg";

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
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [13.59019098738821, 45.22490142794946],
                    },
                },
            ],
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
