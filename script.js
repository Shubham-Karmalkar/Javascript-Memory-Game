window.addEventListener("load",function runGame(){
    const cards = [
      {
        name: "burger",
        img: "images/burger.png",
      },
      {
        name: "burger",
        img: "images/burger.png",
      },
      {
        name: "frenchFries",
        img: "images/frenchFries.png",
      },
      {
        name: "frenchFries",
        img: "images/frenchFries.png",
      },
      {
        name: "hotDog",
        img: "images/hotDog.png",
      },
      {
        name: "hotDog",
        img: "images/hotDog.png",
      },
      {
        name: "pizza",
        img: "images/pizza.png",
      },
      {
        name: "pizza",
        img: "images/pizza.png",
      },
      {
        name: "popCorn",
        img: "images/popCorn.png",
      },
      {
        name: "popCorn",
        img: "images/popCorn.png",
      },
      {
        name: "taco",
        img: "images/taco.png",
      },
      {
        name: "taco",
        img: "images/taco.png",
      },
      {
        name: "donut",
        img: "images/donut.png",
      },
      {
        name: "donut",
        img: "images/donut.png",
      },
      {
        name: "coke",
        img: "images/coke.png",
      },
      {
        name: "coke",
        img: "images/coke.png",
      }
    ];

    // already selected ids
    const grid = document.getElementById("grid");
    let attempt = 0 ;
    let correct = 0 ;

   const randomCard = cards.sort(()=> 0.5 - Math.random());

   const btn = document.createElement("button");
   btn.addEventListener("click", () => {
     location.reload();
   });
   btn.textContent = "start again";
   const btnContainer = document.getElementById("forBtn");
   btnContainer.appendChild(btn);

   // generate cards in grid

   for(let i = 0 ;i<randomCard.length ;i++){
     const img = document.createElement('img');
     img.setAttribute("src","images/suspence.jpg");
     img.setAttribute("id",i);
     img.addEventListener("click",changeImage);
     grid.appendChild(img);
   }
    
   let selectedId = [] ;
   let selectedImg = [] ;
   let gotMatch = [] ;

   function changeImage(){
     let index = this.getAttribute("id");
     if(gotMatch.indexOf(index) !== -1 || selectedId.indexOf(index) !== -1) return ;
     this.setAttribute("src",randomCard[index].img);
     selectedImg.push(randomCard[index].name);
     selectedId.push(index);
     if(selectedImg.length == 2 ){
       setTimeout(checkMatch,1000); 
       attempt++;
     }

   }

   function checkMatch(){
      if(selectedImg[0] === selectedImg[1]){
        alert("Congratulations You have got the Match");
        document.getElementById(selectedId[0]).setAttribute("style","opacity:0.3");
        document.getElementById(selectedId[1]).setAttribute("style","opacity:0.3");
        
        gotMatch.push(selectedId[0]);
        gotMatch.push(selectedId[1]);
        correct++;
        
      }
      else{
        document.getElementById(selectedId[0]).setAttribute("src","images/suspence.jpg");
        document.getElementById(selectedId[1]).setAttribute("src","images/suspence.jpg");
        
      }

      selectedId = [];
      selectedImg = [];
      document.getElementById("result").textContent = 
        (attempt !== 0 ? (correct * 100) / attempt : 0).toFixed(1);
        console.log(gotMatch.length);
        if(gotMatch.length===16){
           createButton();
        }
   }
  

   function createButton() {
      btn.setAttribute("style","opacity:1");
   }
   

});