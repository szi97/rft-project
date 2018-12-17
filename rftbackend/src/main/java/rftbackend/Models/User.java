package rftbackend.Models;

public class User {

    private long id;
    private String email;
    private String highestRole;
    private Integer institutionId;

    public User(){

    }

    public User(long id, String email, String highestRole, Integer institutionId){
        this.id = id;
        this.email = email;
        this.highestRole = highestRole;
        this.institutionId = institutionId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHighestRole() {
        return highestRole;
    }

    public void setHighestRole(String highestRole) {
        this.highestRole = highestRole;
    }

    public Integer getInstitutionId() {
        return institutionId;
    }

    public void setInstitutionId(Integer institutionId) {
        this.institutionId = institutionId;
    }

}
