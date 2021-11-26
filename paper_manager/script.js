function paperManagerStart(){
	let url = window.location.href;
	
	if(url.indexOf("xueshu.baidu.com/usercenter/paper") > 0){
		AddBaiduPaperManger();
		// 弹出模态框
		$("#easyScholar_baidu_paper").on("click", function(){
			$('body').dailog({type:'success'});
		});
	}
}

$(document).ready(paperManagerStart);