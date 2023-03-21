package com.genspark.service;

import com.genspark.entity.UserEntity;
import com.genspark.factory.UserFactory;
import com.genspark.factory.UserJPA;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements UserFactory {

  @Autowired
  private UserJPA userDao;

  @Override
  public List<UserEntity> getUsers() {
    return userDao.findAll();
  }

  @Override
  public UserEntity getUserById(int id) {
    return userDao.getReferenceById(id);
  }

  @Override
  public UserEntity addUser(UserEntity user) {
    return userDao.save(user);
  }

  @Override
  public UserEntity updateUser(UserEntity user) {
    return userDao.save(user);
  }

  @Override
  public String deleteUserById(int id) {
     userDao.deleteById(id);

     return "User Deleted";
  }
}
