#!/bin/bash

# Check if this is ran with `source` or `.` and exit if not
if [[ "$0" == "${BASH_SOURCE[0]}" ]]; then
    echo "This script must be sourced. Run with \`source setup-exports.sh\`"
    exit 1
fi

# This script is used to set up the exports for the langchain project.
# Variables are specified in .env

# Load variables from .env
# Iterate through each line in .env
while read line; do
    # If the line is not empty and does not start with a comment
    if [[ ! -z "$line" && "$line" != \#* ]]; then
        # Set the variable
        echo "Setting variable $line"
        export $line
    fi
done < .env
