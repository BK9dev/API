const express = require("express");
const app = express();
const api = require("./api");

//===========================================================================>

app.use(express.json());
app.set("json spaces", 2); //عشان يجيك الرد مفرق اسطر مب كل شي بسطر واحد
const port = process.env.PORT || 3000; //منفذ الخادم
app.use(api);
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

//===========================================================================>

module.exports = app;