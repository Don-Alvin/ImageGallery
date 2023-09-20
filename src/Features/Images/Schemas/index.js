import * as yup from "yup";

export const addImageSchema = yup.object().shape({
	tag: yup
		.string()
		.min(3, "Project name must have atleast 3 characters")
		.required("Please give your image a tag"),
	image: yup.mixed().required("Please upload an image"),
});
