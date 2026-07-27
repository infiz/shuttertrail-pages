#!/bin/sh

set -eu

for file in "$@"; do
  formatted_file="$(mktemp)"
  trap 'rm -f "$formatted_file"' EXIT HUP INT TERM

  xmllint --format --output "$formatted_file" "$file"

  if ! cmp -s "$file" "$formatted_file"; then
    mv "$formatted_file" "$file"
  else
    rm "$formatted_file"
  fi

  trap - EXIT HUP INT TERM
done
