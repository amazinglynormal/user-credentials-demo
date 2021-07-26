package sb.usercredentialsdemo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sb.usercredentialsdemo.models.User;
import sb.usercredentialsdemo.repositories.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User addNewUser(User user) {
        this.userRepository.save(user);
        return user;
    }

    public User findUserById(Long id) {
        return this.userRepository.getById(id);
    }
}
