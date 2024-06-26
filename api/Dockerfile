FROM php:8.2-cli

WORKDIR /api
COPY . .

RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y openssl zip unzip git wget
RUN apt-get install -y zlib1g-dev libwebp-dev libpng-dev && docker-php-ext-install gd
RUN apt-get install libzip-dev -y && docker-php-ext-install zip
RUN apt-get install -y libpq-dev

RUN docker-php-ext-install zip pdo pdo_mysql

RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pgsql pdo_pgsql

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN composer global require leafs/cli
ENV PATH="${PATH}:/root/.composer/vendor/bin"

RUN composer install \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --no-dev \
    --prefer-dist \
    --optimize-autoloader

CMD ["php", "leaf", "serve", "--port=3000"]
