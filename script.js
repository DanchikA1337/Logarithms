document.getElementById("logarithmForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let base = parseFloat(document.getElementById("base").value);
    let value = parseFloat(document.getElementById("value").value);

    if (base <= 0 || value <= 0 || base === 1) {
        document.getElementById("result").innerText = "Пожалуйста, введите корректные значения для основания и числа.";
        return;
    }

    let result = Math.log(value) / Math.log(base);
    document.getElementById("result").innerText = `Результат: logₐ(${value}) = ${result.toFixed(4)}`;
});
