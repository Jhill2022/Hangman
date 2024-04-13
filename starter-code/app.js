const howToPlay = document.querySelector(".start__htp-btn")
const goBack = document.querySelector(".howTo__btn")
const startBtn = document.querySelector(".start__circle")
const listItems = document.querySelector(".pac__lists")
const url = "./data.json"


howToPlay.addEventListener("click", () => {
    document.querySelector(".start__container").classList.add("display-none")
    document.querySelector(".howTo__container").classList.remove("display-none")

    
})

goBack.addEventListener("click", () => {
    document.querySelector(".start__container").classList.remove("display-none")
    document.querySelector(".howTo__container").classList.add("display-none")

    
})

startBtn.addEventListener("click", () => {
    document.querySelector(".start__container").classList.add("display-none")
    document.querySelector(".pac__container").classList.remove("display-none")

    document.querySelector(".pac__btn").addEventListener("click", () => {
        document.querySelector(".pac__container").classList.add("display-none")
        document.querySelector(".start__container").classList.remove("display-none")

    })
})


async function getData() {
    try {
      const res = await fetch(url);
      const dataObj = await res.json();
  
      const mappedData = Object.entries(dataObj).map(([categories, value]) => ({ categories, value }));
  
     
  
      mappedData.forEach(({ value }) => {
        Object.keys(value).forEach(key => {
          const listItem = document.createElement("li");
          listItem.classList.add("pac__list");
          listItem.textContent = key;
          listItems.appendChild(listItem); 
          console.log(value);
        });
      });
    } catch (err) {
      console.warn(err.message);
    }
  }

getData()