# TiUIWrapper

The TiUIWrapper plugin auto generates a wrapper plugin for whatever Titanium SDK your using, and auto regenerates only when you need to.

And yes it is cross platform :)

## This Plugin

You reference your plugin in the application `tiapp.xml` file such as:

    <plugins>
        <plugin version="0.1">ti.proxy.manager</plugin>
    </plugins>

You then add your plugin directly to your project. Copy your `plugin.py` to the directory
`$PROJECT_DIR/plugins/ti.proxy.manager/0.1/`.


# Sample Application

The `example/` folder contains a very simple `app.js` as a proof-of-concept.  You can copy that file into a new project, then run the project to see how it works.

For now you also need to copy in the blank `TiUIwrapper.js` file too... I will fix that ASAP

# To-DO

- Add all properties as well... so you dont have to use the TiElement pass-through

- Add platform specific APIs for iOS and Andorid

- Add auto memory releaser

- Add abilty to clean out un-needed wrappers when you distribute for the stores

# License

The code is Copyright 2012 by Matthew Apperson, and made available under the Apache 2.0 license.

# Disclaimers

This is a private project of mine. If you have issues, please file them in the GitHub Issues section of the repository and I will try to get to them in a timely fashion.