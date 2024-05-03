import { Form as FormikForm } from "formik"

export const Form = (props) => (
  <FormikForm className="flex flex-col gap-2" {...props} />
)

export const Form2 = (props) => (
  <FormikForm noValidate className="flex flex-col gap-4" {...props} />
)

export const Form3 = (props) => (
  <FormikForm noValidate className="flex flex-col gap-8" {...props} />
)

export const Form4 = (props) => (
  <FormikForm noValidate className="flex flex-col gap-16" {...props} />
)
