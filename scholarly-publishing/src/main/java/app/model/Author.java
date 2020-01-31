package app.model;

public class Author extends User{

	public Author(Long id, String email, String username, String password, String firstName, String lastName) {
		super(id, email, username, password, firstName, lastName);
	}
}
