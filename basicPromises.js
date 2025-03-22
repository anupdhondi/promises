let promise = new Promise((resolve, reject) => {
  reject("error");
  resolve("Hello");
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });

function promiseWithVariable(text) {
  return new Promise((resolve, reject) => {
    resolve(text);
  });
}

promiseWithVariable("BOOM BOOM").then((msg) => {
  console.log(msg);
});

new Promise((resolve, reject) => {
  resolve("I want to resolve this...");
})
  .then((msg) => console.log(msg))
  .finally(() => console.log("I will finally run you"));
