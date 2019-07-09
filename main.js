var request = require('request');

var bodyData = `{
  "title": "Pages five",
  "type": "page",
  "space": {
    "key": "~37927709"
  },
  "status": "current",
  "ancestors": [
    {
      "id": "297697322"
    }
  ],
  "body": {
      "storage": {
        "value": "<p>can you see me</p>",
        "representation": "storage"
      }
    }
  }`;

var options = {
   method: 'POST',
   url: 'https://techtonicgroup.atlassian.net/wiki/rest/api/content',
   auth: { username: 'ana.jauregui@techtonic.com', password: 'p9jxedHH3ti4reSiDcP3CDF2' },
   headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
   },
   body: bodyData
};

request(options, function (error, response, body) {
   if (error) throw new Error(error);
   console.log(
      'Response: ' + response.statusCode + ' ' + response.statusMessage
   );
   console.log('BODY: ', body);
});
