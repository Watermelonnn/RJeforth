
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', 
	{ 
		 title : 'rJeForth 測試環境',
		Author : '臺灣符式推廣協會',
		  Date : '2014-07-08' 
	}
  );
};