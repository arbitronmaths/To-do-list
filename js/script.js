window.onload = function() {
  // Handle toggling check mark
  document.querySelector('ul').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
    }
  });

  // Add "close" buttons to existing list items
  let myListNode = document.getElementsByTagName('LI');
  for (let i = 0; i < myListNode.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7"); // "×" character
    span.className = "close";
    span.appendChild(txt);
    myListNode[i].appendChild(span);
  }

  let close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }

  // Fix 1: Moved this function to global scope if called from HTML onclick
  window.newElement = function() {
    let li = document.createElement('LI');
    let inputValue = document.getElementById("myinput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
      alert("You must write something"); 
    } else {
      document.getElementById("myUL").appendChild(li);

      // Re-add close button to new item
      let span = document.createElement("SPAN");
      let txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);

      span.onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      };
    }

    document.getElementById("myinput").value = "";
  };
};
