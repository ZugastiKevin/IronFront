.PHONY: deploy install

deploy:
	powershell.exe -NoProfile -ExecutionPolicy Bypass -File C:\Users\rocha\Documents\PowerShell\deploy.ps1

install:
	composer dump-env prod
	php bin/console doctrine:migrations:migrate -n
	php bin/console importmap:install
	php bin/console asset-map:compile
	php bin/console cache:clear