package rftbackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import rftbackend.Logic.DatabaseLogic;
import rftbackend.Models.Leader;
import rftbackend.Models.TimetableTableRow;
import rftbackend.Models.User;
import rftbackend.Services.UserService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    DatabaseLogic dbLogic;

    @Autowired
    UserService userService;

    @GetMapping("/testuser")
    public String userTest() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            return currentUserName;
        }
        else{
            return "fck";
        }
    }

    @GetMapping("/testuserrole")
    public boolean[] userTestRole() {
        boolean[] roles = new boolean[3];
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        boolean hasUserRoleLeader = authentication.getAuthorities().stream()
                .anyMatch(r -> r.getAuthority().equals("ROLE_Leader"));
        roles[0] = hasUserRoleLeader;
        boolean hasUserRoleResponsible = authentication.getAuthorities().stream()
                .anyMatch(r -> r.getAuthority().equals("ROLE_Responsible"));
        roles[1] = hasUserRoleResponsible;
        boolean hasUserRoleMentor = authentication.getAuthorities().stream()
                .anyMatch(r -> r.getAuthority().equals("ROLE_Mentor"));
        roles[2] = hasUserRoleMentor;
        return roles;

    }

    @GetMapping("/getactualuser")
    public User getActualUser() {
        long id = dbLogic.getMentorIdByEmail(userService.returnActualUserName());
        User loggedInUser = new User(id, userService.returnActualUserName(),userService.returnHighestRole(), dbLogic.getMentorById(id).get().getResponsible());
        return loggedInUser;
    }

}
