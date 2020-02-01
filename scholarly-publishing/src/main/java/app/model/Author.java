package app.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue(value = "Author")
public class Author extends User{

	public Author() {
		super();
	}
	
	public Author(Long id, String email, String username, String password, String firstName, String lastName) {
		super(id, email, username, password, firstName, lastName);
	}
}
