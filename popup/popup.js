let default_displayUnit = ['all', 'sci', 'swufe', 'ccf', 'cufe', 'sciif', 'fdu', 'sjtu', 'cssci', 'xmu', 'ruc', 'cscd', 'uibe', 'swjtu', 'xdu','sci-base', 'sci-up', 'pku'];

function save_options() {

	let array = [];
	let checkboxes = document.getElementById("check").querySelectorAll('input[type=checkbox]:checked');

	for (let i = 0; i < checkboxes.length; i++) {
		array.push(checkboxes[i].value);
	}
	chrome.storage.sync.set({
		"displayUnit": array
	}, function() {
		setTimeout(function() {
			document.getElementById("save").innerHTML="Save";
		}, 800);
		document.getElementById("save").innerHTML="Success!";
		// $(".button > span").css("color","#958D50");
	});
}

function restore_options() {
	chrome.storage.sync.get({"displayUnit": default_displayUnit}, function(items) {
		items = items["displayUnit"];
		document.getElementById('swufe').checked = items.includes('swufe');
		document.getElementById('ccf').checked = items.includes('ccf');
		document.getElementById('cufe').checked = items.includes('cufe');
		document.getElementById('sciif').checked = items.includes('sciif');
		document.getElementById('sci').checked = items.includes('sci');
		document.getElementById('fdu').checked = items.includes('fdu');
		document.getElementById('sjtu').checked = items.includes('sjtu');
		document.getElementById('cssci').checked = items.includes('cssci');
		document.getElementById('xmu').checked = items.includes('xmu');
		document.getElementById('ruc').checked = items.includes('ruc');
		document.getElementById('cscd').checked = items.includes('cscd');
		document.getElementById('uibe').checked = items.includes('uibe');
		document.getElementById('swjtu').checked = items.includes('swjtu');
		document.getElementById('xdu').checked = items.includes('xdu');
		document.getElementById('sci-base').checked = items.includes('sci-base');
		document.getElementById('sci-up').checked = items.includes('sci-up');
		document.getElementById('pku').checked = items.includes('pku');
		document.getElementById('check-all').checked = items.includes('all');
	});
}

function checkAll(){
	var check1 = document.getElementById("check-all");
	var checked = check1.checked;
	var checks = document.getElementsByTagName("input");
	for(var i = 0; i < checks.length; i++){
		var checkone = checks[i];
		checkone.checked = checked;
	}
}

function cancelCheckAll(){
	var checks = document.getElementsByTagName("input");
	for(var i = 1; i < checks.length; i++){
		var checkone = checks[i];
		if(checkone.checked == false){
			document.getElementById("check-all").checked = checkone.checked;
			break;
		}
		document.getElementById("check-all").checked = checkone.checked;
	}
}

$(function(){
	$(':input').labelauty();
});


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);
document.getElementById('check-all').addEventListener('click',checkAll);

var inputList = document.getElementsByTagName('input')
for(var i = 1; i < inputList.length; i++){
	inputList[i].addEventListener('click',cancelCheckAll);
}
