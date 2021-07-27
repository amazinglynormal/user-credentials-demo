package sb.usercredentialsdemo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sb.usercredentialsdemo.exceptions.ResourceNotFoundException;
import sb.usercredentialsdemo.models.User;
import sb.usercredentialsdemo.repositories.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public User findUser(Long id) {
        return  this.userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }


    public User saveNewUser(User newUser) {
        return this.userRepository.save(newUser);
    }

    public User updateUser(User updatedUser, Long id) {
        return this.userRepository.findById(id).map(user -> {
            user.setUsername(updatedUser.getUsername());
            user.setEmail(updatedUser.getEmail());
            user.setPassword(updatedUser.getPassword());
            return this.userRepository.save(user);
        }).orElseGet(() -> {
            updatedUser.setId(id);
            return this.userRepository.save(updatedUser);
        });
    }

    public void deleteUser(Long id) {
        User user =
                this.userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        this.userRepository.delete(user);
    }
}
