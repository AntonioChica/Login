import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { AuthPayloadDto } from './dto/auth.dto';
import { find } from 'rxjs';
const fakeUsers = [
  {
    id: 1,
    username: 'antonio',
    password: 'ayerfueayer',
  },
  {
    id: 2,
    username: 'alvaro',
    password: 'mañanaesmañana',
  },
]

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtService){

  }
    
    validateUser({username, password}: AuthPayloadDto){
      const findUser = fakeUsers.find((user) => user.username === username);
      if (!findUser) return false;

      if (password === findUser.password){
        const{password, ...user} = findUser;
        return this.jwtService.sign(user);
      }else{
        return false;
      }

    }
}
