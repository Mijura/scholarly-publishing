package org.scholarly.publishing.controllers;

import org.scholarly.publishing.dtos.AuthenticationResponseDTO;
import org.scholarly.publishing.dtos.UserDTO;
import org.scholarly.publishing.mappers.UserMapper;
import org.scholarly.publishing.models.Author;
import org.scholarly.publishing.models.User;
import org.scholarly.publishing.security.JwtUtil;
import org.scholarly.publishing.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/user")
public class UserController {

	@Autowired
    private UserMapper userMapper;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private AuthenticationManager authenticationManager; 
	
	@Autowired
	private JwtUtil jwtTokenUtil;
	
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
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody UserDTO userDTO) throws Exception  {
		try {
			authenticationManager
				.authenticate(
						new UsernamePasswordAuthenticationToken(
								userDTO.getUsername(), 
								userDTO.getPassword())
						);
		}catch (BadCredentialsException e) {
			throw new Exception("Incorrect username or password", e);
		}
		
		final UserDetails userDetails = userService.loadUserByUsername(userDTO.getUsername());

		final String jwt = jwtTokenUtil.generateToken(userDetails);
		
		return ResponseEntity.ok(new AuthenticationResponseDTO(jwt));
	}
}
