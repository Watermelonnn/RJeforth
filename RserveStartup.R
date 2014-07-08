# 自動啟動 Rserve 環境
# install.packages(Rserve)
#
# 2014.07.08 Daniel Teng
# install.packages("Rserve", repos = "http://cran.csie.ntu.edu.tw")
# install.packages("Rserve", repos="http://cran.rstudio.com/")

# 列出所有安裝的函式庫
mylibrary = library()
# 設定 flag 來判斷是否已經安裝 Rserve 這個函式庫
flag = grep(pattern="Rserve", mylibrary)
# 如果 flag = 0 ，代表沒有安裝 RServe 函式庫，則安裝函式庫。
if(identical(flag, integer(0))) 	{
 install.packages("Rserve", repos = "http://cran.csie.ntu.edu.tw") 
}

# 掛載 Rserve 函式庫
library(Rserve)
# 啟動 Rserve 服務
Rserve()

