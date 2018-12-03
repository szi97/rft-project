package rftbackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import rftbackend.Logic.DatabaseLogic;
import rftbackend.Models.Mentor;
import rftbackend.Repositories.MentorRepository;

import java.util.List;

@RestController
public class MentorController {
    @Autowired
    MentorRepository mentorRepo;

    @Autowired
    DatabaseLogic dbLogic;

    @GetMapping("/testmentor")
    public List<Mentor> listMentors() {
        dbLogic.readMentorsFromDb();
        return dbLogic.getMentors();
    }
}