package rftbackend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rftbackend.Models.Schedule;


@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long>  { //ID vagy valami

}
