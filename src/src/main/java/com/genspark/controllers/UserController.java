package com.genspark.controllers;

import com.genspark.entity.UserEntity;
import com.genspark.factory.UserFactory;
import com.genspark.service.UserService;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController implements UserFactory {
  @Autowired
  @Resource(name = "userService")
  private UserService userService;

  @GetMapping("/users")
  @Override
  public List<UserEntity> getUsers() {
    return userService.getUsers();
  }
  @GetMapping("/users/{id}")
  @Override
  public UserEntity getUserById(int id) {
    return userService.getUserById(id);
  }
  @PostMapping("/users")
  @Override
  public UserEntity addUser(UserEntity user) {
    return userService.addUser(user);
  }
  @PutMapping("/users/{user}")
  @Override
  public UserEntity updateUser(UserEntity user) {
    return userService.updateUser(user);
  }
  @DeleteMapping("/users/{id}")
  @Override
  public String deleteUserById(int id) {
    return userService.deleteUserById(id);
  }
}
