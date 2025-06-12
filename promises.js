// promise 'future ma execute garni kam garxa' current time ma haina aalik paxi ko time ma.
// Js object Data type

// There are the 3 stage of a promise
// 1. Pending
// 2. Fulfill(resolve)/Rejection
// 3. Settlement

const promise = new Promise((resolve, reject) => {
  // logic
  // 1ta matra hunxa.
  resolve({
    msg: "I am resolve of Promise",
  });
  //   reject("I am reject of promise");
});

// console.log(promise);

// promise handel, 2 ways {1. then/catch | 2. async/await}
// promise
//   .then((resolveData) => {
//     console.log(resolveData);
//     console.log(resolveData.msg);
//   })
//   .catch(((exception)=>{}) => {
//     console.log((exception)=>{});
//   })
//   .finally(() => {
//     console.log("Inside finally");
//   }); // finally jahile empty block ho yo chai optional ho.

// console.log("i am last line");

// concept clear
// fun1(true)
//   .then((res1) => {
//     console.log(res1);
//   })
//   .catch((exception) => {
//     console.log(exception);
//   });
// fun2(true)
//   .then((res2) => {
//     console.log(res2);
//   })
//   .catch((exception) => {
//     console.log(exception);
//   });
// fun3(true)
//   .then((res3) => {
//     console.log(res3);
//   })
//   .catch((exception) => {
//     console.log(exception);
//   });

// console.log("I am the first");

//await
const validation = async (x) => {
  if (x) {
    return "I am resolve of validation";
  } else {
    throw "I am reject of validation";
  }
};

const login = async (x) => {
  if (x) {
    return "I am resolve of login";
  } else {
    throw "I am reject of login";
  }
};

const giveAccess = async (x) => {
  if (x) {
    return "I am resolve of giveAccess";
  } else {
    throw "I am reject of giveAccess";
  }
};

const handelDashboard = async (x) => {
  if (x) {
    return "I am resolve of handelDashboard";
  } else {
    throw "I am reject of handelDashboard";
  }
};
const handleAsync = async () => {
  try {
    const validationRes = await validation(true); // this will throw
    const loginRes = await login(true);
    const giveAccessRes = await giveAccess(true);
    const handleDashboardRes = await handelDashboard(true);

    console.log(validationRes);
    console.log(loginRes);
    console.log(giveAccessRes);
    console.log(handleDashboardRes);
  } catch (exception) {
    console.log(exception);
  }
};

handleAsync();
