import { barliste } from "@/utils/constants"
import { Field, ErrorMessage } from "formik"

export const BarForm = () => (
  <>
    <Field component="select" name="barListe" className="border-2 p-2">
      {barliste.map((bar) => (
        <option key={bar} value={bar}>
          {bar}
        </option>
      ))}
    </Field>
    <ErrorMessage name="barListe" />
  </>
)
