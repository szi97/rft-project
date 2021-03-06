package rftbackend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rftbackend.Logic.DatabaseLogic;
import rftbackend.Models.Mentor;

import java.util.ArrayList;

@Service
public class RegistrationService {
    @Autowired
    GeneratorService generatorService;
    @Autowired
    DatabaseLogic dbLogic;

    public RegistrationService(){

    }

    public boolean registerMentor(String email, String password, String name, String phoneNumber, String facebook, ArrayList<String> agegroups,  ArrayList<String> subjects) {
        long id = generatorService.generateId();
        String encryptedMentorPw = generatorService.encryptPassword(password);
        Mentor mentorToBeRegistered = new Mentor(id, email,encryptedMentorPw, name, phoneNumber, facebook, agegroups, subjects);

        //jöhet majd még ide egy check, hogy ilyen mentor van-e már, e-mail, név vagy akármi alapján, ha van, akkor nem rakjuk újra bele

        if(dbLogic.saveMentor(mentorToBeRegistered)){
            return true;
        }
        else{
            return false;
        }
    }
}
