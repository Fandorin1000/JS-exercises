// создаем массив продуктов с категориями, категория связывает чекбокс с массивом
const productsArray = [{
  id: 1,
  name: 'Some Samsung 1',
  price: 100,
  category: {
    id: 1,
    name: 'Samsung'
  }
}, {
  id: 2,
  name: 'Some Samsung 2',
  price: 200,
  category: {
    id: 1,
    name: 'Samsung'
  }
}, {
  id: 3,
  name: 'Some LG 1',
  price: 250,
  category: {
    id: 5,
    name: 'LG'
  }
}, {
  id: 4,
  name: 'Some Asus 1',
  price: 150,
  category: {
    id: 2,
    name: 'Asus'
  }
}, {
  id: 5,
  name: 'Some MSI 1',
  price: 400,
  category: {
    id: 4,
    name: 'MSI'
  }
}, {
  id: 6,
  name: 'Some HP 1',
  price: 50,
  category: {
    id: 3,
    name: 'HP'
  }
}];

const products = document.getElementById('products');
const rangeValue = document.getElementById('rangeValue');
const range = document.getElementById('ch-range');
const checkboxes = document.querySelectorAll('.ch');

// проверяем если хоть какой-то чекбокс выбран
const checkForm = () => {
  let checked = false;
  
	for(let i = 0; i < checkboxes.length; i++){
		if(checkboxes[i].checked) {
			checked = true;
		}
	}

	return checked;
}
// сортируем массив по убыванию цены
const getSortedArray = arr => {
  const checkCheckboxes = checkForm();
  const array = checkCheckboxes ? arr : productsArray;

  return array.sort((a, b) => a.price - b.price)
}

// функция для вывода товары на страницу, можешь в нее засунуть всю разметку
const render = (list = []) => {
  let out = '';
  
  const sortedList = getSortedArray(list);

  sortedList.forEach(item => {
    out += `
      <div class="product">
      <p> ${item.name} </p>
      <p> ${item.price} </p>
      </div>
    `
  });

  products.innerHTML = out;
}
render(productsArray);

// функция для установки максимального и минимального значения для Ренж
const setMaxValue = array => {
  const maxPrice = getSortedArray(array);

  rangeValue.innerHTML = maxPrice[0].price;

  range.setAttribute('min', maxPrice[0].price);
  range.setAttribute('max', maxPrice[maxPrice.length - 1].price);
};

setMaxValue(productsArray);

// создаем массив в который будем складывать продукты
const arrayOfProducts = [];
const filterFunction = (id, item) => () => {
  const filteredArr = productsArray.filter(item => item.category.id === id);

  if(item.checked) {
    // пушим продукты в массив, если чекед === тру
    arrayOfProducts.push(...filteredArr);

    render(arrayOfProducts);
  } else {
    // если чекед === фолс, то находим елемент в массиве
    const index = arrayOfProducts.findIndex(item => item.category.id === id);
    // и удаляем
    arrayOfProducts.splice(index, filteredArr.length);
    
    render(arrayOfProducts);
  }

  // устанавливаем максимальную цену исходя из текущего массива
  setMaxValue(arrayOfProducts);
};

// фильтр массива по цене
const filterByPrice = e => {
  const arr = arrayOfProducts.length ? arrayOfProducts : productsArray;

  rangeValue.innerHTML = e.target.value;

  const filteredByPrice = arr.filter(item => item.price >= e.target.value);
  render(filteredByPrice);
};

// вешаем обработчики
checkboxes.forEach(item => item.addEventListener('click', filterFunction(Number(item.dataset.id), item)));
range.addEventListener('input', filterByPrice);
