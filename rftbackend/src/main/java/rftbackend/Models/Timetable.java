package rftbackend.Models;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

@Entity
@Table(name = "orarend", schema = "sulimuri")
public class Timetable {

    //
    @Column(name="Oraszam")
    private long lessonnumber;

    @Column(name = "Datum")
    private LocalDate date;

    @Column(name = "Idopont")
    private LocalTime time;

    @Column(name = "Helyszin")
    private String location;

    @Column(name = "Tantargy")
    private String subject;

    @Column(name = "Ora_temaja")
    private String topic;

    @Column(name = "Megjegyzes")
    private String comment;

    @Column(name = "Mentor_ID")
    private Long mentorid;

    @Column(name = "Mentoralt_ID")
    private Long menteeid;

    @Id
    @Column(name = "Orarend_ID")
    Long timetableid;

    public Timetable(long lessonnumber, LocalDate date, LocalTime time, String location, String topic, String comment, long mentorid, long menteeid, long timetableid, String subject)   {
        this.lessonnumber = lessonnumber;
        this.date = date;
        this.time = time;
        this.location = location;
        this.topic = topic;
        this.comment = comment;
        this.mentorid = mentorid;
        this.menteeid = menteeid;
        this.subject = subject;
        this.timetableid = timetableid;
    }

    public Timetable(){
    }


    public long getLessonnumber() {
        return lessonnumber;
    }

    public void setLessonnumber(long lessonnumber) {
        this.lessonnumber = lessonnumber;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
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

    public void setMenteeid(Long menteeid) {
        this.menteeid = menteeid;
    }

    public Long getTimetableid() {
        return timetableid;
    }

    public void setTimetableid(Long timetableid) {
        this.timetableid = timetableid;
    }



}
