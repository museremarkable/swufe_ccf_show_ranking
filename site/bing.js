const bing = {};

bing.rankSpanListSwufe = [];

bing.start = function () {
    bing.addRankings();
}

bing.addRankings = function () {
    let results = $("a[data-hookid='AcademicPaperVenueItemHookId']");
	
    results.each(function (index) {
        let result = $(this);
		
        let title = result.parent().parent().parent().find("h2");
		let name = result.text().toUpperCase();
		for (let getRankingSpan of bing.rankSpanListSwufe) {
			title.after(getRankingSpan(name));
		}
		
    });
}


