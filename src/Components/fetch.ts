[
    {
        "/api/v1/citys": "Выдача городов",
        "request": "GET"
    },
    {
        "/api/v1/profile-management": "Даёт на странице управления профиля данные о человеке, имя и профиль айди",
        "request": "GET"
    },
    {
        "/api/v1/profile-settings": "Данные для старницы настроек, даёт почту, город и телефоны",
        "request": "GET"
    },
    {
        "/api/v1/index-page": "Получение карточек товаров для главной страницы",
        "request": "GET"
    },
    {
        "/api/v1/my-posts": "Получение всех объёвлений пользователя",
        "request": "GET"
    },
    {
        "/api/v1/wait-admin": "Для админа, объявления которые ещё не прошли проверку админа",
        "request": "GET"
    },
    {
        "/api/v1/profile-settings-replace": "ДОБАВЛЕНИЯ НОВОГО НОМЕРА И ИЗМЕНЕНИЯ ГОРОДА",
        "request": "POST",
        "key": {
            "key1": "city",
            "key2": "telephone_two"
        }
    },
    {
        "/api/v1/replace-password": "АПИ ДЛЯ СМЕНЫ ПАРОЛЯ",
        "request": "POST",
        "key": {
            "key1": "old_password",
            "key2": "new_password"
        }
    },
    {
        "/api/v1/replace-email": "АПИ СМЕНЫ ПОЧТЫ",
        "request": "POST",
        "key": {
            "key1": "email"
        }
    },
    {
        "/api/v1/replace-email-check-code": "АПИ ДЛЯ ПРОВЕРКИ КОДА ИЗ ПОЧТЫ ПРИ СМЕНЕ ПОЧТЫ",
        "request": "POST",
        "key": {
            "key1": "email",
            "key2": "new_email",
            "key3": "code"
        }
    },
    {
        "/api/v1/add-post": "ДОБАВЛЕНИЯ НОВОГО ПОСТА",
        "request": "POST",
        "key": {
            "key1": "category",
            "key2": "subcategory",
            "key3": "caption",
            "key4": "description",
            "key5": "price",
            "key6": "phone",
            "key7": "tariff",
            "key8": "photo(на этот ключ можно отправить как одно фото, так и больше, главное на этот один)" 
        }
    },
    {
        "/api/v1/add-summary": "ДОБАВЛЕНИЯ НОВОГО ПОСТА РЕЗЮМЕ",
        "request": "POST",
        "key": {
            "key1": "category",
            "key2": "subcategory",
            "key3": "info_job",
            "key4": "job",
            "key5": "status_search",
            "key6": "job_next_day",
            "key7": "years_exp",
            "key8": "gender",
            "key9": "data_birthday",
            "key10": "ready_togouthome",
            "key11": "togouthome",
            "key12": "contry_people",
            "key13": "type_work",
            "key14": "name_company",
            "key15": "why_jobs",
            "key16": "start_work_time",
            "key17": "stop_work_time",
            "key18": "description_jobs",
            "key19": "name_universitet",
            "key20": "universitet_why_jobs",
            "key21": "years_stop_univer",
            "key22": "language",
            "key23": "level_language",
            "key24": "about_me",
            "key25": "cant_dollars",
            "key26": "photos"
        }
    },
    {
        "/api/v1/send-mail": "ОТПРАВКА КОДА НА ПОЧТУ ПРИ РЕГИСТРАЦИИ",
        "request": "POST",
        "key": {
            "key1": "email"
        }
    },
    {
        "/api/v1/check-code": "ПРОВЕРКА КОДА ИЗ ПОЧТЫ ПРИ РЕГИСТРАЦИИ",
        "request": "POST",
        "key": {
            "key1": "email",
            "key2": "code"
        }
    },
    {
        "/api/v1/last-check-in": "ПОЛУЧЕНИЕ ДАННЫХ С ПОСЛЕДНЕГО ЭТАПА РЕГИСТРАЦИИ",
        "request": "POST",
        "key": {
            "key1": "email",
            "key2": "subject",
            "key3": "name_profile",
            "key4": "phone",
            "key5": "password",
            "key6": "inn"
        }
    },
    {
        "/api/v1/login": "Авторизация пользователя",
        "request": "POST",
        "key": {
            "key1": "email",
            "key2": "password"
        }
    },
    {
        "/api/v1/logout": "Выход из аккаунта",
        "request": "POST",
        "key": "нету"
    },
    {
        "/api/v1/index-category": "АПИ ДЛЯ ПОЛУЧЕНИЯ КАРТОЧЕК ОПРЕДЕЛЕННОЙ КАТЕГОРИИ",
        "request": "POST",
        "key": {
            "key1": "category",
            "key2": "sub_category",
            "key3": "page"
        }
    },
    {
        "/api/v1/delete-post": "АПИ ДЛЯ УДАЛЕНИЯ объявления СО СТОРОНЫ ПОЛЬЗОВАТЕЛЯ",
        "request": "POST",
        "key": {
            "key1": "id_card"
        }
    },
    {
        "/get_admin_posts": "# API ДЛЯ МОДЕРАЦИИ ОБЪЯВЛЕНИЯ (АДМИНКА)",
        "request": "POST",
        "key": {
            "key1": "email",
            "key2": "username"
        }
    },
    {
        "/check_admin_posts": "АПИ ДЛЯ УДАЛЕНИЯ ИЛИ ВЫСТАВЛЕНИЯ ПУБЛИКАЦИИ (АДМИНКА)",
        "request": "POST",
        "key": {
            "key1": "status_card(TRUE/FALSE)",
            "key2": "id_card",
            "key3": "id_user"
        }
    }
]   
