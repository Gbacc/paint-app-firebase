import firebase from "firebase";

export let db;

export const initialize = () => {
  db = firebase.firestore();
};

export const getScheme = async () => {
  const collection = await db.collection("scheme").get();
  return collection.docs;
};

export const getSchemeByUser = async userId => {
  const collection = await db
    .collection("scheme")
    .where("userId", "==", userId)
    .get();
  return collection.docs;
};

export const getSchemeById = async id => {
  return await db
    .collection("scheme")
    .doc(id)
    .get();
};

export const createScheme = async scheme => {
  return await db.collection("scheme").add(scheme);
};

export const updateScheme = async (id, scheme) => {
  return await db
    .collection("scheme")
    .doc(id)
    .update(scheme);
};

export const patchScheme = async (id, property, value) => {
  return await db
    .collection("scheme")
    .doc(id)
    .update({ [property]: value });
};

export const loadPaints = async () => {
  const paints = await fetch(window.location.origin + "/paints.json");
  return paints.json();
};
