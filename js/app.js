requirejs.config({
   paths: {
   	'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery'
   },
   shim: {
   	'jquery': {
   		exports: 'jquery'
   	}
   }
});

require (
    ['jquery',
    'tamplate',
    'model',
    'view',
    'controller'],

function ($, tamplate, model, view, controller) {
	
	var firstToDoList = ['test 1', 'test 2', 'test 3'];
	var model = new model.model(firstToDoList);
	var view = new view.view(model);
	var controller = new controller.controller(model, view);

}

        );