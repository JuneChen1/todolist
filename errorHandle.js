const headers = require('./header');

function errorHandle(res) {
  res.writeHead(400, headers);
  res.write(
    JSON.stringify({
      status: 'false',
      message: '欄位填寫錯誤，或無此 todo id',
    }),
  );
  res.end();
}

module.exports = errorHandle;
