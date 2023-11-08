function ready(callback) {
  // Если DOM-дерево уже загружено, то выполняем функцию
  if (document.readyState === "complete") callback();
  // Иначе подписываемся на событие DOMContentLoaded
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(function () {
  // Код здесь будет выполняться после загрузки DOM
  console.log("DOM готов!");
});

// Этот код будет выполняться до загрузки DOM
console.log("Скрипт выполняется до загрузки DOM.");
