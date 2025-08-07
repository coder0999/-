// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzXajGeExTVfcMJ9L3fJjRl9TSu0apRZY",
    authDomain: "tanya-thanawey.firebaseapp.com",
    projectId: "tanya-thanawey",
    storageBucket: "tanya-thanawey.firebasestorage.app",
    messagingSenderId: "963147710003",
    appId: "1:963147710003:web:355267be9545ee8f1fad46",
    measurementId: "G-QJ6TK546YK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Function to save an exam to Firestore.
 * @param {object} examData The exam data object.
 */
export async function saveExamToFirestore(examData) {
    try {
        const docRef = await addDoc(collection(db, "exams"), examData);
        console.log("Exam added with ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

/**
 * Function to save a review to Firestore.
 * @param {object} reviewData The review data object.
 */
export async function saveReviewToFirestore(reviewData) {
    try {
        const docRef = await addDoc(collection(db, "reviews"), reviewData);
        console.log("Review added with ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
