package rftbackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rftbackend.Logic.DatabaseLogic;
import rftbackend.Models.Mentor;
import rftbackend.Repositories.MentorRepository;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
public class MentorController {

    @Autowired
    DatabaseLogic dbLogic;

    @GetMapping("/testmentor")
    public List<Mentor> listMentors() {
        dbLogic.readMentorsFromDb();
        return dbLogic.getMentors();
    }

    @RequestMapping(value = "/getmentor", method = RequestMethod.POST)
    public Optional<Mentor> getMentorById(@RequestBody long id) throws IOException {
        Optional<Mentor> mentor = dbLogic.getMentorById(id);
        if(mentor.isPresent()){
            return mentor;
        }
        else{
            return null;
        }
    }

    @RequestMapping(value = "/savementor", method = RequestMethod.POST)
    public String saveModifiedMentor(@RequestBody Mentor mentor) throws IOException {
        String result = "Unsuccessful! :(";
        boolean success = false;

        Optional<Mentor> modifiedMentor = dbLogic.getMentorById(mentor.getId());
        if(modifiedMentor.isPresent()){
            modifiedMentor.get().setName(mentor.getName());
            modifiedMentor.get().setEmail(mentor.getEmail());
            modifiedMentor.get().setAgegroupList(mentor.getAgegroupList());
            modifiedMentor.get().setComment(mentor.getComment());
            modifiedMentor.get().setFacebook(mentor.getFacebook());
            //meg akármi még amit módosíthatunk, én nem tudom pontosan

            success = dbLogic.saveMentor(modifiedMentor.get());
        }
        if(success){
            result = "Successful!";
        }

        return result;
    }
}