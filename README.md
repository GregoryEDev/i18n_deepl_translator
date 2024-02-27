### Deepl Translation Script

This script utilizes the Deepl API to translate text from one language to another. It takes a source JSON file containing English strings, translates them to the specified target language, and outputs the translated strings into a new JSON file.

#### Requirements

- Node.js installed on your system.
- Deepl API key. You can obtain one from the [Deepl website](https://www.deepl.com/pro?cta=header-prices/).

#### Installation

1. Clone this repository or download the script file (`index.js`) directly.
2. Install dependencies by running `npm install`.

#### Usage

1. Replace `"api-key-here"` with your actual Deepl API key in the script (`index.js`).
2. Ensure your source JSON file (example `en.json`) is located in the `output` directory. Modify the `sourceFile` variable if your file location differs.
3. Modify the `targetLanguage` variable to specify the language you want to translate the text into (e.g., `"de"` for German).
4. Run the script by executing `node translate.js` in your terminal.

#### Example

```bash
npm start
```

#### Output

The translated strings will be saved in a new JSON file named according to the target language (e.g., `de.json`) within the `output` directory.

#### Note

- Make sure your Deepl API key is kept secure and not shared publicly.
- Ensure your source JSON file follows the correct structure with English strings under `translations` key.

#### Disclaimer

This script is provided as-is without any warranty. Use it at your own risk.
