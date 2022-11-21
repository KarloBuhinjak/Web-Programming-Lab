function provjeriForm(){
    let imePrezime = document.querySelector("#imePrezime");
    let textArea = document.querySelector("#buhinjak");
    let textAreaLen = textArea.value.length;
    
    
   
    
    let provjeraImena = document.querySelector("#provjeraImena");
    let provjeraTextArea = document.querySelector("#provjeraTextArea");
   
    

    if(imePrezime.value == "" ){
        provjeraImena.innerHTML = "*Obavezan unos";
        alert("Obavezan unos imena i prezimena");
        
    }else{
        provjeraImena.innerHTML="";   
    }
    

    if(textAreaLen<30){
        provjeraTextArea.innerHTML = "*Unos mora biti veći od 30!";
        alert("Unos mora bit veći od 30")

    }else{
        provjeraTextArea.innerHTML="";   
    }

    if(provjeraTextArea.innerHTML.includes('*')){
        //console.log("ima");
    }else{
        //console.log("neam");
    }

    let provjeraMailaP = document.querySelector("#provjeraMaila");
    let email = document.querySelector("#email");
    let value = email.value;

    if(value.includes('@') && value.includes('.')){
        let pozicijaTocke=value.indexOf('.');
        let pozicijaAt=value.indexOf('@');
        let izmedjuAtTocka = value.substring(pozicijaAt+1,pozicijaTocke);
        console.log(izmedjuAtTocka);

        if(izmedjuAtTocka.length>0){
            let prijeAt = value.substring(0,pozicijaAt);
            console.log(izmedjuAtTocka.length);
            
            if(prijeAt.length>2){
                let posljeTocke=value.substring(pozicijaTocke+1,value.length);
                if(posljeTocke.length>1){
                    
                    console.log("valid");
                    provjeraMailaP.innerHTML="";

                }else{
                    alert("Mail nije validan");
                    provjeraMailaP.innerHTML="*mail nije validan"
                    console.log("ne valid");

                }
            }else{
                alert("Mail nije validan");
                provjeraMailaP.innerHTML="*mail nije validan";
                console.log("ne valid");
            }
        }
    }
    let kvadriranBroj = document.querySelector("#kvadriranBroj");
    let broj = document.querySelector("#broj");
    let kvadriranBrojValue = kvadriranBroj.value;
    let provjeraImenaValue = provjeraImena.value;
    let provjeraTextAreaValue = provjeraTextArea.value;

    


   if(imePrezime.value==""|| textArea.value==""|| email.value=="" ||broj.value==""||provjeraMailaP.innerHTML=="*mail nije validan"){
        console.log("ne valja");

    }else{
       alert(imePrezime.value+" "+ email.value);
    }


    
    

}

function kvadriranje(){
    
    let broj = document.querySelector("#broj");
    let brojZaKvadriranje= parseInt(broj.value);
    let kvadriranBroj = document.querySelector("#kvadriranBroj");

    if(brojZaKvadriranje>10 || brojZaKvadriranje<1 || isNaN(brojZaKvadriranje)){
        kvadriranBroj.innerHTML="*Unos mora biti između 1 i 10!"
    }else{
        kvadriranBroj.innerHTML=brojZaKvadriranje*brojZaKvadriranje;
    }

}


function Kolegij(){
    let kolegiji = ["Programiranje1", "Programiranje2","OET","ISRM","DE","MAT1","MAT2","FIZIKA"];
    document.getElementById('buhinjak').value="";
    for(var broj_kolegija in kolegiji){
        document.getElementById('buhinjak').value+=("Kolegij broj [" + broj_kolegija);
        document.getElementById('buhinjak').value+=("]: "+ kolegiji[broj_kolegija] + "\n")
    }
}

function obriši(){
   
    let textArea = document.querySelector("#buhinjak");

    textArea.value="";

}