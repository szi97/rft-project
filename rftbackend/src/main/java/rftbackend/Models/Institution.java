package rftbackend.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "intezmenyek", schema = "sulimuri")
public class Institution {
    //
    @Id
    @Column(name="ID")
    Long id;

    @Column(name = "Nev")
    private String name;

    @Column(name = "Email_cim")
    private String email;

    @Column(name = "Telefonszam")
    private String phone;

    @Column(name = "Cim")
    private String address;

    @Column(name = "Vezeto")
    private String director;

    @Column(name = "Intezmenyfelelos_ID")
    private Integer responsible;


    public Institution(long id, String name, String email, String phone, String address, String director, Integer responsible){
        this.id = id;
        this.name = name;
        this.email= email;
        this.phone = phone;
        this.address = address;
        this.director = director;
        this.responsible = responsible;
    }

    public Institution(){

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public Integer getResponsible() {
        return responsible;
    }

    public void setResponsible(Integer responsible) {
        this.responsible = responsible;
    }



}
