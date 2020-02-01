package app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.dtos.UserDTO;
import app.mappers.UserMapper;
import app.model.Author;

@RestController
@RequestMapping(value = "/api/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
    private UserMapper userMapper;
	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody UserDTO userDTO) {
		Author author = userMapper.toAuthor(userDTO);
		System.out.println(author instanceof Author);
		System.out.println(author.getFirstName());
		System.out.println(author.getLastName());
		System.out.println(author.getEmail());
		System.out.println(author.getPassword());
		System.out.println(author.getUsername());
		return new ResponseEntity<String>("ok", HttpStatus.OK);
	}
}
