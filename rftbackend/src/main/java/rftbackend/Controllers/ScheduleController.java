package rftbackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import rftbackend.Logic.DatabaseLogic;
import rftbackend.Models.Mentor;
import rftbackend.Models.Schedule;
import rftbackend.Models.ScheduleTableRow;
import rftbackend.Repositories.ScheduleRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ScheduleController{

    @Autowired
    ScheduleRepository scheduleRepo;

    @Autowired
    DatabaseLogic dbLogic;

    private List<ScheduleTableRow> tableContent = new ArrayList<>();

    @GetMapping("/testschedule")
    public List<ScheduleTableRow> listSchedule() {
        System.console().writer().println("---huphupphuppp---");
        dbLogic.readSchedulesFromDb();
        dbLogic.readTimetablesFromDb();
        dbLogic.readMenteesFromDb();
        dbLogic.readInstitutionsFromDb();
        dbLogic.readMentorsFromDb();
        List<Schedule> schedule = dbLogic.getSchedules();
        for (Schedule actual: schedule) {
            //System.console().writer().println("---DATA---");
            //System.console().writer().println(actual.getMentorid());
            //System.console().writer().println(actual.getMenteeid());
            //System.console().writer().println(actual.getInstitutionid());
            String mentorName = "";
            String menteeName = "";
            String institutionName = "";
            if(dbLogic.getMentorById(actual.getMentorid()).isPresent()){
                //System.console().writer().println("---INSIDE-GETMENTORBYID---");
                mentorName= dbLogic.getMentorById(actual.getMentorid()).get().getName();
                //System.console().writer().println(mentorName);
            }
            if(dbLogic.getMenteeById(actual.getMenteeid()).isPresent()){
                //System.console().writer().println("---INSIDE-GETMENTEEBYID---");
                menteeName= dbLogic.getMenteeById(actual.getMenteeid()).get().getName();
                //System.console().writer().println(menteeName);
            }
            if(dbLogic.getInstitutionById(actual.getInstitutionid()).isPresent()){
                //System.console().writer().println("---INSIDE-amimaradt---");
                institutionName= dbLogic.getInstitutionById(actual.getInstitutionid()).get().getName();
                //System.console().writer().println(institutionName);
            }
            tableContent.add(new ScheduleTableRow(mentorName, actual.getMentorid(), menteeName, actual.getMenteeid(), institutionName, actual.getInstitutionid(), actual.getFolder()));
        }
        return tableContent;
    }
}
