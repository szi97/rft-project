package rftbackend.Models;

public class ScheduleTableRow {

    private String mentorName;
    private long mentorId;
    private String menteeName;
    private long menteeId;
    private String institutionName;
    private long institutionId;
    private String folderLink;

    public ScheduleTableRow(){

    }

    public ScheduleTableRow(String mentorName, long mentorId, String menteeName, long menteeId, String institutionName, long institutionId, String folderLink){
    this.mentorName = mentorName;
    this.mentorId = mentorId;
    this.menteeName = menteeName;
    this.menteeId = menteeId;
    this.institutionName = institutionName;
    this.institutionId = institutionId;
    this.folderLink = folderLink;
    }

    public String getMentorName() {
        return mentorName;
    }

    public void setMentorName(String mentorName) {
        this.mentorName = mentorName;
    }

    public long getMentorId() {
        return mentorId;
    }

    public void setMentorId(long mentorId) {
        this.mentorId = mentorId;
    }

    public String getMenteeName() {
        return menteeName;
    }

    public void setMenteeName(String menteeName) {
        this.menteeName = menteeName;
    }

    public long getMenteeId() {
        return menteeId;
    }

    public void setMenteeId(long menteeId) {
        this.menteeId = menteeId;
    }

    public String getInstitutionName() {
        return institutionName;
    }

    public void setInstitutionName(String institutionName) {
        this.institutionName = institutionName;
    }

    public long getInstitutionId() {
        return institutionId;
    }

    public void setInstitutionId(long institutionId) {
        this.institutionId = institutionId;
    }

    public String getFolderLink() {
        return folderLink;
    }

    public void setFolderLink(String folderLink) {
        this.folderLink = folderLink;
    }





}
