package com.genspark.factory;

import com.genspark.entity.UserEntity;

import java.util.List;

public interface UserFactory {

  List<UserEntity> getUsers();
  UserEntity getUserById(int id);
  UserEntity addUser(UserEntity user);
  UserEntity updateUser(UserEntity user);
  String deleteUserById(int id);


}
