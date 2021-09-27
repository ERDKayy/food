import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer gqAF1ZcU3RKpiNtvrRpbe8B1suDVSI7v7_uxZVJSN18JtEdbrMooz-cNB1URrTPV5PVMPQhQIxGh2xtjwzEY7RyMrxvdxuZZmMIlS7CIsfHKmG9XOdI2JQ4YJxJRYXYx'
    }
});