# cleme-paolo-wedding-theme

A simple one pager theme for hugo with all the important sections to organise your wedding.

## Installation

```
$ mkdir themes
$ cd themes
$ git submodule add https://github.com/paba19/cleme-paolo-wedding-theme.git cleme-paolo-wedding-theme
```


## Bootstrap your content

After the theme is installed as usual, run this command:

```hugo new --kind landing-page content/landing-page```

Now you can change the content under content/landing-page sections.


## Features

### Modular sections

Each section of the one pager will be shown only if the relative md file(s) are under content/landing-page. 

So if you don't like - say - the gifts section, no problems just ditch its md file:

```
rm -f content/landing-page/gifts.md
```

### Multilingual

The theme support multiple languages.

Just move the directory landing-page in content/ under a language directory. The configure as usual the language directories in the config file of your website.


## About

Theme produced by Paolo Barile for his wedding. Couldn't find any good onepager that could fir for this simple scope so just decided to create one.

It's veeery far from being perfect, but it served its scope :smile:

## License
MIT Licensed. See the [LICENSE](LICENSE) file.

