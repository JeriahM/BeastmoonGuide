/* import Parse from "parse"; */
import { checkUser } from "./Users";

// update to axios
export const createWizard = (newWiz) => {
   /* if(!checkUser())
      return alert("You have to be logged in to create a wizard");

   const Wizard = new Parse.Object.extend("wizard");
   const wizard = new Wizard();

   wizard.set("firstName", newWiz.firstName);
   wizard.set("lastName", newWiz.lastName);
   wizard.set("school", newWiz.school);
   wizard.set("level", parseInt(newWiz.level));
   wizard.set("user", Parse.User.current());

   return wizard.save().then((wiz) => {
      alert(
         `Successfully created wizard ${wiz.get("firstName")} ${wiz.get("lastName")}`
      );
   })
   .catch((error) => {
      alert(`Error: ${error.message}`);
   }); */
};

// update to axios
export const updateWizard = (newWiz) => {
   /* const Wizard = new Parse.Object.extend("wizard");
   const query = new  Parse.Query(Wizard);
   return query.get(newWiz.id)
   .then((wiz) => {
      console.log("wiz", newWiz);
      wiz.set("firstName", newWiz.firstName);
      wiz.set("lastName", newWiz.lastName);
      wiz.set("level", parseInt(newWiz.level));
      return wiz.save();
   })
   .catch((error) => {
      alert( `Error: ${error.message}`);
   }); */
};

// update to axios
export const deleteWizard = (Id) => {
   /* const Wizard = new Parse.Object.extend("wizard");
   const query = new  Parse.Query(Wizard);
   return query.get(Id)
   .then((wizard) => {
      wizard.destroy();
   })
   .catch((error => {
      alert(`Error: ${error.message}`);
   })); */
};

// update to axios
export const getWizardsBySchool = async (school) => {
   /* const Wizard = new Parse.Object.extend("wizard");
   const query = new  Parse.Query(Wizard);
   query.equalTo("school", school);
   return await query.count(); */
};

// update to axios
export const getWizardsByUser = async () => {
   /* const Wizard = new Parse.Object.extend("wizard");
   const query = new  Parse.Query(Wizard);
   query.equalTo("user", Parse.User.current());
   return await query.findAll(); */
};

// update to axios
export const getWizardByID = async (Id) => {
   /* const Wizard = new Parse.Object.extend("wizard");
   const query = new Parse.Query(Wizard);
   query.equalTo("objectId", Id);
   return query.first(); */
}