// Import the functions you need from the SDKs you need
import "dotenv/config"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, collection, addDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOAVLkU2pjCgQHOVfdi759KIPS9S_OIpI",
  // apiKey: process.env.API_KEY,  //sino puedo hacer process.env.REACT_APP_API_KEY y no instalo dotenv
  authDomain: "bulsara-grow-shop.firebaseapp.com",
  projectId: "bulsara-grow-shop",
  storageBucket: "bulsara-grow-shop.appspot.com",
  messagingSenderId: "1007680812763",
  appId: "1:1007680812763:web:412b3ddc7324d225b63efe",
  measurementId: "G-C691531E4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore()

async function cargarBaseDeDatos  () {
    const promise = await fetch('../data/data.json')
    const productos = await promise.json()
    productos.forEach(async (producto) => {
        await addDoc(collection(db, "productos"), {
          id:producto.id,
          nombre: producto.nombre,
            descripcion: producto.descripcion,
            precio: producto.precio,
            img: "",
            categoria: producto.categoria,
            stock: producto.stock
            
          });
    })
    
}

export {db,app, cargarBaseDeDatos}
