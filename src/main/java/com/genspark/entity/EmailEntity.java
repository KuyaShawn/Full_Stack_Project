package com.genspark.entity;

import jakarta.persistence.*;

@Entity
public class EmailEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;

  private String message;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id", nullable = false)
  private UserEntity user;

}
