import Leaflet from 'leaflet';

import mapMarker from '../assets/icons/mapmarker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarker,

  iconSize: [30, 40],
  iconAnchor: [15, 20],
  popupAnchor: [170, 40],
});

export default mapIcon;
