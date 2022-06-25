export interface Movie {
    Poster: string,
    Title: string
    Type: string
    Year: string
    imdbID: string
}

export interface ApiSearchResponce {
    Error?: string,
    Response?: string,
    Search?: Movie[],
    totalResults?: string
}