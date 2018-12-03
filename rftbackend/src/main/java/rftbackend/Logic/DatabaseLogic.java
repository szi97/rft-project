package rftbackend.Logic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rftbackend.Models.*;
import rftbackend.Repositories.*;

import java.util.ArrayList;
import java.util.List;

@Service
public class DatabaseLogic {

    @Autowired
    MentorRepository mentorRepo;

    @Autowired
    MenteeRepository menteeRepo;

    @Autowired
    InstitutionRepository institutionRepo;

    @Autowired
    ScheduleRepository scheduleRepo;

    @Autowired
    TimetableRepository timetableRepo;


    private List<Mentor> mentors = new ArrayList<Mentor>();
    private List<Mentee> mentees = new ArrayList<Mentee>();
    private List<Institution> institutions = new ArrayList<Institution>();
    private List<Schedule> schedules= new ArrayList<Schedule>();
    private List<Timetable> timetables= new ArrayList<Timetable>();

    public DatabaseLogic(){
        //readMentorsFromDb();
    }

    public void readMentorsFromDb(){
        this.mentors = mentorRepo.findAll();
    }
    public void readMenteesFromDb(){
        this.mentees = menteeRepo.findAll();
    }
    public void readInstitutionsFromDb(){
        this.institutions = institutionRepo.findAll();
    }
    public void readSchedulesFromDb(){
        this.schedules = scheduleRepo.findAll();
    }
    public void readTimetablesFromDb(){
        this.timetables = timetableRepo.findAll();
    }


    public boolean containsId(long id){
        return mentorRepo.existsById(id);
    }

    public boolean saveMentor(Mentor mentor) {
        try{
            mentor.convertAgegroupListToDb();
            mentor.convertSubjectListToDb();
            mentorRepo.save(mentor);
        }
        catch (Exception e){
            return false;
        }
        return true;
    }

    public List<Mentor> getMentors() {
        return mentors;
    }

    public void setMentors(List<Mentor> mentors) {
        this.mentors = mentors;
    }


    public List<Mentee> getMentees() {
        return mentees;
    }

    public void setMentees(List<Mentee> mentees) {
        this.mentees = mentees;
    }

    public List<Institution> getInstitutions() {
        return institutions;
    }

    public void setInstitutions(List<Institution> institutions) {
        this.institutions = institutions;
    }

    public List<Schedule> getSchedules() {
        return schedules;
    }

    public void setSchedules(List<Schedule> schedules) {
        this.schedules = schedules;
    }

    public List<Timetable> getTimetables() {
        return timetables;
    }

    public void setTimetables(List<Timetable> timetables) {
        this.timetables = timetables;
    }



}
