set calledDir=%cd%

set locationOfEmscripten="C:\Program Files\emscripten\emsdk\"


@REM go to emscripten dir
cd %locationOfEmscripten%
@REM activate the emscripten bat file, to setup the shell
call %locationOfEmscripten%emcmdprompt.bat


@REM go back to start dir
cd %calledDir%