let mainData;
let searchBar = document.getElementById("search-input");
let searchButton = document.getElementById("searchButton");
let yearN = document.getElementById("yNumber");
yearN.addEventListener("change",function(){callTserver.open("GET", `./${yearN.value}.json`);
callTserver.send();})
let callTserver = new XMLHttpRequest();
callTserver.open("GET", `./${yearN.value}.json`);
callTserver.send();
callTserver.addEventListener("load", function () {
    mainData = JSON.parse(callTserver.responseText);
    searchButton.addEventListener("click", () => {
        for (let i = 0; i < Object.keys(mainData).length; i++) {
            let counter = 0 ;
            let i2 = 0;
            let ress = document.getElementsByClassName("v");
            if(searchBar.value == mainData[i].id ||(mainData[i].name.startsWith(searchBar.value) && searchBar.value !="")){
                document.getElementById("errMessage").style.display = "none";
                document.getElementById("resultTable2").style.display = "table";    
                for(; i2 <ress.length;i2++){
                    let idHT = ress[i2].id;
                    ress[i2].textContent = mainData[i][idHT];
                    //console.log(mainData[i][idHT]);
                }           
                //console.log(document.getElementById("yNumber").value);
                //console.log(mainData[i]);
                counter ++;
                break ;      
            }else if(i == Object.keys(mainData).length -1  && counter==0){
                document.getElementById("resultTable2").style.display = "none";
                document.getElementById("errMessage").style.display = "block";

            } 
        }
    }
    )
})
    