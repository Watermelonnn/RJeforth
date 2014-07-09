/*
 *   範例程式： 傳入 R 語言指令，運算後，將結果傳到頁面 
 */
var rio = require("rio");
// 載入 fs 套件
var fs = require("fs"),
    filename = "./Rcode/test.R";
    encode = "utf8";
    fs.readFile(filename, encode, function(err, file) {
          console.log(file);
    });

exports.rio = function(req, res){
	options = {
		host : "localhost",
		port : 6311,
        callback: function (err, val) {
            if (!err) {
			// console.log("Req = " + req.query.xxx); // req.query.xxx 可取得傳入參數 xxx 的值
            	console.log("傳回結果: "+ val);
				var data = {
					'成功' : true,
					 'res' : val
				};
				return res.send(data);
				// 直接將訊息用 JSON.stringify 格式傳回
                // return res.send("cb("+JSON.stringify(val)+")");
            } else {
            	console.log("錯誤: RServe 呼叫失敗！");
                return res.send({'傳回結果' : false});
            }
        },
    }
    rio.enableDebug(true); // 開啟除錯模式
    
	// 要執行的 R 語言程式碼
	/*
	var Line1 = 'x = 1:10;';
	var Line2 = 'y = mean(x);';
	var Line3 = 'x ^ y;';
	Rcode = Line1 + Line2 + Line3;
	*/
	var RCode = fs.toString();
	console.log("====> " + RCode.toString());
	console.log("fs ==" + fs[0]);
	//rio.evaluate(fs, options); 
};