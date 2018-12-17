package rftbackend.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rftbackend.Logic.DatabaseLogic;
import rftbackend.Models.ScheduleTableRow;
import rftbackend.Models.TimetableTableRow;
import rftbackend.Models.Timetable;
import rftbackend.Models.User;
import rftbackend.Repositories.TimetableRepository;
import rftbackend.Services.UserService;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
        else if(userService.returnHighestRole().equals("ROLE_Responsible")){
            long actualUserId = dbLogic.getMentorIdByEmail(userService.returnActualUserName());
            Integer institutionId = dbLogic.getMentorById(actualUserId).get().getResponsible();
            List<Long> mentorIds = dbLogic.getMentorIdsByInstitutionId(institutionId);
            for (Timetable actual: timetable) {
                String mentorName = "";
                String menteeName = "";
                if(dbLogic.getMentorById(actualUserId).isPresent()){
                    if(actual.getMentorid() == actualUserId || mentorIds.contains(actual.getMentorid())){
                        mentorName= dbLogic.getMentorById(actual.getMentorid()).get().getName();
                        if(dbLogic.getMenteeById(actual.getMenteeid()).isPresent()){
                            menteeName= dbLogic.getMenteeById(actual.getMenteeid()).get().getName();
                        }
                        tableContent.add(new TimetableTableRow(actual.getLessonnumber(), actual.getDate(), actual.getTime(), actual.getLocation(), actual.getSubject(), actual.getTopic(), actual.getComment(), actual.getMentorid(), mentorName, actual.getMenteeid(), menteeName, actual.getTimetableid()));
                    }
                }
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

    @RequestMapping(value = "/newTimetableRow", method = RequestMethod.POST)
    public String newTimetableRow(@RequestBody TimetableTableRow newrow) throws IOException {
        String result = "Unsuccessful!";

        System.console().writer().println("---NEW-TIMETABLE-ROW-DATA---");

        System.console().writer().println("newrow.getLessonnumber() " + newrow.getLessonnumber());
        System.console().writer().println("newrow.getDate() " + newrow.getDate());
        System.console().writer().println("newrow.getTime() " + newrow.getTime());
        System.console().writer().println("newrow.getLocation() " + newrow.getLocation());
        System.console().writer().println("newrow.getTopic() " + newrow.getTopic());
        System.console().writer().println("newrow.getComment() " + newrow.getComment());
        System.console().writer().println("newrow.getMentorid() " + newrow.getMentorid());
        System.console().writer().println("newrow.getMenteeid() " + newrow.getMenteeid());
        System.console().writer().println("newrow.getTopic() " + newrow.getTopic());
        System.console().writer().println("newrow.getSubject() " + newrow.getSubject());

        if(dbLogic.saveTimetable(newrow)){
            result = "Successful!";
        }

        return result;

    }

    @RequestMapping(value = "/saveExistingTimetableRow", method = RequestMethod.POST)
    public String saveExistingTimetableRow(@RequestBody TimetableTableRow row) throws IOException {
        String result = "Unsuccessful!";

        if(dbLogic.saveExistingTimetable(row)){
            result = "Successful!";
        }

        return result;

    }
}
