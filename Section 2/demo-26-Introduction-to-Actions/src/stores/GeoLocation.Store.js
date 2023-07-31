import { readable } from 'svelte/store';

export default readable(
  { lat: undefined, lng: undefined, working: false, errorMessage: undefined },
  (set) => {
    let id;
    let options;

    function success(pos) {
      const crd = pos.coords;
      set({
        lat: crd.latitude,
        lng: crd.longitude,
        working: true,
        errorMessage: undefined,
      });
    }

    function error(err) {
      set({
        lat: undefined,
        lng: undefined,
        working: false,
        errorMessage: err.message,
      });
    }

    options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0,
    };

    id = navigator.geolocation.watchPosition(success, error, options);
  }
);
