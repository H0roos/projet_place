import {
  barliste,
  hotelliste,
  museeliste,
  parcliste,
  payant,
  restaurantliste,
  typeDeLieux,
} from "@/utils/constants"
import { Schema } from "mongoose"

export const placeSchema = new Schema({
  typeLieu: {
    type: String,
    required: true,
    enum: typeDeLieux,
  },
  barliste: {
    type: String,
    enum: barliste,
  },
  hotelliste: {
    type: String,
    enum: hotelliste,
  },
  museeliste: {
    type: String,
    enum: museeliste,
  },
  parcliste: {
    type: String,
    enum: parcliste,
  },
  money: {
    type: String,
    enum: payant,
  },
  restaurantliste: {
    type: String,
    enum: restaurantliste,
  },
  nomLieu: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  codePostal: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
})
