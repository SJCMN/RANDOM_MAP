import dotenv from 'dotenv';
import { User } from "./user";
import { Company } from "./company";

const user = new User;
const company = new Company;
const API_KEY = process.env.API_KEY;
const script1 = document.createElement('script');

script1.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;

dotenv.config();
document.body.append(script1);


console.log(script1, script1.src);

console.log(process.env.API_KEY);
console.log(dotenv);
console.log(user);
console.log(company);

setTimeout(() => {
    const map: HTMLElement = document.querySelector('#map')
new google.maps.Map(map, {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }
});

}, 3000);

