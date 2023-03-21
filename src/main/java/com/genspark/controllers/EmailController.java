package com.genspark.controllers;

import com.genspark.entity.EmailEntity;
import com.genspark.factory.EmailFactory;
import com.genspark.service.EmailService;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmailController implements EmailFactory {

  @Autowired
  @Resource(name = "emailService")
  private EmailService emailService;

  @GetMapping("/")
  @Override
  public List<EmailEntity> getEmails() {
    return emailService.getEmails();
  }

  @GetMapping("//")
  @Override
  public EmailEntity getEmailById(int id) {
    return emailService.getEmailById(id);
  }

  @PutMapping("/")
  @Override
  public EmailEntity addEmail(EmailEntity email) {
    return emailService.addEmail(email);
  }


  @PostMapping("/")
  @Override
  public EmailEntity updateEmail(EmailEntity email) {
    return emailService.updateEmail(email);
  }

  @DeleteMapping("/")
  @Override
  public String deleteEmailById(@RequestBody int id) {
    return emailService.deleteEmailById(id);
  }
}
