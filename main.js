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
			{borderRadius: "10px"},
			100);
	})
})

$(document).ready(function() {
	$("#tab-one").click(function() {
		$("#tab01").css("display","none");
		$("#tab1").css("display","flex");
		$("#tab2").css("display","none");
		$("#tab3").css("display","none");
		$("#tab4").css("display","none");
		$("#tab-1").css("backgroundColor", "#7986cb");
		$("#tab-one").css("backgroundColor", "#3949ab");
		$("#tab-two").css("backgroundColor", "#7986cb");
		$("#tab-three").css("backgroundColor", "#7986cb");
		$("#tab-four").css("backgroundColor", "#7986cb");
	})
	$("#tab-1").click(function() {
		$("#tab01").css("display","flex");
		$("#tab1").css("display","none");
		$("#tab2").css("display","none");
		$("#tab3").css("display","none");
		$("#tab4").css("display","none");
		$("#tab-1").css("backgroundColor", "#3949ab");
		$("#tab-one").css("backgroundColor", "#7986cb");
		$("#tab-two").css("backgroundColor", "#7986cb");
		$("#tab-three").css("backgroundColor", "#7986cb");
		$("#tab-four").css("backgroundColor", "#7986cb");
	})
	$("#tab-two").click(function() {
		$("#tab01").css("display","none");
		$("#tab1").css("display","none");
		$("#tab2").css("display","flex");
		$("#tab3").css("display","none");
		$("#tab4").css("display","none");
		$("#tab-1").css("backgroundColor", "#7986cb");
		$("#tab-one").css("backgroundColor", "#7986cb");
		$("#tab-two").css("backgroundColor", "#3949ab");
		$("#tab-three").css("backgroundColor", "#7986cb");
		$("#tab-four").css("backgroundColor", "#7986cb");
	})
	$("#tab-three").click(function() {
		$("#tab01").css("display","none");
		$("#tab1").css("display","none");
		$("#tab2").css("display","none");
		$("#tab3").css("display","flex");
		$("#tab4").css("display","none");
		$("#tab-1").css("backgroundColor", "#7986cb");
		$("#tab-one").css("backgroundColor", "#7986cb");
		$("#tab-two").css("backgroundColor", "#7986cb");
		$("#tab-three").css("backgroundColor", "#3949ab");
		$("#tab-four").css("backgroundColor", "#7986cb");
	})
	$("#tab-four").click(function() {
		$("#tab01").css("display","none");
		$("#tab1").css("display","none");
		$("#tab2").css("display","none");
		$("#tab3").css("display","none");
		$("#tab4").css("display","flex");
		$("#tab-1").css("backgroundColor", "#7986cb");
		$("#tab-one").css("backgroundColor", "#7986cb");
		$("#tab-two").css("backgroundColor", "#7986cb");
		$("#tab-three").css("backgroundColor", "#7986cb");
		$("#tab-four").css("backgroundColor", "#3949ab");
	})
})