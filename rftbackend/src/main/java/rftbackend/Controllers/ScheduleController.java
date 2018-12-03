package rftbackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import rftbackend.Logic.DatabaseLogic;
import rftbackend.Models.Schedule;
import rftbackend.Repositories.ScheduleRepository;

import java.util.List;

@RestController
public class ScheduleController{

    @Autowired
    ScheduleRepository scheduleRepo;

    @Autowired
    DatabaseLogic dbLogic;

    @GetMapping("/testschedule")
    public List<Schedule> listSchedule() {
        dbLogic.readSchedulesFromDb();
        return dbLogic.getSchedules();
    }



}
