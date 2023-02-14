const  resultDiv = document.querySelector('.result');
const wordEle = document.querySelector("#word");
const phonetics = document.querySelector(".phonetic");
const audio = document.querySelector("audio");
const wordDefinition = document.querySelector(".word-definition");
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const synonymsUl = document.querySelector(".synonyms");
const handle = async (e)=>{
        if(e.keyCode == 13){
            //console.log("Enter press")      
            const word = e.target.value;    
            const result = await fetch(url+word);
            const data =await result.json();
            if(result.ok){                
                //console.log(data)
                resultDiv.style.display = "block";
                wordEle.innerText = data[0].word;
                phonetics.innerHTML = data[0].phonetics[0].text;
                audio.src = data[0].phonetics[0].audio
                wordDefinition.innerText = data[0].meanings[0].definitions[0].definition;
                let synonmsData = "";
                let synonmsArray = data[0].meanings[0].definitions[0].synonyms;
                if(synonmsArray.length ){
                    console.log(synonmsArray);
                    for(let i = 0; i<synonmsArray.length;i++){
                        synonmsData +=`<p class="pills">${synonmsArray[i]}</p>`                
                    }
                    
                }else {
                  synonmsData = '<p class="pills">No Synonms Available</p>'   ;
                }   
                synonymsUl.innerHTML = synonmsData            
            }
            else
            {
                resultDiv.style.display = "block";
                audio.style.display = 'none';
                phonetics.style.display = "none",
                wordEle.innerText = data.title;
                wordDefinition.innerText = data.message;
                synonymsUl.style.display = "none";

            }                        
            //console.log(data[0].meanings[0].definitions[0].synonyms);
        }
    }