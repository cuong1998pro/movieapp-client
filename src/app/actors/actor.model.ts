export interface CreateActorDTO{
    name: string;
    dateOfBirth: Date;
    picture: File;
    biography: string;
}

export interface actorDTO{
    name: string;
    dateOfBirth: Date;
    picture: string;
    biography: string;
}