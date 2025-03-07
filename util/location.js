const GEOAPIFY_API_KEY = "d56c3ef0ad7d4a479346d784b26da3bb";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=400&height=200&center=lonlat%3A${lng}%2C${lat}&zoom=14&marker=lonlat%3A${lng}%2C${lat}%3Btype%3Aawesome%3Bcolor%3A%23bb3f73%3Bsize%3Ax-large%3Bicon%3Apaw%7Clonlat%3A${lng}%2C${lat}%3Btype%3Amaterial%3Bcolor%3A%234c905a%3Bicon%3Atree%3Bicontype%3Aawesome%7Clonlat%3A${lng}%2C${lat}%3Btype%3Amaterial%3Bcolor%3A%234c905a%3Bicon%3Atree%3Bicontype%3Aawesome&apiKey=${GEOAPIFY_API_KEY}
`;
  return imagePreviewUrl;
}
