Ext.data.JsonP.dev_uilanguage({"guide":"<h1 id='dev_uilanguage-section-adjusting-ckeditor-ui-language'>Adjusting CKEditor UI Language</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/dev_uilanguage-section-setting-the-default-language'>Setting the Default Language</a></li>\n<li><a href='#!/guide/dev_uilanguage-section-overriding-user-language-settings'>Overriding User Language Settings</a></li>\n<li><a href='#!/guide/dev_uilanguage-section-ui-languages-demo'>UI Languages Demo</a></li>\n</ol>\n</div>\n\n<p>CKEditor is translated into over 60 languages and by default, it is displayed in the user's language (as set in the browser or operating system settings). If the matching language version is not available, the editor user interface will be displayed in the default language version (most commonly: English).</p>\n\n<p class=\"tip\">\n    Please note that CKEditor localizations are mostly provided by our awesome community through the <a href=\"https://www.transifex.com/projects/p/ckeditor/\">CKEditor UI Translation Center</a>, so if you would like to help with translating CKEditor into your native language or correct an existing localization, do not hesitate to join us!\n</p>\n\n\n<h2 id='dev_uilanguage-section-setting-the-default-language'>Setting the Default Language</h2>\n\n<p>The website developer can set the default language that will be used for CKEditor UI if the user's language is not available. English is the default setting here, but you can adjust this to your needs by modifying the <a href=\"#!/api/CKEDITOR.config-cfg-defaultLanguage\">config.defaultLanguage</a> configuration option.</p>\n\n<p>For example, if your website is targeted at the German audience, you may want to set the default CKEditor UI language to German, too:</p>\n\n<pre><code>config.defaultLanguage = 'de';\n</code></pre>\n\n<p>This will cause CKEditor to be displayed in German to all users for whom a matching localization cannot be found.</p>\n\n<p><p><img src=\"guides/dev_uilanguage/uilanguage_01.png\" alt=\"\" width=\"921\" height=\"293\"></p></p>\n\n<h2 id='dev_uilanguage-section-overriding-user-language-settings'>Overriding User Language Settings</h2>\n\n<p>The developer is also able to force CKEditor to always use just one pre-defined UI localization. This will mean that no matter what locale settings the user browsers and operating systems use, CKEditor will always be displayed in the language set by the developer.</p>\n\n<p>This feature may come in handy for all homogeneous environments where the entire user base speaks the same language. The developer will then be able to create a <a href=\"http://ckeditor.com/builder\">custom build</a> stripped of all redundant language files except for the desired localization.</p>\n\n<p>If you want to define the language that will override all user settings, use the <a href=\"#!/api/CKEDITOR.config-cfg-language\">config.language</a> configuration setting.</p>\n\n<p>For example, if your website is in German and you want to display the German language version of the CKEditor UI to all your visitors (no matter what their locale settings are), use the following setting:</p>\n\n<pre><code>config.language = 'de';\n</code></pre>\n\n<p>This will cause CKEditor interface to be displayed in German to all users, overriding their browser-stored preferences.</p>\n\n<h2 id='dev_uilanguage-section-ui-languages-demo'>UI Languages Demo</h2>\n\n<p>See also the <a href=\"../samples/uilanguages.html\">working UI Languages sample</a> that showcases all available CKEditor user interface localizations and includes a simple script that lets the user choose a different language version.</p>\n","title":"UI Language","meta_description":"Adjusting CKEditor UI Language.","meta_keywords":"ckeditor, editor, wysiwyg, language, localization, localisation, translation, internationalization, ui, interface, configure, configuration, setup, settings, options, customization, customize, customise, customisation, config, modification, modify, change"});