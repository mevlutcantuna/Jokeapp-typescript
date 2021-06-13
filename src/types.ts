export interface Flags {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
}

export interface Joke {
    category: string;
    type: string;
    joke: string;
    flags: Flags;
    id: number;
    safe: boolean;
    lang: string;
    setup:string,
    delivery:string
}

export interface JokesTypes {
    error: boolean;
    amount: number;
    jokes: Joke[];
}