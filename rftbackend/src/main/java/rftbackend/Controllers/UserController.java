package rftbackend.Controllers;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

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

}
