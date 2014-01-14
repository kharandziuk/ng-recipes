var app, express;

express = require('express');

app = express();

app.configure(function() {
  return app.use('/static', express["static"](__dirname + "/static"));
});

app.get('/', function(request, response) {
  return response.sendfile(__dirname + "/views/index.html");
});

app.get('/data', function(request, response) {
  var dudes, urlFunction;
  urlFunction = function(a) {
    a.detailUrl = '#detail/' + a.id;
    return a;
  };
  dudes = [
    {
      id: 1,
      name: "bro",
      city: "Gondor"
    }, {
      id: 2,
      name: "dru",
      city: "Kyiv"
    }
  ];
  dudes = dudes.map(urlFunction);
  return response.json(dudes);
});

app.listen(3000);
