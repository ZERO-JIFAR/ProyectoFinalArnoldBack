export class JwtResponse{
    id?:number;
    username!:string;
    email!:string;
    roles!:string[];
    accessToken!:string;
    tokenType!:string;
    authorities!:string[];
    
    
    
}