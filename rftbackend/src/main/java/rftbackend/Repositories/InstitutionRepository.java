package rftbackend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rftbackend.Models.Institution;

@Repository
public interface InstitutionRepository extends JpaRepository<Institution,Long> { //ID vagy majd valami
}
