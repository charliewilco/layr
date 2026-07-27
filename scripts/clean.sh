#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

generated_directories=(
	".astro"
	".turbo"
	".next"
	"dist"
	"coverage"
	".nyc_output"
)

find_args=(
	.
	-path "*/node_modules" -prune
	-o -path "./.git" -prune
	-o -type d "("
)

for index in "${!generated_directories[@]}"; do
	if [[ "$index" -gt 0 ]]; then
		find_args+=(-o)
	fi

	find_args+=(-name "${generated_directories[$index]}")
done

find_args+=(")" -print -prune)

directories=()
while IFS= read -r directory; do
	directories+=("$directory")
done < <(find "${find_args[@]}" | sort)

if [[ "${#directories[@]}" -gt 0 ]]; then
	printf "Removing generated directories:\n"
	printf "  %s\n" "${directories[@]}"
	rm -rf "${directories[@]}"
else
	printf "No generated directories found.\n"
fi

build_info_files=()
while IFS= read -r build_info_file; do
	build_info_files+=("$build_info_file")
done < <(
	find . \
		-path "*/node_modules" -prune \
		-o -path "./.git" -prune \
		-o -type f -name "*.tsbuildinfo" -print |
		sort
)

if [[ "${#build_info_files[@]}" -gt 0 ]]; then
	printf "Removing TypeScript build info files:\n"
	printf "  %s\n" "${build_info_files[@]}"
	rm -f "${build_info_files[@]}"
fi

for generated_file in css.json parker.json; do
	if [[ -e "$generated_file" ]] && ! git ls-files --error-unmatch "$generated_file" >/dev/null 2>&1; then
		rm -f "$generated_file"
	fi
done
