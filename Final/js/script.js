

$(document).ready(function(){
	$('#submit').click(function(){
	
		var cityName= myRec.resultString;
        
		var weatherURL="http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&appid=b20804012f604fe0be183fa2719dd840";


		console.log(weatherURL);



		$.ajax({
			url:weatherURL,
			success:function(result){
				console.log(result);
                
              sendMessage(cityName, result.weather[0].description, result.main.temp);
                
               //window.alert("There may be "+ result.weather[0].description+ " in "+ cityName + " and the degree is " + result.main.temp+ " degree celsius.");

				var html;
				var type = $('#select').val();
				var label = $('#select option:selected').text();
				
                
			}		
		})
        
        
	})
    
});



