import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDTO {

    @IsString()
    @IsNotEmpty({ message: "Le nom d'utilisateur ou l'email est requis" })
    identifier!: string

    @IsString()
    @IsNotEmpty({ message: 'Le mot de passe est requis' })
    @MinLength(12, { message: 'Le mot de passe doit contenir au moins 12 caractères' })
    password!: string

}