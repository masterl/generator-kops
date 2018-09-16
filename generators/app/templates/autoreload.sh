#!/bin/bash

readonly PROJECT_ROOT=$( cd "$( dirname "$0" )" && pwd )

reload_command="${PROJECT_ROOT}/reload-browser Firefox"

readonly print_line="echo \\\"==================================================\\\""

readonly entr_commands="
tput reset;
echo \"Reloading browser...\";
$print_line;
$reload_command;
echo;
$print_line;
echo;
date;
"

while true; do
  find "${PROJECT_ROOT}/build" | entr -d bash -c "$entr_commands"
done
