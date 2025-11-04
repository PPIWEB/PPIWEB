@echo off
echo ------------------------------------------
echo [1] AGREGANDO TODOS LOS ARCHIVOS... (git add .)
echo ------------------------------------------
git add .

echo.
echo ------------------------------------------
echo [2] CREANDO EL COMMIT...
echo ------------------------------------------
:: Puedes cambiar el mensaje de abajo si quieres
git commit -m "Actualizacion automatica desde script"

echo.
echo ------------------------------------------
echo [3] SUBIENDO CAMBIOS A GITHUB... (git push)
echo ------------------------------------------
git push

echo.
echo ------------------------------------------
echo      ¡PROCESO TERMINADO!
echo ------------------------------------------
pause