package com.genspark.factory;

import com.genspark.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserJPA extends JpaRepository<UserEntity,Integer> {
}
