function save_options() {

	var array = []
	var checkboxes = document.getElementById("check").querySelectorAll('input[type=checkbox]:checked')

	for (var i = 0; i < checkboxes.length; i++) {
		array.push(checkboxes[i].value)
	}
	chrome.storage.sync.set({
		options: array
	}, function() {
		var status = document.getElementById('status');
		status.textContent = '选项已经保存';
		setTimeout(function() {
			status.textContent = '';
		}, 1000);
	});
}

function restore_options() {
	chrome.storage.sync.get({
		options: ['sci', 'swufe', 'ccf', 'cufe', 'sciif', 'fdu', 'sjtu', 'cssci', 'xmu', 'ruc']
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

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);
document.getElementById('check-all').addEventListener('click',checkAll);