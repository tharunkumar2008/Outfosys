@echo off
title OutfoSys Agency Server
echo ==============================================
echo Starting OutfoSys Creative Agency Web Server...
echo URL: http://localhost:5173
echo ==============================================
cd /d "%~dp0"
call npm.cmd run dev
pause
