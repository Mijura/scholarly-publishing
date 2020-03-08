package org.scholarly.publishing.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.scholarly.publishing.dtos.UserDTO;
import org.scholarly.publishing.models.Author;

@Mapper(componentModel = "spring")
public interface UserMapper {

	UserMapper INSTANCE = Mappers.getMapper( UserMapper.class );

    Author toAuthor(UserDTO userDto);
}
