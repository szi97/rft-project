package rftbackend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import rftbackend.Models.Mentee;
import org.springframework.stereotype.Repository;

@Repository
public interface MenteeRepository extends JpaRepository<Mentee,Long> { //ID típus majd kiderül

}
