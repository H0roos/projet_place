import { museeliste } from "@/utils/constants"
import { Field, ErrorMessage } from "formik"

export const MuseeForm = () => (
  <>
    <Field component="select" name="museeListe" className="border-2 p-2">
      {museeliste.map((musee) => (
        <option key={musee} value={musee}>
          {musee}
        </option>
      ))}
    </Field>
    <ErrorMessage name="museeListe" />
  </>
)
