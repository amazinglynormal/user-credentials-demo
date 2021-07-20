package sb.usercredentialsdemo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import sb.usercredentialsdemo.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
