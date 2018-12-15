package rftbackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import rftbackend.Logic.DatabaseLogic;
import rftbackend.Models.Event;

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
}
