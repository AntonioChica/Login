import { Controller, Post, Get, Body} from '@nestjs/common';
import { User } from 'src/users/users.entity';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { AuthPayloadDto } from './dto/auth.dto';


@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}
    
    @Post('login')
    login(@Body() authPayload: AuthPayloadDto){
        return this.authService.validateUser(authPayload);

    }



    // constructor(private authService: AuthService){}
    // @Get('Autenticacion')
    // autentificar():string{
    //     return "hola"
       
    // }
    
    
}
