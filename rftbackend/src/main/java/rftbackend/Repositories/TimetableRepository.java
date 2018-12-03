package rftbackend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rftbackend.Models.Timetable;

@Repository
public interface TimetableRepository  extends JpaRepository<Timetable, Long> { //ID valami
}
