package rftbackend.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import rftbackend.Logic.DatabaseLogic;
import rftbackend.Models.TimetableTableRow;
import rftbackend.Models.Timetable;
import rftbackend.Repositories.TimetableRepository;
import rftbackend.Services.UserService;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TimetableController{

    @Autowired
    TimetableRepository timetableRepo;

    @Autowired
    DatabaseLogic dbLogic;

    @Autowired
    UserService userService;

    private List<TimetableTableRow> tableContent = new ArrayList<>();

    @GetMapping("/testtimetable")
    public List<TimetableTableRow> listTimetable() {
        System.console().writer().println("---TIMETABLE-IS-HERE---");
        tableContent.clear();
        dbLogic.readSchedulesFromDb();
        dbLogic.readTimetablesFromDb();
        dbLogic.readMenteesFromDb();
        dbLogic.readInstitutionsFromDb();
        dbLogic.readMentorsFromDb();
        List<Timetable> timetable= dbLogic.getTimetables();
        if(userService.returnHighestRole().equals("ROLE_Leader")){
            for (Timetable actual: timetable) {
                String mentorName = "";
                String menteeName = "";
                if(dbLogic.getMentorById(actual.getMentorid()).isPresent()){
                    mentorName= dbLogic.getMentorById(actual.getMentorid()).get().getName();
                }
                if(dbLogic.getMenteeById(actual.getMenteeid()).isPresent()){
                    menteeName= dbLogic.getMenteeById(actual.getMenteeid()).get().getName();
                }
                tableContent.add(new TimetableTableRow(actual.getLessonnumber(), actual.getDate(), actual.getTime(), actual.getLocation(), actual.getSubject(), actual.getTopic(), actual.getComment(), actual.getMentorid(), mentorName, actual.getMenteeid(), menteeName, actual.getTimetableid()));
            }
        }
        else{
            long actualUserId = dbLogic.getMentorIdByEmail(userService.returnActualUserName());
            for (Timetable actual: timetable) {
                String mentorName = "";
                String menteeName = "";
                if(dbLogic.getMentorById(actualUserId).isPresent()){
                    if(actual.getMentorid() == actualUserId){
                        mentorName= dbLogic.getMentorById(actual.getMentorid()).get().getName();
                        if(dbLogic.getMenteeById(actual.getMenteeid()).isPresent()){
                            menteeName= dbLogic.getMenteeById(actual.getMenteeid()).get().getName();
                        }
                        tableContent.add(new TimetableTableRow(actual.getLessonnumber(), actual.getDate(), actual.getTime(), actual.getLocation(), actual.getSubject(), actual.getTopic(), actual.getComment(), actual.getMentorid(), mentorName, actual.getMenteeid(), menteeName, actual.getTimetableid()));
                    }
                }
            }
        }

        return tableContent;
    }
}
