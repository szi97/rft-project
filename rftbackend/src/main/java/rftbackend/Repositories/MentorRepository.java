package rftbackend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import rftbackend.Models.Mentor;
import org.springframework.stereotype.Repository;

@Repository
public interface MentorRepository extends JpaRepository<Mentor,Long> { //ID típus majd kiderül

}
