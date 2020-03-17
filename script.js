function calculate() {
    fetch('items.json')
        .then(res.json())
        .then(data => console.log(data));
}

calculate();