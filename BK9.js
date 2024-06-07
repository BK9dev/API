const express = require("express");
const app = express();
const api = require("./api");

//===========================================================================>

app.use(express.json());
app.set("json spaces", 2); //عشان يجيك الرد مفرق اسطر مب كل شي بسطر واحد

const port = process.env.PORT || 3000; //منفذ الخادم
app.use(api);

// صفحة نمشي بها حاليا
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>BK9</title>
    </head>
    <body>
      <h1>احبكم</h1>
      <p>اتمنى الكل فهم واستفاد</p>
      <a href="http://localhost:${port}/gpt4?q=السلام%20عليكم">إضغط هنا</a> //localhost تعني المكان الي انت مشغل فيه الموقع
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

//===========================================================================>

module.exports = app;
