package org.scholarly.publishing.controllers;

import org.scholarly.publishing.services.PaperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/paper")
public class PaperController {
	
	@Autowired
	PaperService paperService;
	
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody String data) {
		paperService.add(data);
		
		return new ResponseEntity<String>("ok", HttpStatus.OK);
	}

}
