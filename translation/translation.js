let default_translateWhere = "google";
let default_translateKeycode = "84";
let default_translateColor = "#55aaff";

let translateWhere;
let translateKeycode;
let translateColor;

$(function(){
	chrome.storage.sync.get({"translateWhere": default_translateWhere, "translateKeycode": default_translateKeycode, "translateColor": default_translateColor}, function(items) {
		translateWhere = items.translateWhere;
		translateKeycode = items.translateKeycode;
		translateColor = items.translateColor;
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
		}
	});


function getTranslate(row_data) {
	let action = "trans_google";
	if(translateWhere == "baidu"){
		action = "trans_baidu";
	}
	chrome.runtime.sendMessage({
			action: action,
			data: row_data
		},
		function(data) {
			if (data == undefined) {
				data = "服务暂时不可用，请稍后再试";
			}
			let userSelection = window.getSelection();
			let range = userSelection.getRangeAt(0);
			range.collapse(false);
			let el = document.createElement("span");
			el.innerHTML = "  " + data + "  ";
			$(el).css("color", translateColor);
			$(el).css("font-weight", "bold");
			range.insertNode(el);
		})
}
