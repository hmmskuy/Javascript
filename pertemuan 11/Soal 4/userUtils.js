var userRole = "admin";

function getUser(nama) {
  return "user : " + nama;
}

function getUserRole(userRole){
    return "user role : " + userRole ;
}

export default getUser;
export {getUserRole};
