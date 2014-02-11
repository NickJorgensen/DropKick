
DEL /F /Q %~dp0\dk.nw
7za a -tzip dk.nw -i@%~dp0\nwProgramOutput.lst

DEL /F /Q %~dp0\dk.exe
copy /b %~dp0\nw.exe+%~dp0\dk.nw %~dp0\dk.exe
dk.exe