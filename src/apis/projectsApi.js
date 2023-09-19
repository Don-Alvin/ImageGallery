import { collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
import { db } from "./firebase";
import { toast } from "react-toastify";

// get all projects
export const getProjects = async () => {
	try {
		const q = query(collection(db, "projects"));
		const response = await getDocs(q);
		const projects = response.docs.map((document) => document.data());
		return projects;
	} catch (error) {
		toast.error("Error fetching projects");
	}
};

// delete a project
export const deleteProject = async (projectName) => {
	try {
		await deleteDoc(doc(db, "projects", projectName));
	} catch (error) {
		console.error(error.message);
		throw new Error("Project could not be deleted");
	}
};
