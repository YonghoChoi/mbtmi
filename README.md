# mbtmi

1. 가상환경 만들기
```buildoutcfg
djangoPrj01> python3 -m venv venv
```

2. 가상환경 활성화 하기
```buildoutcfg
source venv01/bin/activate
```

3. 장고 설치하기
```buildoutcfg
pip install django
```

4. 장고 프레임워크 로드하기

```buildoutcfg
django-admin startproject web .
```

5. 서버 구동
```buildoutcfg
cd web
python3 manage.py runserver
```

6. 어플리케이션 구동
```buildoutcfg
python manage.py startapp mbtmi
```