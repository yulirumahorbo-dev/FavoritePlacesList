const GEOAPIFY_API_KEY = "d56c3ef0ad7d4a479346d784b26da3bb";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.geoapify.com/v1/staticmap?style=klokantech-basic&width=400&height=200&center=lonlat%3A${lng}%2C${lat}&zoom=14&marker=lonlat%3A${lng}%2C${lat}%3Btype%3Aawesome%3Bcolor%3A%23bb3f73%3Bsize%3Ax-large&apiKey=${GEOAPIFY_API_KEY}
`;
  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  const response = await fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${GEOAPIFY_API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch address!");
  }
  const data = await response.json();
  const address = data.features[0].properties.formatted;
  return address;
}
