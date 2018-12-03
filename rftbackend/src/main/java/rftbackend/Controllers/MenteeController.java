package rftbackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import rftbackend.Logic.DatabaseLogic;
import rftbackend.Models.Mentee;
import rftbackend.Repositories.MenteeRepository;

import java.util.List;


@RestController
public class MenteeController {
    @Autowired
    MenteeRepository menteeRepo;

    @Autowired
    DatabaseLogic dbLogic;

    @GetMapping("/testmentee")
    public List<Mentee> listMentees() {
        dbLogic.readMenteesFromDb();
        return dbLogic.getMentees();
    }
}
