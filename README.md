## Hill City RVA | www.christmasinrva.com

Static site generated using [Hugo](https://gohugo.ion).

You need the following installed:

- Git
- Hugo
- Homebrew

To install git on a Mac OS device using homebrew: `brew install git`

You can install hugo by following the instructions here: https://gohugo.io/getting-started/quick-start/

To run locally, enter the following in the root of this repository.

- Start server: `hugo server -w`
    - The server will start on port `1313` and the website can be viewed by opening a tab in your browser to `http://localhost:1313/`
    - The `-w` flag means Hugo will watch for changes and update the site as they are saved. For instance, if you have the server running and make a change to the `config.toml` those changes will be automatically rendered in your browser if you have the website open in a tab; no need to refresh.

To generate the site in the `/public` directory at the root of this repository: `hugo`

The live version of the site is hosted in Amazaon Web Services using a static S3 bucket and Cloudfront for the CDN and SSL certificate. The PEM for that certificate is stored in AWS and is not available in this repo.

<strong>Maintainer:</strong> Nick Wisner

<strong>Publisher:</strong> Hill City Church

<strong>License:</strong> Source code is MIT, all images and copy text are copyrighted by Hill City Church. 2017
