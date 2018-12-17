package rftbackend.Models;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;

@Entity
@Table(name = "esemenyek", schema = "sulimuri")
public class Event {

    @Id
    @Column(name="ID")
    Long id;

    @Column(name = "Nev")
    private String name;

    @Column(name = "Datum")
    private LocalDate date;

    @Column(name = "Idopont")
    private LocalTime time;

    @Column(name = "Helyszin")
    private String location;

    @Column(name = "Leiras")
    private String description;

    @Column(name = "Szervezo")
    private String organizer;

    @Transient
    private ArrayList<String> organizers;

    public Event(){

    }

    public Event(long id, String name, LocalDate date, LocalTime time, String location, String description, String organizer){
        this.id = id;
        this.name = name;
        this.date = date;
        this.time = time;
        this.location = location;
        this.description = description;
        this.organizer = organizer;
        convertOrganizerListFromDb();
    }

    public Event(long id, String name, LocalDate date, LocalTime time, String location, String description, ArrayList<String> organizers){
        this.id = id;
        this.name = name;
        this.date = date;
        this.time = time;
        this.location = location;
        this.description = description;
        this.organizers = organizers;
        convertOrgenizerListToDb();
    }

    public void convertOrganizerListFromDb() {
        this.organizers = new ArrayList<String>();
        String[] read = this.organizer.split(",");
        if(read.length > 2)
        {
            for(int i = 0; i<read.length; i++){
                this.organizers.add(read[i]);
            }
        }
        else{
            this.organizers.add(this.organizer);
        }

    }

    public void convertOrgenizerListToDb() {
        String organizersTobeSaved = "";
        for (String item: this.organizers) {
            organizersTobeSaved += item + ", ";
        }
        this.organizer = organizersTobeSaved;
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

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getOrganizer() {
        return organizer;
    }

    public void setOrganizer(String organizer) {
        this.organizer = organizer;
        convertOrgenizerListToDb();
    }

    public ArrayList<String> getOrganizers() {
        return organizers;
    }

    public void setOrganizers(ArrayList<String> organizers) {
        this.organizers = organizers;
        convertOrgenizerListToDb();
    }


}
