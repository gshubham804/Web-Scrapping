const request = require('request');
const cheerio = require('cheerio');
request('https://www.worldometers.info/coronavirus/', cb);

// function cb(error, response, body)
// {
//     console.error('error:',error);
//     console.log('statusCode:', response && response.statusCode);
//     console.log('body:', body);
// };

// function cb(error, response , html)
// {
//     if(error)
//     {
//         console.error('error:', error);
//     }
//     else{
//         console.log('html:', html);
//     }
// }

function cb(error,response, html)
{
    if(error)
    {
        console.error('error:', error);
    }
    else{
        extractHTML(html);
    }
};

function extractHTML(html)
{
  let selectorTool = cheerio.load(html);
  let statsArr = selectorTool('.maincounter-number');
  console.log(statsArr.length);
  for(let i=0;i<statsArr.length;i++)
  {
     let data = selectorTool(statsArr[i]).text();
     console.log(data);
  }
}