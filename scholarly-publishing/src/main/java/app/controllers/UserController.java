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
import app.model.User;
import app.services.UserService;

@RestController
@RequestMapping(value = "/api/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
    private UserMapper userMapper;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody UserDTO userDTO) {
		User user = userService.findByUsername(userDTO.getUsername());
		if(user != null) {
			return new ResponseEntity<Boolean>(false, HttpStatus.CONFLICT);
		}
		Author author = userMapper.toAuthor(userDTO);
		userService.save(author);
		return new ResponseEntity<Boolean>(true , HttpStatus.OK);
	}
}
