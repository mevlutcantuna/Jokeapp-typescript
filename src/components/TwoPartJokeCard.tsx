import React from 'react'
import '../styles/JokeCard.scss'
import {Joke} from '../types';

interface IProps{
    joke:Joke
}
 

const TwoPartJokeCard:React.FC<IProps> = ({joke}) => {
    return (
        <div className='jokeCard'>
           <div style={{marginBottom:'1rem'}}> - {joke.setup}</div>
           <div> * {joke.delivery}</div> 
           <div className='jokeCard__category'>{joke.category}</div>
        </div>
    )
}

export default TwoPartJokeCard
