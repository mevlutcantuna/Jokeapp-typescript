import React from 'react'
import '../styles/JokeCard.scss';

import { Joke } from '../types'

interface IProps{
    joke:Joke
}

const SingleJokeCard:React.FC<IProps> = ({joke}) => {
    return (
        <div className='jokeCard'>
            <div className='jokeCard__joke'>{joke.joke}</div>
            <div className='jokeCard__category'>{joke.category}</div>
        </div>
    )
}

export default SingleJokeCard
