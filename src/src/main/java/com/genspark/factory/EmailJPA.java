package com.genspark.factory;

import com.genspark.entity.EmailEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailJPA extends JpaRepository<EmailEntity, Integer> {
}
