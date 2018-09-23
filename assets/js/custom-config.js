$(document).ready(function () {

	window.gvar = {
		config: null,
		configSuccess: function () {
			
		},
		configFailed: function () {
			
		},
		configFileUrl: function () {
			return ['test', 'local', 'com'].includes(window.location.host.split('.').pop())
					 ? 'config-dev.json' : 'config.json';
		}

	}

	myLoadConfig();

	function myLoadConfig(count = 1) {
		if (count > 5) {
			gvar.configFailed();
			return false;
		}

		$.ajax({
			url: '/assets/files/'+gvar.configFileUrl(),
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