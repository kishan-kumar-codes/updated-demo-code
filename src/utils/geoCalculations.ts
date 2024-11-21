export const calculateGeoChanges = (
    distance: number,
    latitude: number
): { deltaLat: number; deltaLon: number } => {
    const milesPerDegreeLat = 69.172; // Approx constant for latitude
    const earthRadius = 3958.8; // Average radius of the Earth in miles

    const deltaLat = distance / milesPerDegreeLat;

    // Calculating the change in longitude requires considering the latitude
    const radiusAtLatitude = Math.cos(latitude * (Math.PI / 180)) * earthRadius;
    const milesPerDegreeLon = (2 * Math.PI * radiusAtLatitude) / 360;
    const deltaLon = distance / milesPerDegreeLon;

    return { deltaLat, deltaLon };
};
