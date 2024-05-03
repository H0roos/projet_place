import { restaurantliste } from "@/utils/constants"
import { Field, ErrorMessage } from "formik"

export const RestaurantForm = () => (
  <>
    <Field component="select" name="restaurantListe" className="border-2 p-2">
      {restaurantliste.map((restaurant) => (
        <option key={restaurant} value={restaurant}>
          {restaurant}
        </option>
      ))}
    </Field>
    <ErrorMessage name="restaurantListe" />
  </>
)
