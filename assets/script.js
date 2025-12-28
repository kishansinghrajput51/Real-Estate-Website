showSearchInputBox = (searchElement) => {
    console.log("Called yeah.");
    
        let inputBox = document.getElementById(searchElement);
        let searchIcon = document.querySelector("#nav-search-icon");
        if (inputBox.classList.contains("hide-input")) {
          inputBox.classList.remove("hide-input");
          searchIcon.classList.add("search-active");
          inputBox.focus();
        } else {
          inputBox.classList.add("hide-input");
          inputBox.classList.remove("show-input");
          searchIcon.classList.remove("search-active");
        }
      };

      
      function show1(e) {
          let i = document.getElementById("navbarSupportedContent");
          let j = document.getElementById("ink");
          
          if (j.classList.contains("show") && !j.classList.contains("toogle")) {
          j.classList.add("toogle");
          j.classList.remove("show");
        } else {
          i.classList.remove("show");
          i.classList.remove("collapsing");
          i.classList.add("shower");
          j.classList.remove("toogle");
          j.classList.toggle("show");
        }
      }