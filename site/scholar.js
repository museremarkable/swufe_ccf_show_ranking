/**
 * Based on https://github.com/WenyanLiu/CCFrank4dblp/blob/704960f95393fdcacdd5f71864f3768518a9fb2a/js/scholar.js
 * 
 * MIT License
 * 
 * Copyright (c) 2019 wyliu

 * 
 * 原始代码实现谷歌学术显示ccf等级，是通过获取谷歌学术每一个“论文名+第一作者的姓氏”，通过dblp的API(https://dblp.org/faq/13501473.html)查询论文，
 * 但是在实际使用中，由于dblp期刊/会议的更新比谷歌学术慢，当谷歌学术向dblp查询文章，且dblp尚未更新期刊/会议数据库时，
 * dblp的响应结果错误地显示文章没有发表在已知的CCF列表中，即被打上CCF none的标签。
 * 具体的逻辑请查看“https://github.com/WenyanLiu/CCFrank4dblp/issues/18”
 * 并且每次自动发出多次请求，容易被谷歌判定为机器人，从而限制访问。
 * 并且dblp查询的结果，并不一定完全正确，时常出现谷歌显示的文章来源，和dblp返回的文章来源不同。
 * 
 * 更改后的代码实现方式为：直接通过谷歌学术查询显示的论文期刊/会议名字，比对data\ccfRankingFullName.js中数据，返回对应的结果(和所有swufe查询方式相同)。
 * 该方法的优势是：本地查询，速度快，不会被谷歌反爬。
 * 该方法的劣势是：谷歌查询的部分文章，若没有显示会议/期刊来源（例如 arXiv ），则无法获得该文章的等级。
 * 且部分会议即使是名单上的，但名称如果和《中国计算机学会推荐国际学术会议和期刊目录-2019》不同，则无法显示。
 * 比如说： “中国XXX大会”为A类会议，但是谷歌显示的文章来源为 “第XX届中国XXX会议”，则无法显示。
 * 再比如说：“Proceedings of the IEEE international conference on computer vision”为CCF A，但是《目录》上显示为“Proceedings of the IEEE”，也同样无法显示。
 * 
 * 综上所述，如果只是使用用户的话，推荐安装两个插件：CCFrank、swufe-ccf-show-ranking，两者的结果互为补充。
 * 如果想将一个插件一起使用，请将fetchRank(node, title, author, year, journal, q_key)中开头的几行注释取消即可。
 * Copyright (c) 2021 nixiak
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
		// setInterval(function() {
		// 	$(window).bind("popstate", function() {
		// 		scholar.appendRanks();
		// 	});
		// 	scholar.appendRanks();
		// }, 20000);
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
	// 将如下的代码取消注释，即可使用原始的查询方式。
	
	// var xhr = new XMLHttpRequest();
	// api_format = "https://dblp.org/search/publ/api?q=" + encodeURIComponent(title + " " + author) + "&format=json";
	// xhr.open("GET", api_format, true);
	// xhr.onreadystatechange = function() {
	// 	if (xhr.readyState == 4) {
	// 		var dblp_url = "";
	// 		var resp = JSON.parse(xhr.responseText).result.hits;
	// 		if (resp == undefined || resp["@total"] == 0) {
	// 			dblp_url == "";
	// 		} else if (resp["@total"] == 1) {
	// 			url = resp.hit[0].info.url;
	// 			dblp_url = url.substring(
	// 				url.indexOf("/rec/") + 5,
	// 				url.lastIndexOf("/")
	// 			);
	// 		}
	// 		const names = [{
	// 			uri: dblp_url
	// 		}];
	// 		for (let getRankSpan of scholar.rankSpanList) {
	// 			$(node).after(getRankSpan(names));
	// 		}
	// 	}
	// };
	// xhr.send();

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
			var sleep_time = Math.floor(Math.random() * (2000 - 1000 + 1) + 1000);
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
