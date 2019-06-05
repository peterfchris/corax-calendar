insert into admins (admin_first_name, admin_last_name, admin_email, username, password)
values (${admin_first_name}, ${admin_last_name}, ${admin_email}, ${username}, ${password});

insert into admin_login (username, password)
values (${username}, ${password})
returning username, login_id;