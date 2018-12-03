package rftbackend.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "orarend", schema = "sulimuri")
public class Timetable {

    //
    @Column(name="Oraszam")
    private long lessonnumber;

    @Column(name = "Datum")
    private Date date;

    @Column(name = "Idopont")
    private Date time;

    @Column(name = "Helyszin")
    private String location;

    @Column(name = "Tantargy")
    private String subject;

    @Column(name = "Ora_temaja")
    private String topic;

    @Column(name = "Megjegyzes")
    private String comment;

    @Id
    @Column(name = "Mentor_ID")
    private Long mentorid;

    @Id
    @Column(name = "Mentoralt_ID")
    private Long menteeid;


    public Timetable(long lessonnumber, Date date, Date time, String location, String topic, String comment, long mentorid, long menteeid)   {
        this.lessonnumber = lessonnumber;
        this.date = date;
        this.time = time;
        this.location = location;
        this.topic = topic;
        this.comment = comment;
        this.mentorid = mentorid;
        this.menteeid = menteeid;
    }

    public Timetable(){
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

    public void setMenteeid(Long menteeid) {
        this.menteeid = menteeid;
    }





}
