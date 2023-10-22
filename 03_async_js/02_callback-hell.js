function displayRecommendedProductList() {
  const username = localStorage.get("username");
  getAuthToken(username, function (err, response) {
    if (err) alert("error");
    const token = response.body;
    getProductList(token, function (err, response) {
      if (err) alert("error");
      const prodList = JSON.parse(response.body);
      for (let i = 0; i < prodList.length; i++) {
        const prodId = prodList[i].id;
        getFullProduct(prodId, function (err, response) {
          if (err) alert("error");
          // some DOM update
          document.getElementById("prod-container").appendChild();
        });
      }
    });
  });
}

// Promises
function displayRecommendedProductList() {
  const username = localStorage.get("username");
  getAuthToken(username)
    .then((response) => {
      const token = response.body;
      getProductList(token)
        .then(getProductListHandler)
        .catch((err) => alert("error"));
    })
    .catch((err) => alert("error"));
}

function getProductListHandler(response) {
  const prodList = JSON.parse(response.body);
  for (let i = 0; i < prodList.length; i++) {
    const prodId = prodList[i].id;
    getFullProduct(prodId)
      .then((prod) => {
        // some DOM update
        document.getElementById("prod-container").appendChild();
      })
      .catch((err) => alert("error"));
  }

}

// Async / Await
async function displayRecommendedProductList() {
  try {
    const username = localStorage.get("username");
    const responseToken = await getAuthToken(username);
    const token = responseToken.body;
    const responseProdList = await getProductList(token);
    const prodList = JSON.parse(responseProdList.body);

    for (let i = 0; i < prodList.length; i++) {
      const prodId = prodList[i].id;
      const fullProd = await getFullProduct(prodId);
      document.getElementById("prod-container").appendChild(fullProd);
    }
  } catch (error) {
    alert("error");
  }
}
