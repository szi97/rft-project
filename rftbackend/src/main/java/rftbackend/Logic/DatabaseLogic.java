package rftbackend.Logic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rftbackend.Models.Mentor;
import rftbackend.Repositories.MentorRepository;

@Service
public class DatabaseLogic {

    @Autowired
    MentorRepository mentorRepo;

    public DatabaseLogic(){

    }

    public boolean containsId(long id){
        return mentorRepo.existsById(id);
    }

    public boolean saveMentor(Mentor mentor) {
        try{
            mentor.convertAgegroupListToDb();
            mentor.convertSubjectListToDb();
            mentorRepo.save(mentor);
        }
        catch (Exception e){
            return false;
        }
        return true;
    }
}
