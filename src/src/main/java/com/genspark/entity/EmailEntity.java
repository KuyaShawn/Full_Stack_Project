package com.genspark.entity;

import jakarta.persistence.*;

@Entity
public class EmailEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;

  private String message;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }



  @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
  @JoinColumn(name = "user_id", nullable = false)
  private UserEntity user;



}
