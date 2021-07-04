export default function validate(values) {
  let errors = {}

  if (!values.name.trim()) {
    errors.name = "Name is required"
  }

  if (!values.email) {
    errors.email = "Email is required"
  }

  if (!values.comment) {
    errors.comment = "Comment is required"
  }

  return errors;
};