define(
     'controller',
     ['jquery',
     'tamplate',
     'model',
     'view'],
function () {
return {
controller: function (model, view){
			var self = this;

			view.elements.addBtn.on('click', addItem);
			view.elements.listContainer.on ('click', '.item-delete', removeItem);
			view.elements.listContainer.on('dblclick', '.item-text', editItem);

			function addItem() {
				var newItem = view.elements.input.val();
				model.addItem(newItem);
				view.renderList(model.data);
				view.elements.input.val('');
			}

			function removeItem() {
				var item = $(this).attr('data-value');
				model.removeItem(item);
				view.renderList(model.data);
			}
			function editItem(){
			    $(this).hide().siblings(".edit").show().val($(this).text()).focus();
			}

			$(".edit").focusout(function(){
			    $(this).hide().siblings(".item-text").show().text($(this).val());
			});

		}
};
}
);