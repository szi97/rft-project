package rftbackend.Logic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rftbackend.Models.*;
import rftbackend.Repositories.*;
import rftbackend.Services.GeneratorService;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

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

    @Autowired
    LeaderRepository leaderRepo;

    @Autowired
    EventRepository eventRepo;

    @Autowired
    GeneratorService generatorService;


    private List<Mentor> mentors = new ArrayList<Mentor>();
    private List<Mentee> mentees = new ArrayList<Mentee>();
    private List<Institution> institutions = new ArrayList<Institution>();
    private List<Schedule> schedules = new ArrayList<Schedule>();
    private List<Timetable> timetables = new ArrayList<Timetable>();
    private List<Leader> leaders = new ArrayList<>();
    private List<Event> events = new ArrayList<>();

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

    public void readEventsFromDb(){
        this.events = eventRepo.findAll();
    }

    public void readLeadersFromDb(){
        this.leaders = leaderRepo.findAll();
    }

    public boolean containsId(long id){ //átnevezni MentorId-re mert másre is lesz majd
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

    public boolean saveSchedule(ScheduleTableRow newrow) {
        try{
            Schedule newSchedule = new Schedule(generatorService.generateId(), newrow.getMentorId(), newrow.getMenteeId(), newrow.getInstitutionId(), newrow.getFolderLink());
            scheduleRepo.save(newSchedule);
        }
        catch (Exception e){
            return false;
        }
        return true;
    }

    public boolean saveExistingSchedule(ScheduleTableRow row) {
        try{
            Schedule schedule = scheduleRepo.getOne(row.getRowId());
            schedule.setFolder(row.getFolderLink());
            schedule.setInstitutionid(row.getInstitutionId());
            schedule.setMenteeid(row.getMenteeId());
            schedule.setMentorid(row.getMentorId());
            //id
            scheduleRepo.save(schedule);
        }
        catch (Exception e){
            return false;
        }
        return true;
    }

    public boolean saveTimetable(TimetableTableRow newrow) {
        try{
            Timetable timetable = new Timetable(newrow.getLessonnumber(), newrow.getDate(), newrow.getTime(), newrow.getLocation(), newrow.getTopic(), newrow.getComment(), newrow.getMentorid(), newrow.getMenteeid(), generatorService.generateId(), newrow.getSubject());
            timetableRepo.save(timetable);
        }
        catch (Exception e){
            return false;
        }
        return true;
    }

    public boolean saveExistingTimetable(TimetableTableRow row) {
        try{
            Timetable timetable = timetableRepo.getOne(row.getTimetableid());
            timetable.setComment(row.getComment());
            timetable.setDate(row.getDate());
            timetable.setLessonnumber(row.getLessonnumber());
            timetable.setLocation(row.getLocation());
            timetable.setMenteeid(row.getMenteeid());
            timetable.setMentorid(row.getMentorid());
            timetable.setSubject(row.getSubject());
            timetable.setTime(row.getTime());
            timetable.setTopic(row.getTopic());
            timetableRepo.save(timetable);
        }
        catch (Exception e){
            return false;
        }
        return true;
    }

    public boolean saveEvent(Event newEvent) {
        try{
            Event event = new Event(generatorService.generateId(), newEvent.getName(), newEvent.getDate(), newEvent.getTime(), newEvent.getLocation(), newEvent.getDescription(), newEvent.getOrganizer());
            event.convertOrgenizerListToDb();
            eventRepo.save(event);
        }
        catch (Exception e){
            return false;
        }
        return true;
    }

    public boolean saveExistingEvent(Event event) {
        try{
            Event eventToBeSaved = eventRepo.getOne(event.getId());
            eventToBeSaved.setDate(event.getDate());
            eventToBeSaved.setDescription(event.getDescription());
            eventToBeSaved.setLocation(event.getLocation());
            eventToBeSaved.setName(event.getName());
            eventToBeSaved.setOrganizers(event.getOrganizers());
            eventToBeSaved.convertOrgenizerListToDb();
            eventToBeSaved.setTime(event.getTime());
            eventRepo.save(eventToBeSaved);
        }
        catch (Exception e){
            return false;
        }
        return true;
    }

    public long getMentorIdByEmail(String email){
        long id = 0;
        int i = 0;
        while(id == 0){
            if(mentors.get(i).getEmail().equals(email)){
                id = mentors.get(i).getId();
            }
            i++;
        }
        return id;
    }

    public long getLeaderIdByEmail(String email){
        long id = 0;
        int i = 0;
        while(id == 0){
            if(leaders.get(i).getEmail().equals(email)){
                id = leaders.get(i).getId();
            }
            i++;
        }
        return id;
    }

    public List<Long> getMentorIdsByInstitutionId(Integer id){
        List<Schedule> schedules = scheduleRepo.findAll();
        List<Long> resultList = new ArrayList<Long>();
        for (Schedule sch : schedules) {
            Integer i = sch.getInstitutionid() != null ? sch.getInstitutionid().intValue() : null;
            if(i == id){
                resultList.add(sch.getMentorid());
            }
        }
        return resultList;
    }

    public List<Mentor> getMentors() {
        return mentors;
    }

    public Optional<Mentor> getMentorById(long id){
        return mentorRepo.findById(id);
    }

    public Optional<Mentee> getMenteeById(long id){
        return menteeRepo.findById(id);
    }

    public Optional<Institution> getInstitutionById(long id){
        return institutionRepo.findById(id);
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

    public List<Leader> getLeaders() {
        return leaders;
    }

    public Optional<Leader> getLeaderById(long id){
        return leaderRepo.findById(id);
    }

    public List<Event> getEvents() {
        return events;
    }

    public Optional<Event> getEventById(long id){
        return eventRepo.findById(id);
    }



}
