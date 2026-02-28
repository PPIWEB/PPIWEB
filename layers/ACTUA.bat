@echo off
:: Se asegura de que el script se ejecute en la carpeta correcta
cd C:\PPPI\Proyecto-Mapa

:: Inicia el observador nodemon
nodemon --watch "PPI_TABLA.csv" --exec "actualizar_y_subir.bat"