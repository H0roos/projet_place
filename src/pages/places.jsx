/* eslint-disable max-lines-per-function */
import { BarForm } from "@/components/BarForm"
import { Button } from "@/components/Button"
import { Form } from "@/components/Form"
import { FormField } from "@/components/FormField"
import { HotelForm } from "@/components/HotelForm"
import { MuseeForm } from "@/components/MuseeForm"
import { ParcForm } from "@/components/ParcForm"
import { RestaurantForm } from "@/components/RestaurantForm"
import {
  typeDeLieux,
  parcliste,
  payant,
  museeliste,
  hotelliste,
  barliste,
  restaurantliste,
} from "@/utils/constants"
import axios from "axios"
import { Field, Formik, ErrorMessage } from "formik"
import Link from "next/link"
import { useState } from "react"
import * as yup from "yup"

export const getServerSideProps = async () => {
  const { data: places } = await axios("http://localhost:3000/api/places")

  return {
    props: {
      places,
    },
  }
}
const initialValues = {
  typeLieu: "",
  nomLieu: "Home",
  adresse: "",
  city: "",
  codePostal: "",
  country: "",
}
const validationSchema = yup.object({
  typeLieu: yup.string().min(3).required("catégorie de lieu requis"),
  nomLieu: yup.string().min(3).required("Nom requis"),
  adresse: yup.string().min(4).required("adresse requis"),
  city: yup.string().min(4).required("ville requis"),
  codePostal: yup.number().min(4).required("code postal requis"),
  country: yup.string().min(4).required("Pays requis"),
  restaurantListe: yup.string().oneOf(restaurantliste),
  parcListe: yup.string().oneOf(parcliste),
  parcMoney: yup.string().oneOf(payant),
  museeListe: yup.string().oneOf(museeliste),
  hotelListe: yup.string().oneOf(hotelliste),
  barListe: yup.string().oneOf(barliste),
})
const PlacesPage = (props) => {
  const { places: initialPlaces } = props
  const [places, setPlaces] = useState(initialPlaces)
  const [typeDeFiltre, setTypeDeFiltres] = useState("")
  const handleSubmit = async (values, { resetForm }) => {
    const { data: newPlace } = await axios.post("/api/places", values)
    setPlaces([newPlace, ...places])
    resetForm()
  }
  const handleFilterLieu = (event) => {
    setTypeDeFiltres(event.target.value)

    if (event.target.value !== "reset") {
      setPlaces(
        initialPlaces.filter((place) => place.typeLieu === event.target.value),
      )
    } else {
      setPlaces(initialPlaces)
    }
  }

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Form>
            <FormField name="nomLieu" placeholder="Nom du Lieu" />
            <ErrorMessage name="nomLieu" />
            <Field component="select" name="typeLieu" className="border-8 p-2">
              <option value="">Select type de Lieu</option>
              {typeDeLieux.map((typeLieu) => (
                <option key={typeLieu} value={typeLieu}>
                  {typeLieu}
                </option>
              ))}
            </Field>
            <ErrorMessage name="typeLieu" />
            {formikProps.values.typeLieu === typeDeLieux[0] && (
              <RestaurantForm />
            )}
            {formikProps.values.typeLieu === typeDeLieux[1] && <BarForm />}
            {formikProps.values.typeLieu === typeDeLieux[2] && <MuseeForm />}
            {formikProps.values.typeLieu === typeDeLieux[3] && <ParcForm />}
            {formikProps.values.typeLieu === typeDeLieux[4] && <HotelForm />}
            <FormField name="adresse" placeholder="Adresse" />
            <ErrorMessage name="adresse" />
            <FormField name="city" placeholder="City" />
            <ErrorMessage name="city" />
            <FormField name="codePostal" placeholder="Place Postal" />
            <ErrorMessage name="codePostal" />
            <FormField name="country" placeholder="Pays" />
            <ErrorMessage name="country" />

            <Button type="submit">ADD</Button>
          </Form>
        )}
      </Formik>
      <select onChange={handleFilterLieu} value={typeDeFiltre}>
        Quel Lieu veux tu filtrer ?
        {typeDeLieux.map((typeLieu) => (
          <option key={typeLieu} value={typeLieu}>
            {typeLieu}
          </option>
        ))}
        <option value="reset">Normal</option>
      </select>
      <ul className="p-8">
        {places.map((place, index) => (
          <li key={index}>
            <Link href={`/places/${place._id}/edit`}>
              - {place.nomLieu} {place.typeLieu}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PlacesPage
