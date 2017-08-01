
$('document').ready(function(){
	var count = 0;
	var alea = ["fait autre chose de ta vie ", 
	"clique ailleurs pleaz", 
	"stop la salsifi", 
	"bon ça commence a me gonfler !! :@",
	"aie aie stop me cliquer dessus c'est bon!"]
	
	$('.cake-is-a-lie').click(function() {
		// console.log('sa clique');
		count++;
		// console.log(count);
		$('.counter').text(count);

		var random = Math.random()* alea.length;
		random = Math.floor(random);
		alea [random];
		
		if (count%5 == 0) {
			alert(alea[random]);
		}
	})
});