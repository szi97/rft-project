package rftbackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import rftbackend.Logic.DatabaseLogic;
import rftbackend.Models.Schedule;
import rftbackend.Models.ScheduleTableRow;
import rftbackend.Repositories.ScheduleRepository;
import rftbackend.Services.UserService;

import java.util.*;

@RestController
public class ScheduleController{

    @Autowired
    ScheduleRepository scheduleRepo;

    @Autowired
    DatabaseLogic dbLogic;

    @Autowired
    UserService userService;

    private List<ScheduleTableRow> tableContent = new ArrayList<>();

    @GetMapping("/menetrend")
    public Map<String, List<ScheduleTableRow>> listSchedule() {
        System.console().writer().println("------------------schedule-----------------");
        Map<String, List<ScheduleTableRow>> response = new HashMap<>();

        tableContent.clear();
        dbLogic.readSchedulesFromDb();
        dbLogic.readTimetablesFromDb();
        dbLogic.readMenteesFromDb();
        dbLogic.readInstitutionsFromDb();
        dbLogic.readMentorsFromDb();
        List<Schedule> schedule = dbLogic.getSchedules();
        for (Schedule actual: schedule) {
            String mentorName = "";
            String menteeName = "";
            String institutionName = "";
            if(dbLogic.getMentorById(actual.getMentorid()).isPresent()){
                mentorName= dbLogic.getMentorById(actual.getMentorid()).get().getName();
            }
            if(dbLogic.getMenteeById(actual.getMenteeid()).isPresent()){
                menteeName= dbLogic.getMenteeById(actual.getMenteeid()).get().getName();
            }
            if(dbLogic.getInstitutionById(actual.getInstitutionid()).isPresent()){
                institutionName= dbLogic.getInstitutionById(actual.getInstitutionid()).get().getName();
            }
            tableContent.add(new ScheduleTableRow(mentorName, actual.getMentorid(), menteeName, actual.getMenteeid(), institutionName, actual.getInstitutionid(), actual.getFolder()));
        }

        response.put(userService.returnHighestRole(), tableContent);

        return response;
    }
}
