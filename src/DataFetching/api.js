
const db = {
  account: "jay@trend.com.tw",
  password: "root"
};

export const authUser = credentials =>
  new Promise((resolve, reject) => {
    const { account, password } = credentials;
    return setTimeout(() => {
      if (account === db.account && password === db.password) {
        resolve('Jay Chung');
      }
      reject();
    }, 2000)
  });
