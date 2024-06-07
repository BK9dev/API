const axios = require("axios")
const express = require("express");
const router = express.Router();
//===========================================================================>

router.get("/gpt4", (req, res) => {
    const text = req.query.q || req.query.query;

    // هنا تحط variable ل text,
    // يعني بدل تكتب الجملة ذي كل مرة req.query.q || req.query.query 
    //تكتب text وفقط

    if(!text) return res.send({status: false, owner: '@إسمك', err: 'اكتب شيئا !'});
  // if(!text) تعني في حالة ما كتب شي ترسل له السطر ذا الي تقول فيه اكتب شي

    axios.get('https://api.bk9.site/ai/gpt4?q='+text)
        .then((response) => {
            const responseData = response.data; //هنا يأخذ المعلومات من الرابط فوق ويحطهم عندك
            res.send({status: true, owner: '@إسمك', BK9: responseData});
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({status: false, owner: '@إسمك', err: 'الخادم مشغول الآن. حاول مرة أخرى في وقت لاحق!'});
        });
});

//===========================================================================>

module.exports = router;