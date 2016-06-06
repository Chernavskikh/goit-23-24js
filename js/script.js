function Model(data) {
	var self = this;

	self.data = data;

	self.addItem = function (item) {
		if(item.length ===0){//если длина item равна ноль символов, то мы ничего не делаем 
			return;
		}

		self.data.push(item);//добавляем новые данные

		return self.data//обновляем данные
	};

	self.removeItem = function (item) {
		var index = self.data.indexOf(item);

		if (index === -1){
			return;
		}
		
		self.data.splice(index, 1);

		return self.data;
	};

	self.editItem = function(index, item) {
            self.data[index] = item;
            if (item.length === 0) {
                return self.data.splice(index, 1);
            }
            return self.data;
        };
}

function View(model) {
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

function Controller(model, view) {
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

$(function () {
	var firstToDoList = ['sleep', 'eat', 'work'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model,view);
});
