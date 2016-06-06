define(
     'model',
     ['jquery',
     'tamplate'],

function () {
	return {
	model: function (data) {

			var self = this;

			self.data = data;

			self.addItem = function (item) {
					if(item.length ===0){//если длина item равна ноль символов, то мы ничего не делаем 
					return;
					};
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
};
}

);