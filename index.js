let timer=10;
        let time = document.getElementById('display');
        time.style.margin= "auto";
        time.style.textAlign = "center";
        time.style.maxWidth ="500px"
        setTimeout(() => {
            time.innerHTML = timer--;
            setTimeout(() =>{
                time.className = "badge rounded-pill bg-light text-light";
                time.innerHTML = timer--;
                setTimeout(() =>{
                    time.className = "badge rounded-pill bg-danger text-light";
                    time.innerHTML = timer--;
                    setTimeout(() =>{
                        time.className = "badge rounded-pill bg-light text-light";
                        time.innerHTML = timer--;
                        setTimeout(() =>{
                            time.className = "badge rounded-pill bg-danger text-light";
                            time.innerHTML = timer--;
                            setTimeout(() =>{
                                time.className = "badge rounded-pill bg-light text-light";
                                time.innerHTML = timer--;
                                setTimeout(() =>{
                                    time.className = "badge rounded-pill bg-danger text-light";
                                    time.innerHTML = timer--;
                                    setTimeout(() =>{
                                        time.className = "badge rounded-pill bg-light text-light";
                                        time.innerHTML = timer--;
                                        setTimeout(() =>{
                                            time.className = "badge rounded-pill bg-danger text-light";
                                            time.innerHTML = timer--;
                                            setTimeout(() =>{
                                                time.className = "badge rounded-pill bg-light text-light";
                                                time.innerHTML = timer--;
                                                setTimeout(() =>{
                                                    time.style.fontSize = "36px";
                                                    time.style.maxWidth = "440px";
                                                    time.className = "badge rounded-pill bg-danger text-light";
                                                    time.innerHTML = "Happy Developers Day!"
                                                    
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)     
                },1000)
            },1000)
        }, 1000); 