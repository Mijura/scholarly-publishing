package app.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue(value = "Reviewer")
public class Reviewer extends User {

	public Reviewer() {
		super();
	}
	
	public Reviewer(Long id, String email, String username, String password, String firstName, String lastName) {
		super(id, email, username, password, firstName, lastName);
	}

	
}
