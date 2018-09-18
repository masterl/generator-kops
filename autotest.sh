#!/bin/bash

readonly PROJECT_ROOT=$( cd "$( dirname "$0" )" && pwd )

readonly test_command="npm test"

readonly print_line="echo \\\"==================================================\\\""

readonly entr_commands="
tput reset;
echo \"Reloading browser...\";
$print_line;
$test_command;
echo;
$print_line;
echo;
date;
"

while true; do
  test_files=$(find "${PROJECT_ROOT}" | grep "${PROJECT_ROOT}/__tests__")
  generator_files=$(find "${PROJECT_ROOT}" | grep "${PROJECT_ROOT}/generators")
  test_utils_files=$(find "${PROJECT_ROOT}" | grep "${PROJECT_ROOT}/test-utils")
  echo -e "$test_files\\n$generator_files\\n$test_utils_files" |
  entr -d bash -c "$entr_commands"
done
