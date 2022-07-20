function authorization(role, permission_name) {
  if (role.name == "admin") return true;
  if (role.name == "user") {
    return role.permission[permission_name];
  }
  if (role == "visitor") return false;
}

function authFactory(callback) {
  return function (role) {
    return function (permission_name) {
      return callback(role, permission_name);
    };
  };
}

const adminAuth = authFactory(authorization)({ name: "admin" });
const visitorAuth = authFactory(authorization)({ name: "visitor" });
const userAuth = authFactory(authorization)({
  name: "user",
  permission: { change_password: true },
});

console.log(adminAuth("change_password"));
console.log(userAuth("change_username"));
