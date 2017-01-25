if (Cookies.get("visited") == "true") {
	$(".animation").css("display","none")
}
Cookies.set("visited", "true")

$(".submit-btn").click (function() {
	var firstName = $("#fname").val()
	var lastName = $("#lname").val()

Cookies.set("firstName", firstName)
Cookies.set("lastName", lastName)
})

function welcoming() {
	if(Cookies.get("firstName")!== undefined) {
		$("#welcome").text("Welcome " + Cookies.get("firstName"))
	}
}

welcoming()
$(".move").click(function() {
	$(".animation").animate( {
		right: '300px',
		bottom: "100px",
		opacity: "0.4",
		width: "300px",
		height: "300px",
	})
})

