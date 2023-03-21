package com.genspark.service;

import com.genspark.entity.EmailEntity;
import com.genspark.factory.EmailFactory;
import com.genspark.factory.EmailJPA;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmailService implements EmailFactory {

  @Autowired
  private EmailJPA emailDao;

  @Override
  public List<EmailEntity> getEmails() {
    return emailDao.findAll();
  }

  @Override
  public EmailEntity getEmailById(int id) {
    return emailDao.getReferenceById(id);
  }

  @Override
  public EmailEntity addEmail(EmailEntity email) {
    return emailDao.save(email);
  }

  @Override
  public EmailEntity updateEmail(EmailEntity email) {
    return emailDao.save(email);
  }

  @Override
  public String deleteEmailById(int id) {

    emailDao.deleteById(id);
    return "Email Deleted";
  }
}
