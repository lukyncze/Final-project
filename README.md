# Závěrečný projekt | Webová stránka Uniosservis.cz

Tento projekt je zaměřen na tvorbu firemních webových stránek. Práce vznikla jako zadání webových stránek od firmy UNIOS SERVIS s.r.o. Mezi hlavní požadavky patří zjednodušení a sjednocení vzhledu, vytvoření plně responzivních stránek s rychlým načítáním a dále také oprava chyb starých stránek. Webové stránky byly vytvořeny v redakčním systému django CMS (Content Management System). Při vytváření stránek bylo využito modulů (plugins), které výrazně usnadní a zefektivní práci na webu.

## Cíle projektu:
* zjednodušení a sjednocení vzhledu
* vytvoření plně responzivních stránek
* zlepšení rychlosti načítání
* opravení chyb předešlých stránek
* vytvoření jednodušší animace
* vytvoření kontaktního formuláře

## Instalace projektu:

### Linux:
```sh
git clone https://github.com/lukyncze/final-project
cd final-project/unios/
virtualenv -p python3 ../.venv
. ../.venv/bin/activate
pip install -r requirements.txt
python manage.py runserver
```

### Windows:
```sh
git clone https://github.com/lukyncze/final-project
cd final-project/unios/
virtualenv env ../env
../env/Scripts/activate.bat
pip install -r requirements.txt
python manage.py runserver
```

## Dokumentace projektu:
* [Dokumentace](https://github.com/lukyncze/final-project/blob/master/project_documentation/dokumentace_sukenik.pdf)
* [Prezentace](https://github.com/lukyncze/final-project/blob/master/project_documentation/prezentace_sukenik.pptx)

## Seznam použitých informačních zdrojů:
* [django CMS](https://www.django-cms.org/en/)
* [Django](https://www.djangoproject.com/)
* [Stackoverflow](https://stackoverflow.com/)
* [Bootstrap](https://getbootstrap.com/)
* [W3Schools](https://www.w3schools.com/)
* [YouTube tutorial](https://www.youtube.com/watch?v=NbsRVfLCE1U)
