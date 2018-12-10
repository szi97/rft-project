package rftbackend.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import rftbackend.Logic.DatabaseLogic;
import rftbackend.Models.TimetableTableRow;
import rftbackend.Models.Timetable;
import rftbackend.Repositories.TimetableRepository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
public class TimetableController{

    @Autowired
    TimetableRepository timetableRepo;

    @Autowired
    DatabaseLogic dbLogic;

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
        for (Timetable actual: timetable) {
            //System.console().writer().println("---DATA_TIME_---");
            //System.console().writer().println(actual.getMentorid());
            //System.console().writer().println(actual.getMenteeid());
            String mentorName = "";
            String menteeName = "";
            if(dbLogic.getMentorById(actual.getMentorid()).isPresent()){
                //System.console().writer().println("---TIMTEIMTIMTEEE-----INSIDE-GETMENTORBYID---");
                mentorName= dbLogic.getMentorById(actual.getMentorid()).get().getName();
                //System.console().writer().println(mentorName);
            }
            if(dbLogic.getMenteeById(actual.getMenteeid()).isPresent()){
                //System.console().writer().println("---TIMTEIMTIMTEEE-----INSIDE-GETMENTEEBYID---");
                menteeName= dbLogic.getMenteeById(actual.getMenteeid()).get().getName();
                //System.console().writer().println(menteeName);
            }
            tableContent.add(new TimetableTableRow(actual.getLessonnumber(), actual.getDate(), actual.getTime(), actual.getLocation(), actual.getSubject(), actual.getTopic(), actual.getComment(), actual.getMentorid(), mentorName, actual.getMenteeid(), menteeName, actual.getTimetableid()));
        }
        return tableContent;
    }
}
