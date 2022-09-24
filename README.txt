Rejestracja do API:
1)Przez przeglądarkę:
    Domyślnie uruchomi się strona z logowaniem, za pomocą przycisku Register zostaniemy przeniesieni na stronę, na której można utworzyć nowego użytkownika.
    Po podaniu odpowiednich danych konto zostanie utworzone, na emaila zostanie wysłana wiadomość informująca o utworzeniu konta.

2)Przez program typu Postman:
    Aby utworzyć nowego użytkownika musimy przejść na adres /register. Konto możemy utworzyc za pomocą zakładki body -> x-www-form-urlencoded poprzez wpisanie w polach klucz:
    name, email, password, a w wartościach odpowiednie dane. Przed wysłaniem należy zmienić metodę na POST.

Logowanie się do API:
1)Przez przeglądarkę:
    Domyślnie uruchomi się strona z logowaniem, jeżeli posiadamy konto, podajemy email oraz hasło, następnie po zatwierdzeniu zostaniemy przeniesieni na stronę powitalną.
    Z tego poziomu możemy wybrać jeden z endpointów: /users, /books, /movies, /songs
    Po zalogowaniu na podanego emaila zostanie wysłana wiadomość informująca o logowaniu

2)Przez program typu Postman
    Domyślnie uruchomi się strona z logowaniem, jeżeli posiadamy konto, możemy zalogować się poprzez zakładkę body -> x-www-form-urlencoded poprzez wpisanie w polach klucz:
    email i password a w wartościach odpowieni email i hasło - Przed wysłaniem należy zmienić metodę na POST
    Po zalogowaniu zostaniemy przekierowani na stronę powitalną, a na podanego emaila zostanie wysłana wiadomość.

Przykładowe query:
/users
    Metoda GET - wyswietli wszystkich użytkowników
    Metoda GET /id - wyświetli danego użytkownika
    Metoda POST i dane np.: - dodawanie użytkownika
    {
        "firstName":"Andrzej",
        "lastName":"Bąk",
        "age":56,
        "userName":"ABąk",
        "email":"a@bak.pl",
        "password":"123"
    }
    Medota PATCH /id i dane np.: - dokonywanie zmian
    {
        "age":57,
        "userName":"AdB",
        "email":"B@o2.pl"
    }
    Metoda DELETE /id - usuwanie




