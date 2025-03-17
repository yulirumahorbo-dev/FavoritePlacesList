import * as SQLite from "expo-sqlite";
import { Place } from "../models/place";

const database = SQLite.openDatabaseSync("favplaces.db");

export function init() {
  database.runSync(`
        CREATE TABLE IF NOT EXISTS favplaces (
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL
        )
    `);
}

export function insertPlace(place) {
  console.log("Inserting place:", place); // Log the entire place object
  database.runSync(
    `INSERT INTO favplaces (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?) `,
    [
      place.title,
      place.imageUri,
      place.address,
      place.location.lat,
      place.location.lng,
    ]
  );
}

export async function fetchPlaces() {
  const result = await database.getAllAsync("SELECT * FROM favplaces");

  const places = [];

  for (const dp of result) {
    places.push(
      new Place(
        dp.title,
        dp.imageUri,
        {
          address: dp.address,
          lat: dp.lat,
          lng: dp.lng,
        },
        dp.id
      )
    );
  }
  return places;
}

export async function fetchPlaceDetails(id) {
  const dbPlace = await database.getFirstAsync(
    "SELECT * FROM favplaces WHERE id = ?",
    [id]
  );
  const place = new Place(
    dbPlace.title,
    dbPlace.imageUri,
    { lat: dbPlace.lat, lng: dbPlace.lng, address: dbPlace.address },
    dbPlace.id
  );

  return place;
}
