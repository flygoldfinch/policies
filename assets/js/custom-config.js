$(document).ready(function () {

	window.gvar = {
		config: null,
		configSuccess: function () {
			
		},
		configFailed: function () {
			
		},

	}

	myLoadConfig();

	function myLoadConfig(count = 1) {
		if (count > 5) {
			gvar.configFailed();
			return false;
		}

		$.ajax({
			url: '/assets/files/config.json',
			type:'get',
			dataType : 'json',
			contentType: "application/json",
		  success: function(json){
				gvar['config'] = json;
				$('#pbwrapper').addClass('hide');
				gvar.configSuccess();
		  },
		  error:function () {
		  	myLoadConfig(++count);
		  }
		});

	}

});