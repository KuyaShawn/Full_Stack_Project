package com.genspark.factory;

import com.genspark.entity.EmailEntity;

import java.util.List;

public interface EmailFactory {
  List<EmailEntity> getEmails();
  EmailEntity getEmailById(int id);
  EmailEntity addEmail(EmailEntity email);
  EmailEntity updateEmail(EmailEntity email);

  String deleteEmailById(int id);


}
