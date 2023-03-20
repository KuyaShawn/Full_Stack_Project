package com.genspark.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class UserEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;

  private String fName;
  private String lName;

  @OneToMany(mappedBy = "userEntity")
  private List<EmailEntity> emails = new ArrayList<>();
}
