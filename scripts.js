
        
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


document.getElementById('plus').addEventListener('click', affiche('+'));
