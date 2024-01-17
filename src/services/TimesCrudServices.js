import firebase from "../firebase";

export const addImage = (data) => {
  firebase.firestore().collection("images").add(data);
};

export const deleteImage = async (id) => {
  try {
      await firebase.firestore().collection("images").doc(id).delete();
  } catch (error) {
      console.error(error);
  }
};

export const getAllImages = async (user) => {
  try {
    if (!user || !user.uid) {
      return [];
    }
    const snapshot = await firebase
      .firestore()
      .collection("images")
      .where("uid", "==", user.uid)
      .get();
    const images = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return images;
  } catch (error) {
    console.error(error);
  }
};