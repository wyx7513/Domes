//显示图片自动切换
        //获取div标签数组
    	var _div = document.getElementsByClassName("neck_tupian");
    	//获取下面文字按钮的4个li的集合
    	var btns = document.getElementsByClassName("li");
    	//定义一个控制li的索引
    	var index = 0;
    	//定义一个消除定时器的返回值的id
        var mId;
        //定义一个判断定时器是否运行的表示    true为运行了定时器  flose表示清除了定时器
        var flog;
        //初始值
        hideAll(_div);//先隐藏全
        _div[0].style.opacity = "1";//显示索引对应的li
    	btns[0].style.background = "red";

    	//设置一个定时切图的定时器 每隔四秒切换一次图
    	mId = setInterval(show, 3000);
    	//上一页
    	function mUp(){
    		//消除定时器
    		clearInterval(mId);
    		if(flog){
    			--index;
    			flog = false;
    		}
    		//先让index减1
    		--index;
    		if(index == -2){
    			index = 2;
    		}
    		if(index < 0){
    			index = 3;
    		}
    		hideAll(_div);//先隐藏全部
    		_div[index].style.opacity = "1";//显示索引对应的li
    		btns[index].style.background = "red";
    		//修改完后 启动定时器
			mId = setInterval(show,3000);
    	}
    	//下一页
    	function mDown(){
    		//消除定时器
    		clearInterval(mId);
    		if(flog){
    			--index;
    			flog = false;
    		}
    		//先让index自加
    		++index;
    		if(index > 3){
    			index = 0;
    		}
			hideAll(_div);//先隐藏全部
			_div[index].style.opacity = "1";//显示索引对应的li
			btns[index].style.background = "red";
			//修改完后 启动定时器
			mId = setInterval(show,3000);
    	}
    	//点击停止事件
    	function dianji(ind){
    		//清除定时器
    		clearInterval(mId);
    		hideAll(_div);//先隐藏全部
    		_div[ind].style.opacity = "1";//显示索引对应的li
    		btns[ind].style.background = "red";
    		//修改Ind的值
    		index = ind;
    		//修改完后  启动定时器
    		mId = setInterval(show,3000);
    		
    	}
    	function show(){
    		hideAll(_div);//先隐藏全部
    		flog = true;
    		_div[index].style.opacity = "1";//显示索引对应的li
    		btns[index].style.background = "red";
    		index++;
    		if(index > _div.length - 1){
    			index = 0;
    		}
    	}

    	function hideAll(arr) {
    		//清除图片的透明度 全部为0
    		for (var i = 0; i < _div.length; i++) {
    			_div[i].style.opacity = "0";//隐藏	透明度改为0
    		}
    		//清除所有的btns  背景为半透明
    		for(var i = 0; i < btns.length; i++){
    			btns[i].style.background = "rgba(0,0,0,0.5)";
    		}
    	}    
  