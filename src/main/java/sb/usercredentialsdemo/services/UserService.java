package sb.usercredentialsdemo.services;

import sb.usercredentialsdemo.models.User;

public interface UserService {

    User findUser(Long id);
    User saveNewUser(User newUser);
    User updateUser(User updatedUser, Long id);
    void deleteUser(Long id);
}
