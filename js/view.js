define(
     'view',
     ['jquery',
      'tamplate',
      'model'],
function (){
	return{
		view : function (model) {

			var self = this;

			function init() {
				var wrapper = tmpl($('#wrapper-template').html());
				$('body').append(wrapper);
				self.elements = {
					input : $('.item-value'),
					addBtn: $('.item-add'),
					listContainer: $('.item-list'),
					itemText: $('.item-text')
				};
				self.renderList(model.data);
			};

			self.renderList = function (data) {
				var list = tmpl($('#list-template').html(), {data:data});
				self.elements.listContainer.html(list);
			};

			init();
		}
	}
}
);