package app.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

@Entity
@DiscriminatorValue(value = "Editor")
public class Editor extends User {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public Editor() {
		super();
	}
	
	public Editor(Long id, String email, String username, String password, String firstName, String lastName) {
		super(id, email, username, password, firstName, lastName);
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<GrantedAuthority> list = new ArrayList<GrantedAuthority>();
        list.add(new SimpleGrantedAuthority("ROLE_EDITOR"));
        return list;
	}
}
