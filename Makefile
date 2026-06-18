SHELL := C:/Windows/System32/cmd.exe
.SHELLFLAGS := /C

.PHONY: deploy

deploy:
	powershell.exe -NoProfile -ExecutionPolicy Bypass -File C:\Users\rocha\Documents\PowerShell\deploy.ps1

install: vendor/autoload.php
	composer dump-env prod
	php bin/console doctrine:migrations:migrate -n
	php bin/console importmap:install
	php bin/console asset-map:compile
	php bin/console cache:clear

vendor/autoload.php: composer.lock composer.json
	composer install --no-dev --optimize-autoloader
	touch vendor/autoload.php