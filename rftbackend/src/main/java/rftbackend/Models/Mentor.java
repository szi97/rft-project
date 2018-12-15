package rftbackend.Models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;

@Entity
@Table(name = "mentorok", schema = "sulimuri")
public class Mentor implements Serializable {

    @Id
    @Column(name="ID")
    Long id;

    @Column(name = "Nev")
    private String name;

    @Column(name = "Email_cim")
    private String email;

    @Column(name = "Jelszo")
    private String password;

    @Column(name = "Telefonszam")
    private String phone;

    @Column(name = "Facebook_adatlap")
    private String facebook;

    @Column(name = "Korcsoport")
    private String agegroup;

    @Column(name = "Tantargy")
    private String subject;

    @Column(name = "Intezmeny_ID")
    private Integer responsible;

    @Column(name = "Megjegyzes")
    private String comment;

    @Transient
    private ArrayList<String> agegroupList;

    @Transient
    private ArrayList<String> subjectList;


    public Mentor(long id, String name, String email, String phone, String facebook, String agegroup, String subject, Integer responsible, String comment){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.facebook = facebook;
        this.agegroup = agegroup;
        this.subject = subject;
        this.convertAgegroupListFromDb();
        this.convertSubjectListFromDb();
        this.responsible = responsible;
        this.comment = comment;
    }

    public Mentor(){

    }

    public Mentor(long id, String email, String password, String name, String phoneNumber, String facebook, ArrayList<String> agegroups, ArrayList<String> subjects){
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.phone = phoneNumber;
        this.facebook = facebook;
        this.agegroupList = agegroups;
        this.subjectList = subjects;
        //ezt találjátok ki, hogy milyen módon és ki adja meg, több lesz egyszerre? akkor lista kell, vagy valahogy szétszedni .split() vagy valami
        //pro tip: listbox-ból lehessen kiválasztani: nincs hibalehetőség
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getFacebook() {
        return facebook;
    }

    public void setFacebook(String facebook) {
        this.facebook = facebook;
    }

    public String getAgegroup() {
        return agegroup;
    }

    public void setAgegroup(String agegroup) {
        this.agegroup = agegroup;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public Integer getResponsible() {
        return responsible;
    }

    public void setResponsible(Integer resposible) {
        this.responsible = resposible;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public ArrayList<String> getAgegroupList() {
        return agegroupList;
    }
    public void setAgegroupList(ArrayList<String> agegroups) {
        this.agegroupList = agegroups;
    }

    public void convertAgegroupListFromDb() {
        this.agegroupList = new ArrayList<String>();
        String[] read = this.agegroup.split(",");
        for(int i = 0; i<read.length; i++){
            this.agegroupList.add(read[i]);
        }
    }

    public void convertAgegroupListToDb() {
        String agegroupsTobeSaved = "";
        for (String item: this.agegroupList) {
            agegroupsTobeSaved += item + ", ";
        }
        this.agegroup = agegroupsTobeSaved;
    }

    public ArrayList<String> getSubjectList() {
        return subjectList;
    }

    public void setSubjectList(ArrayList<String> subjects) {
        this.subjectList = subjects;
    }

    public void convertSubjectListFromDb() {
        this.subjectList = new ArrayList<String>();
        String[] read = this.subject.split(",");
        for(int i = 0; i<read.length; i++){
            this.subjectList.add(read[i]);
        }
    }

    public void convertSubjectListToDb() {
        String subjectsTobeSaved = "";
        for (String item: this.subjectList) {
            subjectsTobeSaved += item + ", ";
        }
        this.subject = subjectsTobeSaved;
    }
}
