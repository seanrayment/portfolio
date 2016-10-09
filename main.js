$(document).ready(function() {
	$("#profile").click(function() {
		$("#profile").animate(
			{borderRadius: "0"},
			200,
			function () {
				$("#profile").css("display","none");
				$("#profile_text").css("display","block");
			});
	})

	$("#profile_text").click(function() {
		$("#profile").css("display","block");
		$("#profile_text").css("display","none");
		$("#profile").animate(
			{borderRadius: "100%"},
			200);
	})
})

