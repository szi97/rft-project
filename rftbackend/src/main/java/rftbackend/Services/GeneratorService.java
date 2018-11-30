package rftbackend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import rftbackend.Logic.DatabaseLogic;

import java.util.Random;

@Service
public class GeneratorService {
    @Autowired
    DatabaseLogic dbLogic;

    public GeneratorService(){

    }

    public String encryptPassword(String password) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.encode(password);
    }

    public long generateId(){
        long leftLimit = -2147483648;
        long rightLimit = 2147483647;
        long id = leftLimit + (long) (Math.random() * (rightLimit - leftLimit));
        while(dbLogic.containsId(id)){
            id = new Random().nextLong();
        }
        return id;
    }
}
