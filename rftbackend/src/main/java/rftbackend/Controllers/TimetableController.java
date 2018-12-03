package rftbackend.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import rftbackend.Logic.DatabaseLogic;
import rftbackend.Models.Timetable;
import rftbackend.Repositories.TimetableRepository;

import java.util.List;

@RestController
public class TimetableController{

    @Autowired
    TimetableRepository timetableRepo;

    @Autowired
    DatabaseLogic dbLogic;

    @GetMapping("/testtimetable")
    public List<Timetable> listTimetable() {
        dbLogic.readTimetablesFromDb();
        return dbLogic.getTimetables();
    }



}