import axios from "axios";

const getFormSchools = (form) => {
   var folder;
   switch(form){
      case "Colossus":
         folder = "/Forms/col.json";
         break;
      case "Cyclops":
         folder = "/Forms/clops.json";
         break;
      case "Draconian":
         folder = "/Forms/drake.json";
         break;
      case "Elf":
         folder = "/Forms/elf.json";
         break;
      case "Fairy":
         folder = "/Forms/fairy.json";
         break;
      case "Krokomummy":
         folder = "/Forms/krok.json";
         break;
      case "Minotaur":
         folder = "/Forms/mino.json";
         break;
      case "Pig":
         folder = "/Forms/pig.json";
         break;
      case "Rat":
         folder = "/Forms/rat.json";
         break;
      case "Wolf":
         folder = "/Forms/wolf.json";
         break;
      default:
         break;
   }
   return axios
   .get(folder)
   .then((response) => {
      var info = [];
      //eslint-disable-next-line
      response.data.map(function(beast){
         info.push(beast.school);
      });
      return info;
   })
   .catch((err) => {
      console.log("GET Error: ", err);
   });
};

export default getFormSchools;