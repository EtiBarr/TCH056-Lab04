
        
        function affiche(val){

            document.getElementById('resulta').value += val
        
            return val
        
        }

        function resoudre(){

            let x = document.getElementById('resulta').value
        
            let y = eval(x);
        
            document.getElementById('resulta').value = y
        
            return y
        
        }

                
        function clearScreen(){

            document.getElementById('resulta').value = ''
        
        }

        function inverse(){
           let val = document.getElementById('resulta').value;
           let newVal = eval(val);
           if(newVal != 0){
            newVal = -newVal;
           document.getElementById('resulta').value = newVal;
           return newVal;
        }

        }


document.getElementById('plus').addEventListener('click', affiche('+'));

