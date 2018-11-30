package rftbackend.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import rftbackend.Models.Institution;
import rftbackend.Repositories.InstitutionRepository;

import java.util.List;

@RestController
public class InstitutionController {

    @Autowired
    InstitutionRepository institutionRepo;

    @GetMapping("/testinstitution")
    public List<Institution> listInstitution() {
        List<Institution> example = institutionRepo.findAll();
        return example;
    }



}
