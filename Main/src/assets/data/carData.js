// import all images from assets/images directory
import img01 from "../all-images/cars-img/dubinsko.jpeg";
import img02 from "../all-images/cars-img/eksterijer.jpeg";
import img03 from "../all-images/cars-img/fulldetail.jpeg";
import img04 from "../all-images/cars-img/poliranje.jpeg";
import img05 from "../all-images/cars-img/keramika.jpeg";
import img06 from "../all-images/cars-img/farovi.jpeg";


const carData = [
  {
    id: 1,
    rating: 112,
    carName: "Detail enterijera",
    imgUrl: img01,
    price: 80,
    description:
      "Detaljno mašinsko pranje sjedišta, plastika i drugih vrsta tapacira. Hemijska dekontaminacija unutrašnjosti, čišćenje parom i zaštita svih površina.",
  },

  {
    id: 2,
    rating: 102,
    carName: "Detail eksterijera",
    imgUrl: img02,
    price: 30,
    description:
      "Pranje felgi i guma, beskontaktno pranje vozila, hemijska dekontaminacija, kontaktno pranje, nanošenje zaštite.",
  },

  {
    id: 3,
    rating: 132,
    carName: "Full Detail",
    imgUrl: img03,
    price: 100,
    description:
      "Detail enterijera i eksterijera.",
  },

  {
    id: 4,
    rating: 102,
    carName: "Poliranje",
    imgUrl: img04,
    price: 250,
    description:
      "Detail eksterijera, priprema boje za poliranje glinom, jednoslojno poliranje. Uklanja do 70% ogrebotina na vozila.",
  },

  {
    id: 5,
    rating: 94,
    carName: "Višeslojno poliranje",
    imgUrl: img05,
    price: 400,
    description:
      "Detail eksterijera, brušenje sitnom granulacijom po potrebi, priprema boje za poliranje glinom, detaljno višeslojno poliranje. Uklanja do 95% ogrebotina na vozila.",
  },

  {
    id: 6,
    rating: 119,
    carName: "Poliranje farova",
    imgUrl: img06,
    price: 60,
    description:
      "Detaljno brušenje farova krećući od brusnog papira granulacije 180, te postepeno povećavanje do granulacije 3000. Poliranje farova specijalnom pastom samo za farove, te nanošenje zaštite",
  },

]
export default carData;
