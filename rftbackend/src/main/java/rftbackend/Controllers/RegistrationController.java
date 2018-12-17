package rftbackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rftbackend.Models.Mentor;
import rftbackend.Services.RegistrationService;

import java.io.IOException;

@RestController
public class RegistrationController {

    @Autowired
    RegistrationService registrationService;

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String registerMentor(@RequestBody Mentor mentor) throws IOException {
        String result = new String("asd");

        System.console().writer().println("mentor.getEmail() " + mentor.getEmail());
        System.console().writer().println("mentor.getPassword() " + mentor.getPassword());
        System.console().writer().println("mentor.getPhone() " + mentor.getPhone());
        System.console().writer().println("mentor.getFacebook() " + mentor.getFacebook());
        System.console().writer().println("mentor.getAgegroupList() " + mentor.getAgegroupList());
        System.console().writer().println("mentor.getSubjectList() " + mentor.getSubjectList());

        if (registrationService.registerMentor(mentor.getEmail(), mentor.getPassword(), mentor.getName(), mentor.getPhone(), mentor.getFacebook(), mentor.getAgegroupList(), mentor.getSubjectList())){
            result = "Successful registration!";
        }
        else{
            result = "Unsuccessful registration!";
        }

        return result; //lehet majd más a visszatérési értéke, ha mondjuk ezután el akarunk navigálni máshova

    }

}


