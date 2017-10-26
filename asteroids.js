


$(document).ready(function() {
	$.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-09-01&end_date=2017-09-07&api_key=kvH7YYMSHHLrXycD0c6YAceA1a2fR1mKDZy4LdzK", function(data) {
		console.log(data);
		for (let day in data.near_earth_objects) {
			for (var i = 0; i < data.near_earth_objects[day].length; i++) {
				var aster = data.near_earth_objects[day][i];

				var maxDiameter = aster.estimated_diameter.feet.estimated_diameter_max;
			    var velocity = aster.close_approach_data[0].relative_velocity.miles_per_hour;
				var proximity = aster.close_approach_data[0].miss_distance.miles;
				
				if (aster.is_potentially_hazardous_asteroid) {
					if (maxDiameter > 4000) {
						$('.bunnies').append(`${day} ${i} <p class='danger'> Diameter: ${maxDiameter} </p> <p> Velocity: ${velocity} </p> <p> Distance from earth: ${proximity} </p> <hr/>`);	
					}
					if (maxDiameter < 4000) {
						$('.bunnies').append(`${day} ${i} <p> Diameter: ${maxDiameter} </p> <p> Velocity: ${velocity} </p> <p> Distance from earth: ${proximity} </p> <hr/>`);	
					}

				}
			}
			
		}
		

	})

})

