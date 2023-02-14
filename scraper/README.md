# Workflow

discover

-   use sourcegraph to get new graphql urls
-   for all entries with no status or status failed:
-   try fetching their schema
-   if no title, description, website, add them to entry with website ones
-   try generating npm package with no publish
-   mark them as success or failed
-   add website, title, description

adding to website

-   manually mark apis in csv as enabled, optionally add example query hints
-   for each enabled package with no previous published version (also add npm scope so if i change it it will run again)
-   generate npm package
-   generate example queries code
-   publish package (if not dry)
-   save generated queries, favicon, version to generated.csv
-   if not dry: add package to csv with @scope/slug and version with 0.0.0

updating npm package (once a day?)

-   clean up error message from csv
-   if schema changed increase minor version
-   generate again package
-   generate again queries, favicon
-   if generation failed, add error message to csv
-   publish with new version
-   generate changelog? later maybe

so manual steps are:

-   discover new urls with `pnpm discover` and add them to csv
-   add slug to apis that i think are interesting
-   try generating package with `pnpm publish:dry`, inspect package folder, see generated queries and such

# considerations

where should i put generated code? if it's same csv file it may become difficult to edit it
