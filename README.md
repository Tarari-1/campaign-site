# Tarari Kalango campaign site

A three-page static campaign website for the 1Y Alumni Affairs Chair election.

## Preview locally

From this directory, run:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Campaign assets

Tarari's supplied headshot is displayed on the About page. The Yale SOM ampersand currently uses a typographic treatment and can be replaced with the official asset when its source file is added to `assets/`.

## Connect Google Forms

Create a Google Form with name, email, feedback, and anonymous fields. Send the public form link plus the field entry IDs (`entry.123...`) so the form in `feedback.html` can be connected. Until then, submission is intentionally prevented and a configuration message is shown.

## Publish

This site can be published directly with GitHub Pages once GitHub authentication and a repository are set up.
