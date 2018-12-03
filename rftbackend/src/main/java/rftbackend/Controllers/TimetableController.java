package rftbackend.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import rftbackend.Models.Timetable;
import rftbackend.Repositories.TimetableRepository;

import java.util.List;

@RestController
public class TimetableController{

    @Autowired
    TimetableRepository timetableRepo;

    @GetMapping("/testtimetable")
    public List<Timetable> listTimetable() {
        List<Timetable> example = timetableRepo.findAll();
        return example;
    }



}
