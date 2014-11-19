# Adding Icons to Mapfolio with Font Custom

All of the icons that we have in Mapfolio are part of a font set created by Font Custom.
The general idea behind Font Custom is that you have a directory full of SVGs, and the
corresponding icon in the font set can be referred to with an `icon-` prefix to that
SVG filename.

For example, if you had an SVG called `Measles.svg`, you would in turn be able to
refer to the resulting icon like so:

```html
<i class="icon-Measles"></i>
```

## Install Font Custom

Font Custom is an open source tool written in Ruby. No Windows support, sorry... Make sure
you have installed Brew if you are on a Mac. Getting this thing installed tends to be a headache,
but you can do it ; )

```sh
# On Mac
sudo chmod -R a+rwx /usr/local/Cellar
brew install fontforge --with-python
brew install eot-utils
sudo gem install fontcustom

# On Linux
sudo apt-get install fontforge
wget http://people.mozilla.com/~jkew/woff/woff-code-latest.zip
unzip woff-code-latest.zip -d sfnt2woff && cd sfnt2woff && make && sudo mv sfnt2woff /usr/local/bin/
sudo gem install fontcustom
```

Don't forget the `--with-python` tag if you are on a Mac. Yes, it's a Ruby tool with a Python dependency.

On Yosemite, I had some issues with brew. Brew is fickle with permissions, and it won't let you sudo it.
To get around this, I did the following to get the install to work:

```sh
sudo chmod -R a+rwx /usr/local
sudo chmod -R a+rwx /Library/Ruby/Gems/
brew link xz
```

Then, follow the Mac install instructions and it should work fine. Give it some time to install.

## Use Font Custom to add a Sector Icon in Filters Panel

Mapfolio automatically templates in the names of a given sector corresponding to a given font. You can see this
being done via AngularJS here:

https://github.com/AmericanRedCross/GeoForce/blob/0ee9743712fab6ddfddf3df7eada23d567e967c8/GeoAngular/app/index.html#L411

Note that it removes all spaces, & signs, and commas.

First thing you want to do is get an SVG for the sector you want to add. put that in:

```
GeoAngular/app/styles/svg/
```

You need to get the name of the sector exactly correct, so look at `Succubus/meta-data/sf-project-filter-checkboxes.json`
This is only there after you're run the Succubus, so make sure you do that.

You'll want to name your svg with the same name without spaces, &, and commas.

Then, make sure you have `cd`ed into `GeoAngular/app/styles`. Then, execute:

```sh
fontcustom compile svg
```

Now you should have that icon in your font.
Check out if its there by looking at `GeoAngular/app/styles/fontcustom/fontcustom-preview.html`.

Now, re-build the app by running `npm run watch` in `GeoAngular`.

Let me, @hallahan, know if I forgot anything.
