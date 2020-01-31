package app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.services.PaperService;

@RestController
@RequestMapping(value = "/api/paper")
@CrossOrigin(origins = "http://localhost:4200")
public class PaperController {
	
	@Autowired
	PaperService paperService;
	
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody String data) {
		paperService.add(data);
		
		return new ResponseEntity<String>("ok", HttpStatus.OK);
	}

}
