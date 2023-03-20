package com.genspark.factory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailJPA extends JpaRepository<com.genspark.entity.EmailEntity, Integer> {
}
