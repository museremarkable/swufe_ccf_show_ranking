const baiduxueshu = {};

baiduxueshu.rankSpanListSwufe = [];

baiduxueshu.start = function () {
    baiduxueshu.addRankings();
}

baiduxueshu.addRankings = function () {
    let results = $("div.result");
    results.each(function (index) {
        let result = $(this);
		
        let source = result.find("div.sc_info span:eq(1) a");
		let names = source.attr("title");
        if (names != undefined) {
			name = names.replace("《","").replace("》","");
			for (let getRankingSpan of baiduxueshu.rankSpanListSwufe) {
			    title = result.find("h3.t a");	
				title.after(getRankingSpan(name.toUpperCase()));
			}
        }
		
    });
}


