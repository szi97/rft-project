package rftbackend.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "mentorok", schema = "sulimuri")
public class Mentor {

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

    @Column(name = "Intezmenyfelelos")
    private String responsible;

    @Column(name = "Megjegyzes")
    private String comment;

    public Mentor(long id, String name, String email, String phone, String facebook, String agegroup, String subject, String responsible, String comment){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.facebook = facebook;
        this.agegroup = agegroup;
        this.subject = subject;
        this.responsible = responsible;
        this.comment = comment;
    }

    public Mentor(){

    }

    public Mentor(long id, String email, String password, String name, String phoneNumber, String facebook, String subjects){
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.phone = phoneNumber;
        this.facebook = facebook;
        this.subject = subjects; //ezt találjátok ki, hogy milyen módon és ki adja meg, több lesz egyszerre? akkor lista kell, vagy valahogy szétszedni .split() vagy valami
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

    public String getResponsible() {
        return responsible;
    }

    public void setResponsible(String resposible) {
        this.responsible = resposible;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
