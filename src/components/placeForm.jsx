import { Button2, Button3 } from "@/components/Button"
import { Form } from "@/components/Form"
import { FormField } from "@/components/FormField"
import { typeDeLieux } from "@/utils/constants"
import axios from "axios"
import { ErrorMessage, Field, Formik } from "formik"
import { useRouter } from "next/router"
import * as yup from "yup"

const validationSchema = yup.object({
  typeLieu: yup.string().min(3).required("catégorie de lieu requis"),
  nomLieu: yup.string().min(3).required("Nom requis"),
  adresse: yup.string().min(4).required("adresse requis"),
  city: yup.string().min(4).required("ville requis"),
  codePostal: yup.number().min(4).required("code postal requis"),
  country: yup.string().min(4).required("Pays requis"),
})
// eslint-disable-next-line max-lines-per-function
export const PlaceForm = ({ initialValues }) => {
  const router = useRouter()
  const handleSubmit = (values) => {
    console.log(values)
  }
  const deleteplace = async () => {
    try {
      await axios.delete(`/api/places/${initialValues.placeId}`)
      router.push("/places")
    } catch (error) {
      console.error("Erreur lors de la suppression de la tâche :", error)
    }
  }

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field component="select" name="typeLieu" className="border-8 p-2">
            <option value="">Select type de Lieu</option>
            {typeDeLieux.map((typeLieu) => (
              <option key={typeLieu} value={typeLieu}>
                {typeLieu}
              </option>
            ))}
          </Field>
          <ErrorMessage name="typeLieu" />
          <FormField name="nomLieu" placeholder="Nom du lieu" />
          <ErrorMessage name="nomLieu" />
          <FormField name="adresse" placeholder="Adresse" />
          <FormField name="codePostal" placeholder="Code Postal" />
          <ErrorMessage name="codePostal" />
          <FormField name="country" placeholder="Pays" />
          <ErrorMessage name="country" />
          <Button2 type="submit" disabled={isSubmitting}>
            SAVE
          </Button2>
          <Button3 type="click" onClick={deleteplace}>
            Delete
          </Button3>
        </Form>
      )}
    </Formik>
  )
}
