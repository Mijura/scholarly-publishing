package app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.model.Author;
import app.model.User;
import app.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}

	public void save(Author author) {
		userRepository.save(author);
	}
}
