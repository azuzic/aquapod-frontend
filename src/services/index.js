import axios from 'axios'
import jwt_decode from "jwt-decode";

let Service = axios.create({
    baseURL: "http://localhost:8000/",
    timeout: 6000, 
});

Service.interceptors.request.use((request) => {
    let token = User.GetLocalStorage().access_token;
    try {
        request.headers["Authorization"] = "Bearer " + token;
    } catch (e) {
        console.error(e);
    }
    return request;
});

let User = {
    GetLocalStorage() {
        let item = localStorage.getItem("user")
        if (item == "undefined") return {};
        let user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            let decodedToken = jwt_decode(user.access_token);
            if (Date.now() >= decodedToken.exp * 1000) return false;
            return user;
        } else return false;
    },
    async LogIn(userData) {
        try {
            let response = await Service.post("auth", userData);
            return response;
        } catch (error) {
            let detailedError = {
                functionName: "Auth - logIn",
                userData: userData,
                error: error,
            };
            console.warn(detailedError);
        }
    },
    LogOut() {
        localStorage.removeItem("user");
    },
}

let AquaPodPublic = {
    async GetAquapod(name = "") {
        try {
            let response = await Service.get("aquapods/?name=" + name);
            return response.data;
        } catch (error) {
            let detailedError = {
                functionName: "AquaPodPublic - GetAquapod",
                name: name,
                error: error,
            };
            console.warn(detailedError);
        }
    },
    async GetEnvironment(name) {
        try {
            let response = await Service.get("aquapods/"+name+"/environment");
            return response.data;
        } catch (error) {
            let detailedError = {
                functionName: "AquaPodPublic - GetEnvironment",
                name: name,
                error: error,
            };
            console.warn(detailedError);
        }
    },
    async GetGpsPosition(name) {
        try {
            let response = await Service.get("aquapods/"+name+"/gps-position");
            return response.data;
        } catch (error) {
            let detailedError = {
                functionName: "AquaPodPublic - GetGpsPosition",
                name: name,
                error: error,
            };
            console.warn(detailedError);
        }
    }
}

let AquaPodAdmin = {
    async GetSpecificAquapod(name) {
        try {
            let response = await Service.get("aquapods/"+name);
            return response.data;
        } catch (error) {
            let detailedError = {
                functionName: "AquaPodAdmin - GetSpecificAquapod",
                name: name,
                error: error,
            };
            console.warn(detailedError);
        }
    },
    async GetBattery(name) {
        try {
            let response = await Service.get("aquapods/"+name+"/battery");
            return response.data;
        } catch (error) {
            let detailedError = {
                functionName: "AquaPodAdmin - GetBattery",
                name: name,
                error: error,
            };
            console.warn(detailedError);
        }
    },
    async GetSolarPanel(name) {
        try {
            let response = await Service.get("aquapods/"+name+"/solar-panel");
            return response.data;
        } catch (error) {
            let detailedError = {
                functionName: "AquaPodAdmin - GetSolarPanel",
                name: name,
                error: error,
            };
            console.warn(detailedError);
        }
    },
    async GetPump(name) {
        try {
            let response = await Service.get("aquapods/"+name+"/pump");
            return response.data;
        } catch (error) {
            let detailedError = {
                functionName: "AquaPodAdmin - GetPump",
                name: name,
                error: error,
            };
            console.warn(detailedError);
        }
    },
    //CONTINUE HERE
    async PatchPump(name) {
        try {
            let response = await Service.patch("aquapods/"+name+"/pump/status");
            return response.data;
        } catch (error) {
            let detailedError = {
                functionName: "AquaPodAdmin - PatchPump",
                name: name,
                error: error,
            };
            console.warn(detailedError);
        }
    },
}

export { 
    User, AquaPodPublic, AquaPodAdmin
};