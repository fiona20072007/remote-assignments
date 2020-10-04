// 1
function delayedResult(n1, n2, delayTime, callback) {
  let result = n1 + n2;
  setTimeout(() => callback(result), delayTime);
}

delayedResult(4, 5, 3000, function(result) {
  console.log(result);
});

delayedResult(-5, 10, 2000, function(result) {
  window.alert(result);
});

// 2

function ajax(src, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(JSON.parse(xhr.responseText));
      } else {
        alert(xhr.statusText);
      }
    }
  };
  xhr.open("GET", src);
  xhr.send();
}

function render(data) {
  var div = document.createElement("div");
  data.forEach(obj => {
    var h = document.createElement("H3");
    var content = document.createTextNode(
      `name: ${obj.name},
      price: $${obj.price},
      description: ${obj.description}
      `
    );
    h.appendChild(content);
    div.appendChild(h);
  });
  document.body.appendChild(div);
}

ajax(
  "https://cwpeng.github.io/live-records-samples/data/products.json",
  function(response) {
    render(response);
  }
);
