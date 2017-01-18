import React, {PropTypes} from 'react';
import {Marker} from 'react-leaflet';
import {VectorMarkers} from 'Leaflet.vector-markers';

function parseColor(createdAt) {
  const sixHoursAgo = new Date();
  const dayAgo = new Date();
  const created = new Date(createdAt);
  let color = '#ff0000';

  sixHoursAgo.setHours(sixHoursAgo.getHours() - 6);
  dayAgo.setHours(dayAgo.getHours() - 24);

  if (created.getTime() < dayAgo.getTime()) {
    color = '#d3d3d3';
  } else if (created.getTime() < sixHoursAgo.getTime()) {
    color = '#ff9999';
  }

  return color;
}

function Point(props = {}) {
  const icon = VectorMarkers.icon({
    icon: props.icon,
    markerColor: parseColor(props.createdAt),
  });

  return (
    <Marker
      key={props.id}
      position={{lat: props.lat, lng: props.long}}
      icon={icon}
    />
  );
}

Point.propTypes = {
  id: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Point;
