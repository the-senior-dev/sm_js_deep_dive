"use strict";

function reply(action) {
  if (action === "greet") return sayHello("foo");
  return "bye ... !";
}

{
  // this scope
  function sayHello(username) {
    return `$Hi, I am ${username}!`;
  }
}

reply("greet");
