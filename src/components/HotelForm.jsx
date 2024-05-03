import { hotelliste } from "@/utils/constants"
import { Field, ErrorMessage } from "formik"

export const HotelForm = () => (
  <>
    <Field component="select" name="hotelListe" className="border-2 p-2">
      {hotelliste.map((hotel) => (
        <option key={hotel} value={hotel}>
          {hotel}
        </option>
      ))}
    </Field>
    <ErrorMessage name="hotelListe" />
  </>
)
