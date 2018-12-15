package rftbackend.Services;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    public String returnHighestRole(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        boolean isLeader = authentication.getAuthorities().stream()
                .anyMatch(r -> r.getAuthority().equals("ROLE_Leader"));
        if(isLeader){
            return "ROLE_Leader";
        }
        else{
            boolean isResponsible = authentication.getAuthorities().stream()
                    .anyMatch(r -> r.getAuthority().equals("ROLE_Responsible"));
            if(isResponsible){
                return "ROLE_Responsible";
            }
            else{
                return "ROLE_Mentor";
            }
        }
    }

    public String returnActualUserName(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication.getName();
    }

}
