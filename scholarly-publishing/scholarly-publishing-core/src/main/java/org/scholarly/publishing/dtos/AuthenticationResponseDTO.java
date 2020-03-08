package org.scholarly.publishing.dtos;

public class AuthenticationResponseDTO {

	private String jwt;

	public AuthenticationResponseDTO(String jwt) {
		super();
		this.jwt = jwt;
	}

	public String getJwt() {
		return jwt;
	}

	public void setJwt(String jwt) {
		this.jwt = jwt;
	}
	
	
}
