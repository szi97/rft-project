package rftbackend.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "vezetok", schema = "sulimuri")
public class Leader {

    @Id
    @Column(name="ID")
    Long id;

    @Column(name = "Nev")
    private String name;

    @Column(name = "Email_cim")
    private String email;

    @Column(name = "Telefonszam")
    private String phone;

    @Column(name = "Jelszo")
    private String password;

    public Leader(){

    }


    public Leader(long id, String name, String email, String phoneNumber, String password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phoneNumber;
        this.password = password;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
