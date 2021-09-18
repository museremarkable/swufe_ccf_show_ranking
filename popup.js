function save_options() {

	var array = []
	var checkboxes = document.getElementById("check").querySelectorAll('input[type=checkbox]:checked')

	for (var i = 0; i < checkboxes.length; i++) {
		array.push(checkboxes[i].value)
	}
	chrome.storage.sync.set({
		options: array
	}, function() {
		setTimeout(function() {
			document.getElementById("save").innerHTML="<span>S</span><span>a</span><span>v</span><span>e</span>";
		}, 1000);
		document.getElementById("save").innerHTML="<span>S</span><span>u</span><span>c</span><span>c</span><span>e</span><span>s</span><span>s</span>";
		// $(".button > span").css("color","#958D50");
	});
}

function restore_options() {
	chrome.storage.sync.get({
		options: ['all', 'sci', 'swufe', 'ccf', 'cufe', 'sciif', 'fdu', 'sjtu', 'cssci', 'xmu', 'ruc']
	}, function(items) {
		document.getElementById('swufe').checked = items.options.includes('swufe');
		document.getElementById('ccf').checked = items.options.includes('ccf');
		document.getElementById('cufe').checked = items.options.includes('cufe');
		document.getElementById('sciif').checked = items.options.includes('sciif');
		document.getElementById('sci').checked = items.options.includes('sci');
		document.getElementById('fdu').checked = items.options.includes('fdu');
		document.getElementById('sjtu').checked = items.options.includes('sjtu');
		document.getElementById('cssci').checked = items.options.includes('cssci');
		document.getElementById('xmu').checked = items.options.includes('xmu');
		document.getElementById('ruc').checked = items.options.includes('ruc');
		document.getElementById('check-all').checked = items.options.includes('all');
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
