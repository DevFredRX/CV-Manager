import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength, NotContains } from "class-validator";

export class RegisterDTO {

    @IsString()
    @IsNotEmpty({ message: 'Le prénom est requis' })
    firstname!: string

    @IsString()
    @IsNotEmpty({ message: 'Le nom est requis' })
    lastname!: string

    @IsString()
    @IsNotEmpty({ message: 'Le pseudo est requis' })
    @MinLength(3, { message: 'Le pseudo doit contenir au moins 3 caractères'})
    @MaxLength(12, { message: 'Le pseudo doit contenir moins de 12 caractères'})
    @Matches(/^[a-zA-Z0-9_-]+$/, { message: "Le pseudo peut contenir des lettres, chiffres, tirets ou underscore"})
    @NotContains(' ')
    username!: string

    @IsEmail({}, { message: 'Veuillez fournir un email valide' })
    @IsNotEmpty({ message: "L'adresse mail est requise" })
    @Matches(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, { message: 'Veuillez entrer une adresse mail valide'})
    @NotContains(' ')
    email!: string

    @IsString()
    @IsNotEmpty({ message: 'Le mot de passe est requis' })
    @MinLength(12, { message: 'Le mot de passe doit contenir au moins 12 caractères' })
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])(?!.*\s).{12,}$/, { message : "Le mot de passe doit contenir majuscule, minuscule, chiffre et caractère spécial"})
    @NotContains(' ')
    password!: string

}