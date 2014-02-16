var request = require('request');
var cheerio = require('cheerio');
var _ = require('underscore')._;


exports.post = function (req, res) {
  // var id = req.params.id;
  // var url = 'http://www.google.es/search?q=' + id;  

  // request(url, function(err, resp, body){
	 //  $ = cheerio.load(body);
	 //  links = $('cite'); //use your CSS selector here
  //     var result=[];
	 //  $(links).each(function(i, link){
	 //    result.push($(link).text());
	 //  });
	 //  res.json(result);
	  
	//});
 var url  ="http://www.lfp.es/";
 request(url, function (err, resp, body){
  if(err){
    throw err;
  }
   $ = cheerio.load(body);
   var result = [];

   $('.box_horario_jornada < a').children().each(function (){
    var r =$(this).text();
    if(r != ""){
      result.push(r);
    }
      
    
     
    
   });
    var o = [];

    for(var i = 0; i<result.length; i +=3){
       var p = {};
       p.local = result[i];
       p.result = result[i+1];
       p.visitant = result[i+2];
       o.push(p);

    }
    
    res.json(o);
   
 })
};