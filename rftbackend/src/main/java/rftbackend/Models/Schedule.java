package rftbackend.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "menetrend", schema = "sulimuri")
public class Schedule {

    //
    @Id
    @Column(name="Mentor_ID")
    Long mentorid;

    @Column(name = "Mentoralt_ID")
    Long mentoraltid;

    @Column(name = "Intezmeny_ID")
    Long institutionid;

    @Column(name = "Mappa_link")
    private String folder;


    public Schedule(long mentorid, long mentoraltid, long institutionid, String folder)   {
        this.mentorid = mentorid;
        this.mentoraltid = mentoraltid;
        this.institutionid = institutionid;
        this.folder = folder;
    }

    public Schedule (){

    }

    public Long getMentorid() {
        return mentorid;
    }

    public void setMentorid(Long mentorid) {
        this.mentorid = mentorid;
    }

    public Long getMentoraltid() {
        return mentoraltid;
    }

    public void setMentoraltid(Long mentoraltid) {
        this.mentoraltid = mentoraltid;
    }

    public Long getInstitutionid() {
        return institutionid;
    }

    public void setInstitutionid(Long institutionid) {
        this.institutionid = institutionid;
    }

    public String getFolder() {
        return folder;
    }

    public void setFolder(String folder) {
        this.folder = folder;
    }



}
