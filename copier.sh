echo "Copyking"

@echo off

for %%f in (*.js) do (
  cp "%%~fname%%~extension%%" "./test/%%fname.test%%extension%%"
)

@echo on
echo "Files copied:"

for %%f in (*.js) do (
  echo "./test/%%~fname%%~extension"
)

echo "Job done!"
