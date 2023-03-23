package com.genspark.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

  private String title;


  private String username;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getfName() {
    return fName;
  }

  public void setfName(String fName) {
    this.fName = fName;
  }

  public String getlName() {
    return lName;
  }

  public void setlName(String lName) {
    this.lName = lName;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public List<EmailEntity> getEmails() {
    return emails;
  }

  public void setEmails(List<EmailEntity> emails) {
    this.emails = emails;
  }

  private String password;

  @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
  @JoinTable(name = "email")
  private List<EmailEntity> emails = new ArrayList<>();
}
