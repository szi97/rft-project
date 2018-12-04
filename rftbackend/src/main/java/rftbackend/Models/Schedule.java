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
    @Column(name="Menetrend_ID")
    Long scheduleid;

    @Column(name="Mentor_ID")
    Long mentorid;

    @Column(name = "Mentoralt_ID")
    Long menteeid;

    @Column(name = "Intezmeny_ID")
    Long institutionid;

    @Column(name = "Mappalink")
    private String folder;

    public Schedule(long scheduleid, long mentorid, long menteeid, long institutionid, String folder)   {
        this.scheduleid = scheduleid;
        this.mentorid = mentorid;
        this.menteeid = menteeid;
        this.institutionid = institutionid;
        this.folder = folder;
    }

    public Schedule (){

    }

    public Long getScheduleid() {
        return scheduleid;
    }

    public void setScheduleid(Long scheduleid) {
        this.scheduleid = scheduleid;
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
