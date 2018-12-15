package rftbackend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rftbackend.Models.Leader;

@Repository
public interface LeaderRepository extends JpaRepository<Leader,Long> {

}
