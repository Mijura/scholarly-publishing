package app.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue(value = "Editor")
public class Editor extends User {
	
	public Editor() {
		super();
	}
	
	public Editor(Long id, String email, String username, String password, String firstName, String lastName) {
		super(id, email, username, password, firstName, lastName);
	}
}
