import {makeAutoObservable} from "mobx";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

class AuthStore{
    constructor() {
        makeAutoObservable(this);
    }

    isAuthenticated = false;

    setIsAuthenticated(payload){
        this.isAuthenticated = payload;
    }

    async login(payload){
        try{
            const response = await axios.get(baseUrl + 'auth/login', payload);
            this.setIsAuthenticated(true);
        }catch (error){
            console.log(error);
        }
    }

    async register(payload){
        try{
            const response = await axios.get(baseUrl + 'auth/register', payload);
            this.setIsAuthenticated(true);
        }catch(error){
            console.log(error);
        }
    }
}

export default new AuthStore();