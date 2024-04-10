const sleep = async function (time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
//代码样例
(async function () {
  console.log(1);
  await sleep(3000);
  console.log(2);
})();
