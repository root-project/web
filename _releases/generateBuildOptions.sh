#!/bin/bash
# Extract a markdown table from build options defined in cmake/
# Stephan Hageboeck, 05/2020
set -o pipefail

buildOptionsURL="https://raw.githubusercontent.com/root-project/root/__BRANCH__/cmake/modules/RootBuildOptions.cmake"
outfileTemplate="_includes/build_options___BRANCH__.md"
usageMessage="Usage: generateBuildOptions.sh [-h|--help] [-d destination] branch [branch ...]"

while [ $# -gt 0 ]; do 
  case $1 in
    -h|--help)
      echo $usageMessage 
      exit
      ;;
    -d)
      shift
      outfileTemplate="$1/build_options___BRANCH__.md"
      shift
      ;;
    *)
      branches="${branch} $1"
      shift
      ;;
  esac
done

if [ -z "$branches" ]; then
  echo $usageMessage
  exit 1
fi

exitcode=0

if [ ! -d "${outfileTemplate%/*}" ]; then
  echo "The outfile destination \"${outfileTemplate%/*}\" is not accessible from the current directory."
  echo $usageMessage
  exit 1
fi

for branch in ${branches}; do
  page=${buildOptionsURL/__BRANCH__/$branch}
  outfile=${outfileTemplate/__BRANCH__/$branch}
  outfile_new=${outfile}_new

  echo "| Build option | Effect | Default |" > ${outfile_new}
  echo "|--------------|--------|---------|" >> ${outfile_new}
  curledPage=$(curl -s $page) || { echo "Could not retrieve page" 1>&2; exitcode=1; }
  echo -e "$curledPage" |
    { grep -h '^[[:space:]]*ROOT_BUILD_OPTION\(.*\)' || { echo "Invalid page from github for $page" 1>&2; exit 1; }; } |
    sort -u |
    sed -n -E 's%^[[:space:]]*ROOT_BUILD_OPTION\([[:space:]]*([[:graph:]]+)[[:space:]]+(ON|OFF)[[:space:]]+\"([^\"]+[[:space:]]*)\".*$%| `\1` | \3 | \2 |%;p' >> ${outfile_new} || { rm ${outfile_new}; exit 2; }
  echo "| | **Auxiliary build options** | |" >> ${outfile_new}
  echo "$curledPage" |
    grep -h -E '^[[:space:]]*option\([[:space:]]*([[:alnum:]]|-)+[[:space:]]+\".*\)' |
    sort -u |
    sed -n -E 's%^[[:space:]]*option\([[:space:]]*([[:graph:]]+)[[:space:]]+\"([^\"]+)\"[[:space:]]+(ON|OFF)[[:space:]]*\).*$%| `\1` | \2 | \3 |%;p' >> ${outfile_new}

  if [ $? -ne 0 ]; then
    exitcode=$?
  else
    mv $outfile_new $outfile
  fi
done

exit $exitcode
