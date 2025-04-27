function calcular(){
// declarar uma variavel sem tipo
let acaoSocial= Number(document.getElementById("acaoSocial").value) //recupera o valor da ação social digitado no html
let homenagem = Number(document.getElementById("homenagem").value) //recupera o valor da homenagem perdido
let leite = Number(document.getElementById("leite").value) //recupera a qtd de litros do leite
let kit = Number(document.getElementById("kit").value) //recupera a qtd de kits avulsos
let suplemento = Number(document.getElementById("suplemento").value) //recupera a qtd de suplementos avulsos
let pacoteArroz = Number(document.getElementById("pacoteArroz").value) //recupera a qtd de pacotes de arroz 5kg
let pacoteArrozkg = Number(document.getElementById("pacoteArrozkg").value) //recupera a qtd de pacotes de arroz de 1kg
let pacoteFeijao = Number(document.getElementById("pacoteFeijao").value) //recupera a qtd de pacote de feijao 2kg
let pacoteFeijaokg = Number(document.getElementById("pacoteFeijaokg").value)
let pacoteMacarrao = Number(document.getElementById("pacoteMacarrao").value)
let oleo = Number(document.getElementById("oleo").value)

let sangue = Number(document.getElementById ("sangue").value)
let pontosSangue = 0
//recuperar a cor da equipe
let equipe = document.getElementById("equipe").value
let pontoskitSupl = 0 //guarda pontuação dos kits

if (equipe = "Laranja"){    
    if (kit >= 97 && suplemento >= 49){
        pontoskitSupl = 5000 + ((kit - 97) * 30 + (suplemento - 49 ) * 15)
    }
    else if (kit >= 78 && suplemento >= 39){
        pontoskitSupl = 4000 + ((kit - 78) * 30 + (suplemento - 39 ) * 15)
    }
    else if (kit >= 49 && suplemento >= 25){
        pontoskitSupl = 2500 + ((kit - 49) * 30  + (suplemento - 25 ) * 15)
    }
    else if (kit >= 19 && suplemento >= 10) {
        pontoskitSupl = 1000 + ((kit - 19) * 30  + (suplemento - 10 ) * 15)
    }

}
else if (equipe = "Preta"){    
    if (kit >= 103 && suplemento >= 52){
        pontoskitSupl = 5000 + ((kit - 103) * 30 + (suplemento - 52 ) * 15)
    }
     else if (kit >= 82 && suplemento >= 42){
        pontoskitSupl = 4000 + ((kit - 82) * 30 + (suplemento - 42 ) * 15)
     }
     else if (kit >= 52 && suplemento >= 26){
        pontoskitSupl = 2500 + ((kit - 52) * 30  + (suplemento - 26 ) * 15)
     }
    else if (kit >= 21 && suplemento >= 10){
        pontoskitSupl = 1000 + ((kit - 21) * 30  + (suplemento - 10 ) * 15)
    }

    }
    else if (equipe = "Roxa"){    
        if (kit >= 102 && suplemento >= 51){
            pontoskitSupl = 5000 + ((kit - 102) * 30 + (suplemento - 51 ) * 15)
        }
         else if (kit >= 82 && suplemento >= 41){
            pontoskitSupl = 4000 + ((kit - 82) * 30 + (suplemento - 41 ) * 15)
         }
         else if (kit >= 51 && suplemento >= 26){
            pontoskitSupl = 2500 + ((kit - 51) * 30  + (suplemento - 26 ) * 15)
         }
        else if (kit >= 20 && suplemento >= 10){
            pontoskitSupl = 1000 + ((kit - 20) * 30  + (suplemento - 10 ) * 15)
        }
        
        
        }
        else if (equipe = "Verde"){    
            if (kit >= 88 && suplemento >= 44){
                pontoskitSupl = 5000 + ((kit - 88) * 30 + (suplemento - 44 ) * 15)
            }
             else if (kit >= 70 && suplemento >= 35){
                pontoskitSupl = 4000 + ((kit - 70) * 30 + (suplemento - 35 ) * 15)
             }
             else if (kit >= 44 && suplemento >= 22){
                pontoskitSupl = 2500 + ((kit - 44) * 30  + (suplemento - 22 ) * 15)
             }
            else if (kit >= 18 && suplemento >= 9){
                pontoskitSupl = 1000 + ((kit - 18) * 30  + (suplemento - 9 ) * 15)
            }
        }
        else {
           
            if (kit >= 93 && suplemento >= 47){
                pontoskitSupl = 5000 + ((kit - 93) * 30 + (suplemento - 47 ) * 15)
            }
             else if (kit >= 74 && suplemento >= 38){
                pontoskitSupl = 4000 + ((kit - 74) * 30 + (suplemento - 38 ) * 15)
             }
             else if (kit >= 47 && suplemento >= 24){
                pontoskitSupl = 2500 + ((kit - 44) * 30  + (suplemento - 22 ) * 15)
             }
            else if (sangue >= 49 ){
                pontoskitSupl = 1000 + ((kit - 19) * 30  + (suplemento - 9 ) * 15)
            }
        }
        
        if (equipe == "laranja"){
            if (sangue >= 47){
                pontosSangue = 2500 + (sangue - 47) * 20
             }
            }
           
    //somar os valore
    let soma = (acaoSocial) +  (homenagem) + (2 * (leite)) + pontoskitSupl +(5* (pacoteArroz)) + (pacoteArrozkg) +(2 * (pacoteFeijao)) + (pacoteFeijaokg) + (0,5 * (pacoteMacarrao)) + (oleo) + (20* (sangue))
     

   //devolve o resultado para o html
    document.getElementById("soma").innerHTML=soma.toFixed(2)
    
    
}



