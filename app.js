const express = require("express");
const app = express();
//require('dotenv').config() //from npm dotenv: bas katabneha lamma naamel node app.js aal cmd la7 yekhod port 5555
const PORT = process.env.PORT || 3030;

//cors: menzida hon men ba3ed ma nechteghel bi folder 5
var cors = require('cors');
app.use(cors())


const xlsx = require("xlsx");
let wb = xlsx.readFile('excel.xlsx');
let wh = wb.Sheets['Sheet1'];
let _data = xlsx.utils.sheet_to_json(wh);


// your code
//from npm: express
app.get('/', function (req, res) {
    res.send('Hello World')
  })



app.get('/students', function (req, res) {
  res.send(_data)
})


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});