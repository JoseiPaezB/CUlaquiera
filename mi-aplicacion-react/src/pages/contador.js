import React,{useState} from 'react'; 
import Button from '@/components/Button';


function contador() {
  const [contador, setContador] = useState(0);

  function incrementa(){
    setContador(contador + 1); 
    console.log(contador); 
  }
  function resetea(){
    setContador(0); 
    console.log(contador);
  }
  function decrementa(){
    setContador(contador - 1); 
    console.log(contador);
  }
    return (
    <div>
        <p>contador:{contador}</p>
        <Button color="red" onClick={incrementa}>Incrementar</Button>
        <Button color="green" onClick={decrementa}>Decrementa</Button>
        <Button color="blue" onClick={resetea}>Reset</Button>

    </div>
  )
}

export default contador