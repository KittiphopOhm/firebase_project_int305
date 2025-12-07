var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = getFirestore()

var brands = [
  {
    "name": "Apple"
  },
  {
    "name": "Sony"
  },
  {
    "name": "Edifier"
  },
  {
    "name": "Marshall"
  },
    {
    "name": "JBL"
  },
  {
    "name": "Sennheiser"
  },
  {
    "name": "Beyerdynamic"
  },
  {
    "name": "HyperX"
  },
  {
    "name": "Logitech"
  },
  {
    "name": "Audio‑Technica"
  },
]

brands.forEach((obj) => {
  db.collection("brands").add({
    name: obj.name
  }).then(docRef => {console.log("Brand Document written with ID : "+ docRef.id)})
})
