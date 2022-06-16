export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const map: HTMLElement = document.querySelector(divId)!;
    new google.maps.Map(map, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
      backgroundColor: "#074650",
    });
  }
}
