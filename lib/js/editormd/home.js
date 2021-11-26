$(function() {
	var testView = editormd.markdownToHTML("markdown", {
		// markdown : "[TOC]\n### Hello world!\n## Heading 2", // Also, you can dynamic set Markdown text
		htmlDecode : true,  // Enable / disable HTML tag encode.
		// htmlDecode : "style,script,iframe",  // Note: If enabled, you should filter some dangerous HTML tags for website security.
	});
});


$(function() {
	$("#markdown").find("img").each(function() {
			$(this).css("width", "60%");
			$(this).css("height", "60%");
			})
	})
