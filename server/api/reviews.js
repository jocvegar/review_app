import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps, cert } from "firebase-admin/app";

const apps = getApps();

if (!apps.length) {
  initializeApp({
    credential: cert(
      "./rest-review-hn-firebase-adminsdk-uq13y-32468f65f7.json"
    ),
  });
}

export default async (request, response) => {
  const db = getFirestore();
  const testsSnap = await db.collection("test").get();
  const testsData = testsSnap.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return testsData;
};
