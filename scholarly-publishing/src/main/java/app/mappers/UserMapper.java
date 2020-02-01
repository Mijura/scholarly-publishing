package app.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import app.dtos.UserDTO;
import app.model.Author;

@Mapper(componentModel = "spring")
public interface UserMapper {

	UserMapper INSTANCE = Mappers.getMapper( UserMapper.class );

    Author toAuthor(UserDTO userDto);
}
