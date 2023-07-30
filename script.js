// let number1=document.getElementById("number1");
//         let counter = 0;
//         setInterval(()=>{
//             if (counter == 65){
//                 clearInterval();
//             }else{
//                 counter+=1;
//                 number1.innerHTML=counter + "%";
//             }
//         },30);

       
//         let number2=document.getElementById("number2");
//         let counter=0;
//         setInterval(()=>{
//             if (counter == 55){
//                 clearInterval();
//             }else{
//                 counter+=1;
//                 number2.innerHTML=counter + "%";
//             }
//         },25);













window.onload = function () {
    let bar = document.querySelectorAll('.bar');
    bar.forEach((progress) => {
      let value = progress.getAttribute('data-value');
      progress.style.width = `${value}%`;
      let count = 0;
      let progressAnimation = setInterval(() => {
        count++;
        progress.setAttribute('data-text', `${count}%`);
        if (count >= value) {
          clearInterval(progressAnimation);
        }
      }, 15);
    });
  };