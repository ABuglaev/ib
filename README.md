# ib
myImageBoard

http://tonight.by/

Приложение - анонимный имиджборд(форум/чатик, с возможностью прилагать к посту картинку). Сейчас он состоит из 3 независимых веток.<br>
Всё реализовано на стеке MERN(MongoDB + Express + Reat + NodeJS). Дополнительно используется axios для ajax http запросов, сразу писал с использованием fetch, но что-то пошло не так. Как потом оказалось, причина была не в fetch, но переписывать уже было неохота. Для аплоада картинок используется multer, есть проверка на размер файла(<2Mb) и его расширение.<br>
Система на сервере - Ubuntu 16.04. Управляется через bash(PuTTY) по SSH. Файлами управляю через FileZilla.<br>
Приложение неплохо смотрится и со смартфона<br>

Всего в БД 3 коллекции(каждая на свой тред) форма документа в коллекции MongoDB выглядит так:
<pre>
{
  _id: 'some id',
  text: 'post text',
  date: '23452345234534', // <- creation date
  imageURL: 'http://tonight.by/img/someimage.jpg-timestamp.jpg', 
  thread: '#thread1'
}
</pre>
test pipeline 1231
