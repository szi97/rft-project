package rftbackend.Models;
import java.util.Date;

public class TimetableTableRow {

    private long lessonnumber;
    private Date date;
    private Date time;
    private String location;
    private String subject;
    private String topic;
    private String comment;
    private Long mentorid;
    private String mentorName;
    private Long menteeid;
    private String menteeName;
    Long timetableid;



    public TimetableTableRow(long lessonnumber, Date date, Date time, String location, String subject, String topic, String comment, long mentorid, String mentorName, long menteeid, String menteeName, long timetableid)   {
        this.lessonnumber = lessonnumber;
        this.date = date;
        this.time = time;
        this.location = location;
        this.subject = subject;
        this.topic = topic;
        this.comment = comment;
        this.mentorid = mentorid;
        this.mentorName = mentorName;
        this.menteeid = menteeid;
        this.menteeName = menteeName;
        this.timetableid = timetableid;
    }

    public TimetableTableRow(){
    }


    public long getLessonnumber() {
        return lessonnumber;
    }

    public void setLessonnumber(long lessonnumber) {
        this.lessonnumber = lessonnumber;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Long getMentorid() {
        return mentorid;
    }

    public void setMentorid(Long mentorid) {
        this.mentorid = mentorid;
    }

    public Long getMenteeid() {
        return menteeid;
    }

    public String getMentorName() {
        return mentorName;
    }

    public void setMentorName(String mentorName) {
        this.mentorName = mentorName;
    }

    public void setMenteeid(Long menteeid) {
        this.menteeid = menteeid;
    }

    public String getMenteeName() {
        return menteeName;
    }

    public void setMenteeName(String menteeName) {
        this.menteeName = menteeName;
    }

    public Long getTimetableid() {
        return timetableid;
    }

    public void setTimetableid(Long timetableid) {
        this.timetableid = timetableid;
    }


}
