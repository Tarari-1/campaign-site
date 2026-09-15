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

## Google Forms

The custom feedback form posts responses to the campaign's Google Form through a hidden response frame. The first two campaign questions require at least one selection; name, email, and both open-text questions are optional.

## Publish

This site can be published directly with GitHub Pages once GitHub authentication and a repository are set up.
