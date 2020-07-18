import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDyDFjSSv7CnvyAjtpSAvBgyJ0_qDhygHM",
    authDomain: "datafilm-68e29.firebaseapp.com",
    databaseURL: "https://datafilm-68e29.firebaseio.com",
    projectId: "datafilm-68e29",
    storageBucket: "datafilm-68e29.appspot.com",
    messagingSenderId: "890509003077",
    appId: "1:890509003077:web:d2e5d4079bae14f43f562c",
    measurementId: "G-ML29DT3C7X"
};
firebase.initializeApp(firebaseConfig);

export const filmData = firebase.database().ref('dataForFilm')