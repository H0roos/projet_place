import { parcliste, payant } from "@/utils/constants"
import { Field, ErrorMessage } from "formik"

export const ParcForm = () => (
  <>
    <Field component="select" name="parcListe" className="border-2 p-2">
      {parcliste.map((parc) => (
        <option key={parc} value={parc}>
          {parc}
        </option>
      ))}
    </Field>
    <ErrorMessage name="parcListe" />
    <p>Payant</p>
    <Field component="select" name="parcMoney" className="border-2 p-2">
      {payant.map((paye) => (
        <option key={paye} value={paye}>
          {paye}
        </option>
      ))}
    </Field>
    <ErrorMessage name="parcMoney" />
  </>
)
