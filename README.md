# Závěrečný projekt | Webová stránka Uniosservis.cz

## Cíle projektu:
* vytvořit funkční webovou stránku pomocí MVC architektury
* využít Django CMS, který vychází z frameworku Django
* splnit požadavky zákazníka

## Odkazy:
* [Django CMS](https://www.django-cms.org/en/)
* [Custom Templates](https://stackoverflow.com/questions/31430000/how-to-set-up-a-custom-template-in-djangocms)
* [Youtube tutorial](https://www.youtube.com/watch?v=NbsRVfLCE1U)

## Instalace:

### Linux:
```sh
$ git clone https://github.com/lukyncze/final-project
$ cd final-project/unios/
$ virtualenv -p python3 ../.venv
$ . ../.venv/bin/activate
$ pip install -r requirements.txt
$ python manage.py runserver
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