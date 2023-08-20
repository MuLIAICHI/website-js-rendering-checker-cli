# Website JavaScript Rendering Checker CLI

A simple command-line tool to check if a website uses JavaScript rendering.

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Options](#options)
- [Examples](#examples)
- [Dependencies](#dependencies)
- [License](#license)

## About

This CLI tool uses Puppeteer to load a website, capture its content before and after disabling JavaScript, and then compares the content to determine if the website relies on JavaScript rendering.

## Getting Started

1. Clone this repository to your local machine:

   ```sh
   git clone https://github.com/your-username/website-js-rendering-checker-cli.git
   cd website-js-rendering-checker-cli

2. Install dependencies:

`npm install puppeteer commander`

## Usage 

Run the CLI tool with the -u or --url option followed by the URL of the website you want to check.

`./cli.js -u https://www.example.com`

## Options 

1. -u, --url <url>: This option allows the user to specify the URL of the website they want to check. The -u is the short form, and --url is the long form of the option. The <url> part indicates that the user should replace it with an actual URL.

Example usage with the short form: `./cli.js -u https://www.example.com`
Example usage with the long form:` ./cli.js --url https://www.example.com`
The (required) annotation in the README indicates that providing a value for this option is mandatory when running the command. Users must specify a URL for the tool to work properly.

2. Other options: Depending on the functionality you want to provide in your tool, you can add more options similarly. For example, you might consider adding options like:

-t, --timeout <milliseconds>: Specify the timeout for page loading (in milliseconds).
-h, --help: Show help information about how to use the tool.
-v, --version: Show the version of your tool.

## Examples

`./cli.js -u https://www.example.com`

## Dependencies

* [Puppeteer](https://github.com/puppeteer/puppeteer) : Headless Chrome Node.js API to interact with the website.


## License

This project is licensed under the `MIT License.`


