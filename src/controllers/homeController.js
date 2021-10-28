import db from "./../models/index";
import CRUDservices from "./../services/CRUDservices";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll(); //trong file models/user có modalname=User
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDservices.createNewUser(req.body);
  console.log(message);
  return res.send("Hello worđ");
};

let displayGetCRUD = async (req, res) => {
  let data = await CRUDservices.getAllUser();

  return res.render("displayCRUD.ejs", {
    dataUser: data,
  });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDservices.getUserInfoById(userId);
    // check data user not found
    return res.render("editCRUD.ejs", {
      user: userData,
    });
  } else {
    return res.send("User not found");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let allUser = await CRUDservices.updateUserData(data);
  return res.render("displayCRUD.ejs", {
    dataUser: allUser,
  });
};

let deleteCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await CRUDservices.deleteUserById(id);
    return res.send("delete user succeed");
  } else {
    return res.send("user not found");
  }
};

module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD,
};
