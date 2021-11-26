

const scholar = {};

scholar.rankSpanList = [];

scholar.rankSpanListSwufe = [];

scholar.run = function() {
	let url = window.location.pathname;
	if (url == "/scholar") {
		scholar.appendRank();
	} else if (url == "/citations") {
		scholar.appendRanks();
		document.getElementById("gsc_bpf_more").addEventListener("click", function (){scholar.appendRanks();}, false);

	}
};
/**
 *  睡眠函数
 *  @param numberMillis -- 要睡眠的毫秒数
 */
function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}


scholar.appendRank = function() {
	let elements = $("#gs_res_ccl_mid > div > div.gs_ri");
	elements.each(function() {
		let node = $(this).find("h3 > a");
		let title = node.text().replace(/[^A-z]/g, " ");
		let data = $(this)
			.find("div.gs_a")
			.text()
			.replace(/[\,\-\…]/g, "")
			.split(" ");
		let author = data[1];
		let year = data.slice(-3)[0];
		let pattern = /(?<=- ).*?(?=, [0-9]{4})/;
		let journal = $(this)
			.find("div.gs_a")
			.text().match(pattern);
		let q_key_pattern = /(?<=related:).*?(?=:scholar)/;
		let q_key = $(this).find('div.gs_fl > a:nth-child(4)').attr('href').toString().match(q_key_pattern);
		fetchRank(node, title, author, year, journal, q_key);
	});
};

scholar.appendRanks = function() {
	let elements = $("tr.gsc_a_tr");
	elements.each(function() {
		let node = $(this).find("td.gsc_a_t > a");
		if (!node.next().hasClass("ccf-ranking")) {
			let title = node.text().replace(/[^A-z]/g, " ");
			let author = $(this)
				.find("div.gs_gray")
				.text()
				.replace(/[\,\…]/g, "")
				.split(" ")[1];
			let year = $(this).find("td.gsc_a_y").text();
			let journal = $(this).find("div.gs_gray")[1].textContent.match(/.*?(?= [0-9])/);
			let q_key = node.attr("data-href");
			fetchRank(node, title, author, year, journal, q_key);
		}
	});
};

function fetchRank(node, title, author, year, journal, q_key) {


	if (journal != null) {
		journal_str = journal[0];
		if (journal_str.match(/.*?(?=,)/)){
			journal_str = journal_str.match(/.*?(?=,)/)[0];
		}
		if (journal_str.match("…") === null) {
			for (let getRankSpan of scholar.rankSpanListSwufe) {
				$(node).after(getRankSpan(journal_str.toUpperCase()));
			}
		} else {
			var sleep_time = Math.floor(Math.random() * (2000 - 1000 + 1) + 500);
			// var sleep_time = Math.floor(Math.random());
			sleep(sleep_time);
			if (q_key) {
				if(q_key.toString().match(/citation/)){
					cite_api_format = q_key;
					var cite_xhr = new XMLHttpRequest();
					cite_xhr.open("GET", cite_api_format, true);
					cite_xhr.onreadystatechange = function () {
						if (cite_xhr.readyState == 4) {
							var resp = cite_xhr.responseText;
							if (resp) {
								var journal = resp.match(/(?<=<div class="gsc_vcd_value">).*?(?=<\/div>)/g)
								if (journal) {
									journal_str = journal[2];
									for (let getRankSpan of scholar.rankSpanListSwufe) {
										$(node).after(getRankSpan(journal_str.toUpperCase()));
									}
								}
							}
						}
					}
					cite_xhr.send();
				}
				else {
					let code = q_key[0];
					cite_api_format = document.location.hostname + "?q=info:" + code +
						":scholar.google.com/&output=cite&scirp=0&hl=zh-CN";
					var cite_xhr = new XMLHttpRequest();
					cite_xhr.open("GET", cite_api_format, true);
					cite_xhr.onreadystatechange = function () {
						if (cite_xhr.readyState == 4) {
							var resp = cite_xhr.responseText;
							if (resp) {
								var journal = resp.match(/(?<=]..).*?(?=,|\.)/);								
								if (journal) {
									journal_str = journal[0];
									for (let getRankSpan of scholar.rankSpanListSwufe) {
										$(node).after(getRankSpan(journal_str.toUpperCase()));
									}
								}
							}
						}
					}
					cite_xhr.send();
				}
			}
		}
	};
};
