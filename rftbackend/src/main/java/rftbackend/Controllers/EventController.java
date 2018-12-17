package rftbackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rftbackend.Logic.DatabaseLogic;
import rftbackend.Models.Event;
import rftbackend.Models.Leader;
import rftbackend.Models.Mentor;
import rftbackend.Models.ScheduleTableRow;
import rftbackend.Repositories.LeaderRepository;

import java.io.IOException;
import java.util.Comparator;
import java.util.List;

@RestController
public class EventController {

    @Autowired
    DatabaseLogic dbLogic;

    @GetMapping("/events")
    public List<Event> getEvents() {
        dbLogic.readEventsFromDb();
        List<Event> events = dbLogic.getEvents();
        events.sort(new Comparator<Event>() {
            @Override
            public int compare(Event o1, Event o2) {
                if(o1.getDate().isBefore(o2.getDate())){
                    return -1;
                }
                else if(o1.getDate().isAfter(o2.getDate())){
                    return 1;
                }
                else if(o1.getDate().isEqual(o2.getDate())){
                    if(o1.getTime().isBefore(o2.getTime())){
                        return -1;
                    }
                    else if(o1.getTime().isAfter(o2.getTime())){
                        return 1;
                    }
                    else{
                        return 0;
                    }
                }
                else{
                    return 0;
                }
            }
        });
        return dbLogic.getEvents();
    }

    @GetMapping("/getleaders")
    public List<Leader> listMentors() {
        dbLogic.readLeadersFromDb();
        return dbLogic.getLeaders();
    }

    @RequestMapping(value = "/newEvent", method = RequestMethod.POST)
    public String newEvent(@RequestBody Event newEvent) throws IOException {
        String result = "Unsuccessful!";

        System.console().writer().println("---NEW-EVENT-DATA---");
        System.console().writer().println("newEvent.getName() " + newEvent.getName());
        System.console().writer().println("newEvent.getDate() " + newEvent.getDate());
        System.console().writer().println("newEvent.getTime() " + newEvent.getTime());
        System.console().writer().println("newEvent.getLocation() " + newEvent.getLocation());
        System.console().writer().println("newEvent.getDescription() " + newEvent.getDescription());
        System.console().writer().println("newEvent.getOrganizers() " + newEvent.getOrganizers());


        if(dbLogic.saveEvent(newEvent)){
            result = "Successful!";
        }

        return result;

    }

    @RequestMapping(value = "/saveExistingEvent", method = RequestMethod.POST)
    public String saveExistingScheduleRow(@RequestBody Event event) throws IOException {
        String result = "Unsuccessful!";

        System.console().writer().println("---EXISTING-EVENT-DATA---");
        System.console().writer().println("event.getName() " + event.getName());
        System.console().writer().println("event.getDate() " + event.getDate());
        System.console().writer().println("event.getTime() " + event.getTime());
        System.console().writer().println("event.getLocation() " + event.getLocation());
        System.console().writer().println("event.getDescription() " + event.getDescription());
        System.console().writer().println("event.getOrganizers() " + event.getOrganizers());

        if(dbLogic.saveExistingEvent(event)){
            result = "Successful!";
        }
        return result;
    }
}
