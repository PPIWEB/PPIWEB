@echo off
echo ------------------------------------------
echo [PASO 1] EJECUTANDO SCRIPT PARA ACTUALIZAR EL JS...
echo (node actualizar.js)
echo ------------------------------------------

:: Ejecuta el script de Node.js
node actualizar.js

:: Revisa si el comando anterior (Node) falló
if %ERRORLEVEL% neq 0 (
    echo.
    echo ------------------------------------------
    echo !! ERROR: El script 'node actualizar.js' falló.
    echo No se subira nada a GitHub.
    echo ------------------------------------------
    pause
    exit /b
)

echo.
echo ¡El archivo JS se actualizo con exito!
echo.
echo ------------------------------------------
echo [PASO 2] AGREGANDO CAMBIOS A GIT... (git add .)
echo ------------------------------------------
git add .

echo.
echo ------------------------------------------
echo [PASO 3] CREANDO EL COMMIT...
echo ------------------------------------------
:: Puedes cambiar el mensaje del commit si quieres
git commit -m "Actualizacion automatica de datos del mapa"

echo.
echo ------------------------------------------
echo [PASO 4] SUBIENDO CAMBIOS A GITHUB... (git push)
echo ------------------------------------------
git push

echo.
echo ------------------------------------------
echo      ¡PROCESO TOTALMENTE TERMINADO!
echo ------------------------------------------
pause