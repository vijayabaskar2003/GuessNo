export default function Result({guess,secretNumber}){
    let result;

  if(guess){ // guess input kulla value iruntha tha intha term vela siyyanumnu if kulla potturukom
    if(guess > secretNumber){
        result='Higher';
    }
    else if(guess < secretNumber){
        result='Lower';
    }
    else if(guess == secretNumber){
        result='Correct.!';
    }
    else{
        result='Enter a Valid Input';
    }
  }
    return(
        <>
            <h3> You Guessed :{result}</h3>
        </>
    );
}

