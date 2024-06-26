import axios from "axios";

const getFormImages = (form, school) => {
   var folder;
   switch(form){
      case "Colossus":
         folder = "/Forms/colImages.json";
         break;
      case "Cyclops":
         folder = "/Forms/clopsImages.json";
         break;
      case "Draconian":
         folder = "/Forms/drakeImages.json";
         break;
      case "Elf":
         folder = "/Forms/elfImages.json";
         break;
      case "Fairy":
         folder = "/Forms/fairyImages.json";
         break;
      case "Krokomummy":
         folder = "/Forms/krokImages.json";
         break;
      case "Minotaur":
         folder = "/Forms/minoImages.json";
         break;
      case "Pig":
         folder = "/Forms/pigImages.json";
         break;
      case "Rat":
         folder = "/Forms/ratImages.json";
         break;
      case "Wolf":
         folder = "/Forms/wolfImages.json";
         break;
      default:
         break;
   }
   return axios
   .get(folder)
   .then((response) => {
      var info = response.data.find((f) => f.school === school);
      return info;
   })
   .catch((err) => {
      console.log("GET Error: ", err);
   });
};

export default getFormImages;