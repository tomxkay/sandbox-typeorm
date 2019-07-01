#!/bin/bash
mysql -uroot --password="" -h 127.0.0.1 classicmodels < /docker-entrypoint-initdb.d/classicmodels.sql

