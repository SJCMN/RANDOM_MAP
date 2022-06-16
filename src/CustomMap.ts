import { User } from "./user";
import { Company } from "./Company";

interface Mappable {
  location: {
    lat: number,
    lng: number
  }

}

export class CustomMap {
  private googleMap: google.maps.Map 

  constructor(divId: string) {
    const map: HTMLElement = document.querySelector(divId)!;
    this.googleMap = new google.maps.Map(map, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
      backgroundColor: "#074650",
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  }
  
}
