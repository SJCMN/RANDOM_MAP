import dotenv from "dotenv";
import { User } from "./user";
import { Company } from "./Company";
import { CustomMap } from "./customMap";

const user = new User();
const company = new Company();
const API_KEY = process.env.API_KEY;
const script1 = document.createElement("script");

script1.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;

dotenv.config();
document.body.append(script1);

setTimeout(() => {
  const customMap = new CustomMap('map')
}, 3000);
