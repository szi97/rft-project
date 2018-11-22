package rftbackend.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "mentoraltak", schema = "sulimuri")
public class Mentee {

    //
    @Id
    @Column(name="ID")
    Long id;

    @Column(name = "Nev")
    private String name;

    @Column(name = "Szuletesi_Datum")
    private String birth;

    @Column(name = "Osztaly_Csoport")
    private String schoolclass;

    @Column(name = "Tantargy")
    private String subject;

    @Column(name = "Megjegyzes")
    private String comment;

    @Column(name = "IntezmenyID")
    private String institutionid;


    public Mentee(long id, String name, String birth, String schoolclass, String subject, String comment, String institutionid){
        this.id = id;
        this.name = name;
        this.birth= birth;
        this.schoolclass= schoolclass;
        this.subject = subject;
        this.comment = comment;
        this.institutionid = institutionid;
    }

    public Mentee(){

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBirth() {
        return birth;
    }

    public void setBirth(String birth) {
        this.birth = birth;
    }

    public String getSchoolclass() {
        return schoolclass;
    }

    public void setSchoolclass(String schoolclass) {
        this.schoolclass = schoolclass;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getInstitutionid() {
        return institutionid;
    }

    public void setInstitutionid(String institutionid) {
        this.institutionid = institutionid;
    }


}
