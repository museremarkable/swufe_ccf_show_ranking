let default_translateWhere = "google";
let default_translateKeycode = "84";
let default_translateHideKeycode = "89";
let default_translateColor = "#55aaff";
let default_translatePosition = "after";

let translateWhere;
let translateKeycode;
let translateColor;
let translatePosition;
let translateHideKeycode;

$(function(){
	chrome.storage.sync.get({"translateWhere": default_translateWhere, "translateKeycode": default_translateKeycode, 
	"translateColor": default_translateColor, "translatePosition":  default_translatePosition, "translateHideKeycode": default_translateHideKeycode}, function(items) {
		translateWhere = items.translateWhere;
		translateKeycode = items.translateKeycode;
		translateHideKeycode = items.translateHideKeycode;
		translateColor = items.translateColor;
		translatePosition = items.translatePosition;
	});
})

$(document).keydown(
	function(e) {
		let keyCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
		if (keyCode == parseInt(translateKeycode)) {
			let userSelection = window.getSelection();
			let userSelection_string = userSelection.toString();
			if (userSelection_string.length > 0) {
				getTranslate(userSelection_string);
			}
		}else if(keyCode == parseInt(translateHideKeycode)){
			if($(".easyScholarTranslationResult").length > 0){
				hideTranslateResult();
				console.log("----");
			}
		}
	});


function getTranslate(row_data) {
	// 确定翻译源
	let action = "trans_google";
	let actionNormal = "谷歌翻译";
	if(translateWhere == "baidu"){
		action = "trans_baidu";
		actionNormal = "百度翻译";
	}else if (translateWhere == "tengxun"){
		action = "trans_tengxun";
		actionNormal = "腾讯翻译";
	}else if (translateWhere == "caiyun"){
		action = "trans_caiyun";
		actionNormal = "彩云小译";
	}
	
	// 确定翻译位置
	let userSelection = window.getSelection();
	let range = userSelection.getRangeAt(0);
	if( translatePosition == "after" ){
		range.collapse(false);
	}else{
		range.collapse(true);
	}
	
	// 找出最大的value值
	let TranslationResultSpanVlue = 0 ;
	$(".easyScholarTranslationResult").each(
		function(){
			let temp = parseInt($(this).attr("value"));
			if(temp > TranslationResultSpanVlue){
				TranslationResultSpanVlue = temp;
			}
		}
	);
	TranslationResultSpanVlue += 1;
	//
	let el = document.createElement("span");
	el.innerHTML = " 翻译中... ";
	$(el).css("color", translateColor);
	$(el).css("font-weight", "bold");
	$(el).attr("class","easyScholarTranslationResult");
	$(el).attr("value",TranslationResultSpanVlue);
	range.insertNode(el);

	chrome.runtime.sendMessage({
			action: action,
			data: row_data
		},
		function(data) {
			if (data == undefined) {
				data = "服务暂时不可用，请稍后再试";
				el.innerHTML = "  " + actionNormal + data + "  ";
			}else{
				el.innerHTML = "  " + data + "  ";
			}
			
		})
}

function hideTranslateResult(){
	let TranslationResultSpanVlue = 0 ;
	$(".easyScholarTranslationResult:visible").each(
		function(){
			let temp = parseInt($(this).attr("value"));
			if(temp > TranslationResultSpanVlue){
				TranslationResultSpanVlue = temp;
			}
		}
	);
	$(".easyScholarTranslationResult[value="+ TranslationResultSpanVlue +"]").hide();
}