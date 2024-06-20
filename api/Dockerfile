FROM php:8.2-fpm

# Install dependencies
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y openssl zip unzip git
RUN apt-get install -y zlib1g-dev libwebp-dev libpng-dev && docker-php-ext-install gd
RUN apt-get install libzip-dev -y && docker-php-ext-install zip
RUN apt-get install -y libpq-dev postgresql-dev

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install PHP extensions
RUN docker-php-ext-install pdo
RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pgsql pdo_pgsql

# Set working directory
WORKDIR /api
COPY . .

# Install dependencies
RUN composer install

CMD php artisan serve --host=0.0.0.0 --port=8000
